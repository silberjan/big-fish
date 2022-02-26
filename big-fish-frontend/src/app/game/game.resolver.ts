import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Game } from 'big-fish-lib'
import { Observable } from 'rxjs'
import { ApiService } from 'src/services/api.service'

@Injectable({
  providedIn: 'root',
})
export class GameResolver implements Resolve<Game> {
  constructor(private api: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Game> {
    return this.api.getGame(route.params['gameId'])
  }
}
