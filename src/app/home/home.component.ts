import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private profile: any;

  constructor(
    private auth: AuthService,
    private routing: RoutingService,
  ) { }

  ngOnInit() {
    this.profile = this.auth.user;
    console.log(this.profile);
  }

  signOut(): void {
    this.auth.signOut();
  }
}
