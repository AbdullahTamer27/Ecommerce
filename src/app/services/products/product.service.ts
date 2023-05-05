import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  create(product: any) {
    axios.post('http://localhost:4000/login', product ,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      
    })
    .catch(error => {

    });

  /* Local Storage Code
  localStorage.setItem("userKey", JSON.stringify(this.user));
  this.router.navigate(['/home']);
*/
  

  }

  getAll() {
    axios.get('http://localhost:4000/login',  {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {

    })
    .catch(error => {

    });

  /* Local Storage Code
  localStorage.setItem("userKey", JSON.stringify(this.user));
  this.router.navigate(['/home']);
*/
  }

  

  get(productId: string) {

    axios.post('http://localhost:4000/login',  productId,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      return response;
      
    })
    .catch(error => {
      
    });

  /* Local Storage Code
  localStorage.setItem("userKey", JSON.stringify(this.user));
  this.router.navigate(['/home']);
*/
    

  }

  update(productId: string, product: any) {
    axios.post('http://localhost:4000/login', product ,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      
    })
    .catch(error => {

    });

  /* Local Storage Code
  localStorage.setItem("userKey", JSON.stringify(this.user));
  this.router.navigate(['/home']);
*/
  

  }

  delete(productId: string) {

    axios.post('http://localhost:4000/login', productId ,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {

      
    })
    .catch(error => {

    });

  /* Local Storage Code
  localStorage.setItem("userKey", JSON.stringify(this.user));
  this.router.navigate(['/home']);
*/
  
    
  }
}
