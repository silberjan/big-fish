import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private api: ApiService) {}
}
