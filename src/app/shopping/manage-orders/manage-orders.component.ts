import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';


export interface Product {
  id: number;
  title: string;
  price: number;
}

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss']
})

export class ManageOrdersComponent {
  
  products = [
    { id: 1, title: 'Product 1', price: 10 , rate : 1 },
    { id: 2, title: 'Product 2', price: 20 , rate : 1},
    { id: 3, title: 'Product 3', price: 30 , rate : 1},
    { id: 4, title: 'Product 4', price: 34 , rate : 4},
    { id: 5, title: 'Product 5', price: 24 , rate : 4},
  ];
  

  constructor(private productsService:ProductService, private route:Router ,private http:HttpClient){

    this.getProducts();
    
  }
  
  getProducts() {

  }


  edit(productId:number){
      this.route.navigate(['shopping/new',productId]);
  }
  
  delete(productId:number){
    
    
  }
  

}
