import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User> = null;
  profile: firebase.User = null;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.user = afAuth.user;
    this.user.subscribe(user => {
      console.log(user);
      if (user) {
        this.profile = {
          name: user.displayName,
          email: user.email,
          photoURL: user.providerData[0].photoURL,
        };
      } else {
        this.profile = null;
      }
    })
    // firebase.auth().getRedirectResult()
    // firebase.auth().onAuthStateChanged()
  }

  logIn() {
    let provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithRedirect(provider);
  }

  getAuthState(): Observable<firebase.User> {
    return this.user;
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}
