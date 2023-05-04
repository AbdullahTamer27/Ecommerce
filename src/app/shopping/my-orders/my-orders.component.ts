import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from '../manage-orders/manage-orders.component';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {


  orders: Product[] = [];
  constructor(private productsService:ProductService, private route:Router, ){
    this.orders = [
      { id: 1, title: 'Product 1', price: 10 },
      { id: 2, title: 'Product 2', price: 20 },
      { id: 3, title: 'Product 3', price: 30 }
    ];

  }
  
  getProducts() {
    
  }


  edit(productId:number){
      this.route.navigate(['shopping/new',productId]);
  }
  delete(productId:number){
    
  }
  view(ojhk:any){

  }
  
}

