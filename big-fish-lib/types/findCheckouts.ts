import { AnyFieldId, Checkout, DoubleFieldId, SingleFieldId, TripleFieldId } from './checkouts'

export const singleFields: { [value: number]: SingleFieldId } = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: '11',
  12: '12',
  13: '13',
  14: '14',
  15: '15',
  16: '16',
  17: '17',
  18: '18',
  19: '19',
  20: '20',
  25: 'B',
}

export const doubleFields: { [value: number]: DoubleFieldId } = {
  2: 'D1',
  4: 'D2',
  6: 'D3',
  8: 'D4',
  10: 'D5',
  12: 'D6',
  14: 'D7',
  16: 'D8',
  18: 'D9',
  20: 'D10',
  22: 'D11',
  24: 'D12',
  26: 'D13',
  28: 'D14',
  30: 'D15',
  32: 'D16',
  34: 'D17',
  36: 'D18',
  38: 'D19',
  40: 'D20',
  50: 'DB',
}

export const tripleFields: { [value: number]: TripleFieldId } = {
  3: 'T1',
  6: 'T2',
  9: 'T3',
  12: 'T4',
  15: 'T5',
  18: 'T6',
  21: 'T7',
  24: 'T8',
  27: 'T9',
  30: 'T10',
  23: 'T11',
  26: 'T12',
  29: 'T13',
  42: 'T14',
  45: 'T15',
  48: 'T16',
  51: 'T17',
  54: 'T18',
  57: 'T19',
  60: 'T20',
}

function transformToArray(set: { [value: number]: AnyFieldId }): { value: number; id: AnyFieldId }[] {
  return Object.entries(set).map(([value, id]) => ({ value: +value, id }))
}

const allFields: { value: number; id: AnyFieldId }[] = [
  ...transformToArray(singleFields),
  ...transformToArray(doubleFields),
  ...transformToArray(tripleFields),
]

const cache = new Map<number, AnyFieldId[][]>()

function findRemainingCheckouts(remainingValue: number): AnyFieldId[][] {
  if (cache.has(remainingValue)) {
    return cache.get(remainingValue) as AnyFieldId[][]
  }
  const possible = allFields
    .reduce((acc, { value, id }) => {
      const rest = remainingValue - value
      if (rest === 0) {
        acc.push([id])
      }
      if (rest > 0 && rest < 120) {
        const moreremaining = findRemainingCheckouts(rest).map((c) => [...c, id])
        acc.push(...moreremaining)
      }
      return acc
    }, [] as any[])
    .filter((p) => p.length <= 2)
  cache.set(remainingValue, possible)
  return possible
}

const values = new Array(170).fill('banana')

const checkoutMap = values.reduce((acc, v, i) => {
  const toCheck = i + 1
  const checkouts: Checkout['sequence'][] = []

  // console.log(`Finding ways to check ${toCheck}...`)

  for (const v in doubleFields) {
    const rest = toCheck - +v
    if (rest < 0) {
      break
    }
    if (rest === 0) {
      checkouts.push([doubleFields[v]])
      break
    }
    const remainingCheckoutCombos = findRemainingCheckouts(rest)
    checkouts.push(...(remainingCheckoutCombos.map((c) => [...c, doubleFields[v]]) as Checkout['sequence'][]))
  }
  acc[toCheck] = checkouts.map((c, i) => ({
    id: `${toCheck.toString().padStart(3, '0')}-${(i + 1).toString().padStart(4, '0')}`,
    sequence: c,
    value: toCheck,
  }))
  // console.log(`There are ${checkouts.length} ways to check ${toCheck}`)
  return acc
}, {})

console.log(JSON.stringify(Object.values(checkoutMap).flat(), null, 2))
