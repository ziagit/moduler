import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    SigninComponent,
    SignupComponent
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  entryComponents:[
    SigninComponent,
    SignupComponent
  ]
})
export class SharedModule { }
