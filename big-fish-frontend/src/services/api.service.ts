import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Game, GamePayload, Visit, VisitPayload } from 'big-fish-lib'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  createGame(gamePayload: GamePayload) {
    return this.http.post<Game>(`${environment.apiUrl}/games`, gamePayload)
  }

  getGame(gameId: string) {
    return this.http.get<Game>(`${environment.apiUrl}/games/${gameId}`)
  }

  recordVisit(gameId: string, visitPayload: VisitPayload) {
    return this.http.post<Visit>(`${environment.apiUrl}/games/${gameId}/visits`, visitPayload)
  }
}
