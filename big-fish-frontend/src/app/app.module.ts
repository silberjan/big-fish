import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { GameModule } from './game/game.module'
import { HomeModule } from './home/home.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, GameModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
