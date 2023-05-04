import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';


@NgModule({
  declarations: [
    AdminProductFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  providers:[
    ProductService,
    CategoryService
  ]
})
export class AdminModule { }
