import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState: Observable<any> = null;
  user: any = null;
  profile: any = null;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.authState = afAuth.user;
    this.authState.subscribe(user => {
      console.log(user);
      this.user = user;
      if (user) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  get isAuthenticated() {
    return this.user !== null;
  }

  getAuthState() {
    return this.authState;
  }

  signInWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider)
      .then(result => {
        this.router.navigate(['home']);
      })
      .catch(err => console.log(err));
  }

  signOut() {
    this.user = null;
    this.afAuth.auth.signOut();
  }

}
