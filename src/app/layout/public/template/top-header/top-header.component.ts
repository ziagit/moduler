import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SigninComponent } from 'src/app/shared/components/signin/signin.component';
import { SignupComponent } from 'src/app/shared/components/signup/signup.component';
import { LoginService } from 'src/app/shared/sevices/security/login.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private dialog: MatDialog, private loginService: LoginService) {
    if(localStorage.getItem('access_token')){
      this.isLoggedIn =true;
    }
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
