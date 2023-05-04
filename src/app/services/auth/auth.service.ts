import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import { getDatabase, ref, onValue, set, push, update } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private router: Router) { 

  }

  login(form:any){
  
  }

  logout(){

  }
  signup(form:any){
    
  }
  

  
}
