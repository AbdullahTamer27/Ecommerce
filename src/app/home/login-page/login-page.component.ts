import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {
  Loginform :FormGroup;
  RegisterForm :FormGroup;

constructor(fb:FormBuilder ,private auth:AuthService) {
  

  this.Loginform = fb.group({
    Username:['',[Validators.required],[]],
    Password:['',[Validators.required],[]]
  })

  this.RegisterForm = fb.group({
    FirstName:['',[Validators.required],[]],
    LastName:['',[Validators.required],[]],
    Email:['',[Validators.required],[]],
    Password:['',[Validators.required],[]],
    country:['',[Validators.required],[]],
    address:['',[Validators.required],[]],
    mobilenumber:['',[Validators.required],[]],
  })

 } 


  SignUp(form:any){
    this.auth.signup(form);
  }

  Login(form:any){
    this.auth.login(form);
  }




  get Username(){
    return this.Loginform.get('username');
  }
  get Password(){
    return this.Loginform.get("Password");
  }

}
