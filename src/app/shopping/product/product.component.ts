import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: any;
  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) {
    let productId = this.route.snapshot.paramMap.get('id');
    this.product = { imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_square_50%25_transparency.svg/2048px-White_square_50%25_transparency.svg.png" }
    this.productService.getProduct.subscribe(product => this.product = product);
    productService.get(productId);
  }
  addToCart() {
    this.router.navigate(['home']);
  }

}