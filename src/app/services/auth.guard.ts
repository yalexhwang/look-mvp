import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}

  canActivate(): Observable<boolean> | boolean {
    console.log('canActivate');
    if (!this.auth.profile) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
