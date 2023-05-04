import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';


import { Location } from '@angular/common';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  user: any;

  constructor(private router: Router, private location: Location) { 

  }

  login(form:any){

    axios.post('http://localhost:4000/login', form.value ,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {

      //if something happen check here!!!!!!
      this.user = response.data;
      this.getLoggedInName.emit(this.user);
      
    })
    .catch(error => {
      alert("Invalid username or password!");
    });

  /* Local Storage Code
  localStorage.setItem("userKey", JSON.stringify(this.user));
  this.router.navigate(['/home']);
*/
  }

  logout(){
    this.user = null;
    this.getLoggedInName.emit(this.user);

  }



  signup(form:any){
    axios.post('http://localhost:4000/', form.value ,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
    .then(response => {
      this.user = response.data;
      this.getLoggedInName.emit(this.user);
    })
    .catch(error => {
      console.log(error);
    });
    
  }
  

  
}
