import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Game, Visit } from 'big-fish-lib'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  createGame(gamePayload: Pick<Game, 'players' | 'legs' | 'sets' | 'goal'>) {
    return this.http.post<Game>(`${environment.apiUrl}/games`, gamePayload)
  }

  getGame(gameId: string) {
    return this.http.get<Game>(`${environment.apiUrl}/games/${gameId}`)
  }

  recordVisit(gameId: string, visitPayload: Pick<Visit, 'value' | 'set' | 'leg' | 'player' | 'checkout'>) {
    return this.http.post<Visit>(`${environment.apiUrl}/games/${gameId}/visits`, visitPayload)
  }
}
