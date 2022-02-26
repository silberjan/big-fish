import { Checkout } from '..'

export interface Visit {
  id: number
  created: Date
  value: number // max 180
  player: string
  leg: number
  set: number
  checkout?: Checkout
}

export enum GameGoal {
  ONE_OH_ONE = 101,
  THREE_OH_ONE = 301,
  FIVE_OH_ONE = 501,
  SEVEN_OH_ONE = 701,
}

export class Game {
  id: number
  created: Date
  players: string[]
  winner?: string
  legs: number
  sets: number
  goal: GameGoal
  results: Visit[]
  checkout?: string

  get finished() {
    return !Object.values(this.overallStandings).some((set) => !set.finished)
  }

  get currentSet() {
    const overall = this.overallStandings
    return +Object.keys(overall).find(([key]) => !overall[key].finished)
  }

  get currentLeg() {
    const overall = this.overallStandings
    const set = this.currentSet
    return overall[set].finishedLegs
  }

  get currentThrowSituation() {
    const currentSet = this.currentSet
    const currentLeg = this.currentLeg
    const firstThrowIndex = (currentLeg + currentSet) % this.players.length
    const firstThrow = this.players[firstThrowIndex]
    const nextToThrow =
      this.players[(this.results.filter((v) => v.set === currentSet).length + firstThrowIndex) % this.players.length]
    return {
      firstThrow,
      nextToThrow,
    }
  }

  get overallStandings(): {
    [set: number]: { finishedLegs: number; wonLegs: { [playerId: number]: number }; finished: boolean }
  } {
    const standings = {}
    for (let s = 0; s < this.sets; s++) {
      let finishedLegs = 0
      const wonLegs = this.players.reduce((acc, p) => {
        acc[p] = 0
        return acc
      }, {})
      let setFinished = false
      for (let l = 0; l < this.legs; l++) {
        const legStandings = this.getStandings(s, l)
        if (legStandings.finished) {
          finishedLegs++
          wonLegs[this.winner]++
          if (wonLegs[this.winner] > this.legs / 2) {
            setFinished = true
          }
        }
      }
      standings[s] = {
        finishedLegs,
        wonLegs,
        finished: setFinished,
      }
    }
    return standings
  }

  getStandings(
    set: number,
    leg: number
  ): { requiredPoints: { [playerId: number]: number }; finished: boolean; winner: string } {
    const requiredPoints = this.results
      .filter((res) => res.leg === leg && res.set === set)
      .reduce(
        (acc, vis) => {
          acc[vis.player] = acc[vis.player] - vis.value
          return acc
        },
        this.players.reduce((acc, p) => {
          acc[p] = this.goal
          return acc
        }, {})
      )
    const winner = Object.keys(requiredPoints).find((playerId) => requiredPoints[playerId] === 0)
    return {
      requiredPoints,
      finished: !!winner,
      winner,
    }
  }
}
