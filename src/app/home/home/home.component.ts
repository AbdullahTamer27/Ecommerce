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
  categories: any[] = [];

  constructor(private productService:ProductService, private categoryService:CategoryService,private cartService:CartService, private route:Router){
    this.getCategories();
    this.getProducts();


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


