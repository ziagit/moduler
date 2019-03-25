import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../layout/public/services/data.service';
import { Router } from '@angular/router';
import { LoginService } from '../../sevices/security/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.signinForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() { }

  signin(value) {
    if (this.signinForm.valid) {
      this.loginService.signin(value).subscribe(
        res => {
            this.saveToken(res);
            this.router.navigate(['admin']);
            this.loginService.setLoggedIn(true);
        },
        err => { console.log("Login faild!", err) }
      )
    } else {
      console.log("Provided data is not valid!");
    }
  }

  saveToken(data) {
    localStorage.setItem('access_token', data['tokens'].access_token);
    localStorage.setItem('refresh_token', data['tokens'].refresh_token);
    localStorage.setItem('user',data['user']);
  }

}
