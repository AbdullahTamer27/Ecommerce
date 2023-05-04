import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private router: Router) { 

  }

  login(form:any){
    

    axios.post('http://localhost:4000/login', form.value ,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  
  }

  logout(){

  }
  signup(form:any){
    
  }
  

  
}
