import { Component, OnDestroy, ChangeDetectorRef,HostListener } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SigninComponent } from 'src/app/shared/components/signin/signin.component';
import { SignupComponent } from 'src/app/shared/components/signup/signup.component';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/shared/sevices/security/login.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  isLoggedIn: boolean = false;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private dialog: MatDialog, private loginService: LoginService) {
    if(localStorage.getItem('access_token')){
      this.isLoggedIn =true;
    }
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



  ngOnInit() {
  }
  signin() {
    let dialogRef = this.dialog.open(SigninComponent, {
      width: '600px',
    });
  }
  signup() {
    let dialogRef = this.dialog.open(SignupComponent, {
      width: '600px',
    });
  }
  signout() {
    this.loginService.signOut(1).subscribe(
      res=>{
      console.log("Message: ", res);
    },
    err=>{
      console.log("Message: ", err);
    })
  }
  
}
