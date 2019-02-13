import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { RoutingService } from '../services/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private routing: RoutingService,
  ) {}

  authSbs: Subscription;

  ngOnInit() {
    console.log('LoginComponent');
    this.auth.getAuthState()
      .subscribe(state => {
        console.log(state);
        if (state) {
          this.routing.goHome();
        }
      });
  }

  logIn() {
    this.auth.logIn();
  }

}
