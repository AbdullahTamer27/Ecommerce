import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { PortService } from 'src/app/services/port/port.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: any = [];
  categories: any = [];
  sorting = false;




  constructor(private portService: PortService, private productService: ProductService, categoryService: CategoryService, private route: Router) {

    this.productService.getProducts.subscribe(products => this.products = products);

    this.categories = [
      { name: "All" },
      { name: "art" },
      { name: "accessories" },
      { name: "music" },
      { name: "electronics" }
    ];

    if (!portService.port) {
      this.route.navigate(['/']);
    }

    if (!this.productService.isSearch) {
      this.getProducts();
    } else {
      this.productService.isSearch = false;
    }
  }


  getCategories() {

  }

  getProducts() {
    this.productService.getAll();
  }

  sort(category: string) {
    if (category == "All") {
      this.productService.getAll();
    } else {
      this.productService.getByCategory(category);
    }
  }

  displaysort() {
    this.sorting = !this.sorting
    // console.log(this.sorting)
  }

  addItemToCart(product: any) {

  }

  view(productId: any) {
    //this.productService.get(productId);
    this.route.navigate(['shopping/product', productId]);
  }

}