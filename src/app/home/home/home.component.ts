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



  ImageUrl1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSrun2n_xfcmXksYONL8DE-tRHYoImqfgpQ&usqp=CAU";
  ImageUrl2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ51-BQcUvIWgrkhHWHw8Tci1i3J3ebmmt1w&usqp=CAU";
  ImageUrl3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJO2Ow4hCxqd_A2tH02hlBf8ycoZqZF03MuiugDknjxJIgCenzv6HY30g_Cxt7o2Nhxk&usqp=CAU";
  ImageUrl4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33MI1-veQn1JDxFJhwSysy9UuVMMAQ6EIOQ&usqp=CAU";


  constructor(productService:ProductService, categoryService:CategoryService, private route:Router){

  this.products = [
    { id: 1, title: 'Product 1', price: 10 , rate : 1 , imageurl:this.ImageUrl1},
    { id: 2, title: 'Product 2', price: 20 , rate : 1, imageurl:this.ImageUrl2},
    { id: 3, title: 'Product 3', price: 30 , rate : 1, imageurl:this.ImageUrl3},
    { id: 4, title: 'Product 4', price: 34 , rate : 4, imageurl:this.ImageUrl4},

    { id: 5, title: 'Product 5', price: 24 , rate : 4, imageurl:this.ImageUrl3},
  ];

  this.categories = [
    {name:"Electronics"},
    {name:"Art"},
    {name:"Music"},
    {name:"Historical"}
  ]
}


getCategories(){

}

getProducts(){

}

sort(category:string){


}

addItemToCart(product:any){

}

view(productId:any){

  this.route.navigate(['shopping/product',productId]);
}

}


