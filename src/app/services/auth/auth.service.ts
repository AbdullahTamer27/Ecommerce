import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(private router: Router) { 

    private userSubject = new BehaviorSubject<any>(null);
    user$ = this.userSubject.asObservable();

    // Check if the user is already logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.userSubject.next(user);
    }

  }

  login(form:any){
    
    axios.post('http://localhost:4000/login', form.value ,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
    .then(response => {

      this.router.navigate("/home");
      this.userSubject.next(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    
    })
    .catch(error => {
      alert("Invalid username or password!");
    });
  }

  logout(){

    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  

  }
  signup(form:any){
    axios.post('http://localhost:4000/', form.value ,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
    .then(response => {
      this.user = response.data;
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
    
  }
  

  
}
