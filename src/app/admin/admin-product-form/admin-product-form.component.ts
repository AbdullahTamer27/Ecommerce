import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent {
  
  categories:any;
  products:any;

  constructor(categoryService : CategoryService, private productservice: ProductService){
    this.categories = categoryService.getCategory();
  }
  save(product: any){
    console.log(product)
    this.productservice.create(product); 
    this.products = this.productservice.getProducts();   
  }

}
