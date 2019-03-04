import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthLoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}

  canActivate(): Observable<boolean> | boolean {
    console.log(this.auth.isAuthenticated);
    if (this.auth.isAuthenticated) {
      console.log('redirect to home');
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
