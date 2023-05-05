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
  
  products: any = [];
  

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
