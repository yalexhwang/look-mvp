import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
  ) {}

  ngOnInit() {
  }

  signInWithGoogle() {
    this.auth.signInWithGoogle();
  }

}
