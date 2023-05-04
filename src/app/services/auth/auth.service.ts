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

  axios.get('http://localhost:3000/api/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log("Cannot find server");
  });

  
  }

  logout(){

  }
  signup(form:any){
    
  }
  

  
}
