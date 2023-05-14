import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],

})
export class NewOrderComponent {

  categories: any[] = [];

  private categoriesSubscription: Subscription = new Subscription;
  
  constructor(private categoryService: CategoryService, private productService : ProductService, private router : Router) { 
    this.categories = [
      {name:"Electronics"},
      {name:"Art"},
      {name:"Music"},
      {name:"Accessories"}
    ];
  }
 
  

  getCategories() {

  }

  save(product:any){
    console.log(product);
    this.productService.create(product);
    this.router.navigate(['/home']);
    

  }
  try(){
    
  }


}
