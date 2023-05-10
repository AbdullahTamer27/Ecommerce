import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: any = [];
  categories: any = [];




    constructor(private productService:ProductService, categoryService:CategoryService, private route:Router){
      this.getProducts();

    this.categories = [
      {name:"Electronics"},
      {name:"Art"},
      {name:"Music"},
      {name:"Historical"}
    ];

  }


  getCategories(){

  }

  getProducts(){
    this.products = this.productService.getAll();
  }

  sort(category:string){
    
  }

  addItemToCart(product:any){

  }

  view(productId:any){
    //this.productService.get(productId);
    this.route.navigate(['shopping/product',productId]);
  }

}


