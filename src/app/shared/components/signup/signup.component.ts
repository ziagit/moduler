import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../../../layout/public/services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private fb: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.signupForm= this.fb.group({
      'name': ['', Validators.required],
      'email': ['',[Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'confirm_password': ['', Validators.required],
    });
  }
  signup(value){
    if(this.signupForm.valid){
      if(value.password === value.confirm_password){
        this.service.signUp(value).subscribe(
          res=>{console.log("User register successfully!", res)},
          err=>{console.log("Error while registering user!"), err}
        )
      }else{
        console.log("Passwords not matching!");
      }
    }else{
      console.log("Provided data is not valid, please check");
    }

  }

}
