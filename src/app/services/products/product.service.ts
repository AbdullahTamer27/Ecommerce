import { EventEmitter, Injectable, Output } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ImageUrl1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSrun2n_xfcmXksYONL8DE-tRHYoImqfgpQ&usqp=CAU";
  ImageUrl2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ51-BQcUvIWgrkhHWHw8Tci1i3J3ebmmt1w&usqp=CAU";
  ImageUrl3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJO2Ow4hCxqd_A2tH02hlBf8ycoZqZF03MuiugDknjxJIgCenzv6HY30g_Cxt7o2Nhxk&usqp=CAU";
  ImageUrl4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33MI1-veQn1JDxFJhwSysy9UuVMMAQ6EIOQ&usqp=CAU";


  products : any;

  @Output() getProducts: EventEmitter<any> = new EventEmitter();

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
    this.products = [
      { id: 1, title: 'Product 1', price: 10 , rate : 1 , imageurl:this.ImageUrl1},
      { id: 2, title: 'Product 2', price: 20 , rate : 1, imageurl:this.ImageUrl2},
      { id: 3, title: 'Product 3', price: 30 , rate : 1, imageurl:this.ImageUrl3},
      { id: 4, title: 'Product 4', price: 34 , rate : 4, imageurl:this.ImageUrl4},
      { id: 5, title: 'Product 5', price: 24 , rate : 4, imageurl:this.ImageUrl3},
      { id: 6, title: 'Product 6', price: 130 , rate : 8, imageurl:this.ImageUrl1}
    ];

    return this.products;

    /* talk to the server here

    axios.get('http://localhost:4000/login',  {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      return response.data;

    })
    .catch(error => {

    });

   Local Storage Code
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
      return response.data;
      
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
      return response.data;
    })
    .catch(error => {

    });

  /* Local Storage Code
  localStorage.setItem("userKey", JSON.stringify(this.user));
  this.router.navigate(['/home']);
*/
  
    
  }
  search(form:any){
    axios.post('http://localhost:4000/login',{
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
