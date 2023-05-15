import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.scss']
})
export class UpdateOrderComponent {

  private productId: any
  product: any;
  categories: any[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    this.categories = [
      { name: "Electronics" },
      { name: "Art" },
      { name: "Music" },
      { name: "Accessories" }
    ];
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.products.forEach((element: { id: any; }) => {
      if (element.id == this.productId) {
        this.product = element;
      }
    });
    // this.productService.getProduct.subscribe(product => this.product = product);
    // productService.get(this.productId);
  }




  save(product: any) {
    console.log(product);
    this.productService.update(this.product, this.productId);
    this.router.navigate(['/home']);
  }


  try() {

  }


}