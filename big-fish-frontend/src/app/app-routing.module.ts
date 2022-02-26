import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GameComponent } from './game/game.component'
import { GameResolver } from './game/game.resolver'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '/home', component: HomeComponent },
  { path: '/game/:gameId', component: GameComponent, resolve: GameResolver },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
