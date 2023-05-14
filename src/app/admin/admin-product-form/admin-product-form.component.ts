import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { deleteUser } from 'firebase/auth';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent {
  
  products:any;

  constructor(private productService: ProductService, private route:Router){
    this.productService.getProducts.subscribe(products => this.products = products);
    this.productService.getAll();
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
