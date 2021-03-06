import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}

  canActivate(): Observable<boolean> | boolean  {
    if (!this.auth.isAuthenticated) {
      console.log('go back to login');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
