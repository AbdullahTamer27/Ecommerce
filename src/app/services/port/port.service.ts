import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PortService {

  port: any;

  constructor() { }


  getPort() {
    axios.get('http://localhost:4000/port/getPort', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response.data);
        this.port = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
