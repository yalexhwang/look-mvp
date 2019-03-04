import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { AuthLoginGuard } from './services/auth-login.guard';

@NgModule({
  declarations: [
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  exports: [
    AngularFireAuthModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthLoginGuard,
  ],
})
export class CoreModule { }
