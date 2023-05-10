import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { deleteUser } from 'firebase/auth';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent {
  
  products = [
    { id: 1, title: 'Product 1', price: 10 , rate : 1 },
    { id: 2, title: 'Product 2', price: 20 , rate : 1},
    { id: 3, title: 'Product 3', price: 30 , rate : 1},
    { id: 4, title: 'Product 4', price: 34 , rate : 4},
    { id: 5, title: 'Product 5', price: 24 , rate : 4},
  ];

  constructor(private route:Router){

  }


  edit(productId:number){
  }

delete(productId:number){
  }
  editUser(){

  }
  deleteUser(){

  }

}
