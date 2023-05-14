import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';


import { Location } from '@angular/common';

import axios from 'axios';
import { PortService } from '../port/port.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  user: any;

  constructor(private router: Router, private location: Location, private portService: PortService) {
    console.log(this.portService.port);
  }

  login(form: any) {

    axios.post(`http://localhost:${this.portService.port}/user/login`,
      {
        email: form.value.Username,
        password: form.value.Password
      }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response.data);
        this.user = response.data;
        this.getLoggedInName.emit(this.user);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log(error);
        alert("Invalid username or password!");
      });


    /* Local Storage Code
    localStorage.setItem("userKey", JSON.stringify(this.user));
    this.router.navigate(['/home']);
  */
  }

  update(form: any, userId: any) {
    axios.post(`http://localhost:${this.portService.port}/user/update`,
      {
        id: userId,
        email: form.value.email,
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        country: form.value.country,
        phone: form.value.phone,
        address: form.value.address
      }
      , {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        //if something happen check here!!!!!!
        this.user = response.data;
        this.getLoggedInName.emit(this.user);
        this.router.navigate(['/home']);

      })
      .catch(error => {
        console.log(error)
        alert("There was an error updating your information");
      });

  }


  delete(userId: any) {
    axios.post(`http://localhost:${this.portService.port}/user/delete`,
      {
        id: userId
      }
      , {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        //if something happen check here!!!!!!
        this.user = null;
        this.getLoggedInName.emit(this.user);
        this.router.navigate(['/home']);

      })
      .catch(error => {
        console.log(error)
        alert("There was an error deleting your account");
      });
  }

  getUser() {
    this.getLoggedInName.emit(this.user);
  }

  logout() {
    this.user = null;
    this.getLoggedInName.emit(this.user);

  }



  signup(form: any) {
    axios.post(`http://localhost:${this.portService.port}/user/sign-up`, {
      email: form.value.Email,
      firstName: form.value.FirstName,
      lastName: form.value.LastName,
      password: form.value.Password,
      country: form.value.country,
      address: form.value.address,
      phone: form.value.mobilenumber
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response.data);
        this.user = response.data;
        this.getLoggedInName.emit(this.user);
        this.router.navigate(['/home']);
      })
      .catch(error => {

        alert("We Could not Sign You up please try again");
      });

  }



}
