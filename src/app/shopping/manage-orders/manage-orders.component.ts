import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
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

  products: any;

  user: any;

  constructor(private authService: AuthService, private productService: ProductService, private route: Router) {
    this.authService.getLoggedInName.subscribe(user => this.user = user);
    this.authService.getUser();
    this.productService.getProducts.subscribe(products => this.products = products);
    this.getByUserID();
  }

  getByUserID() {
    this.productService.getProductBySellerId(this.user.id);
  }


  edit(productId: number) {
    this.route.navigate(['shopping/new', productId]);
  }

  delete(productId: any) {
    this.productService.delete(productId);
    this.products = this.products.filter((product: { id: any; }) => (product.id != productId));
  }
}
