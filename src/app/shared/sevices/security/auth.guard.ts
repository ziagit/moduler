import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { SigninComponent } from '../../components/signin/signin.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private dialog: MatDialog) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isloggedIn) {
      return this.loginService.isloggedIn;
    } else {
      this.dialog.open(SigninComponent);
    }
  }
}
