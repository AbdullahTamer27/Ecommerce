import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  user={firstname:'Ahmed', lastname:'Samer', mobilenumber:'0106666666', country:'Egypt', email:'ahmedsamer@gmail.com', address:'Mukkutum city'}


  UpdateForm :FormGroup;


  constructor(fb:FormBuilder, private authService:AuthService){
    this.UpdateForm = fb.group({
      firstname:['',[],[]],
      lastname:['',[],[]],
      phonenumber:['',[],[]],
      country:['',[],[]],
      email:['',[],[]],
      password:['',[],[]],
      address:['',[],[]]
    })

    this.authService.getLoggedInName.subscribe(user =>  this.user=user);
  }


  submit(form:any){
    
  }

  delete(){

  }
}
