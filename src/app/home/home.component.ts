import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private user: any;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    console.log('HomeComponent');
    this.user = this.auth.profile;
    console.log(this.user);
    this.auth.getAuthState()
      .subscribe(state => {
        console.log(state);
        if (!state) {
          this.routing.goOut();
        }
      });
  }

  logOut(): void {
    this.auth.logOut();
  }
}
