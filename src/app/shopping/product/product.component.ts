import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: any;
  user: any;
  constructor(private cartService: CartService, private authService: AuthService, private router: Router, private productService: ProductService, private route: ActivatedRoute) {
    let productId = this.route.snapshot.paramMap.get('id');
    this.product = { imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_square_50%25_transparency.svg/2048px-White_square_50%25_transparency.svg.png" }
    this.productService.getProduct.subscribe(product => this.product = product);
    this.authService.getLoggedInName.subscribe(user => this.user = user);
    this.authService.getUser();
    productService.get(productId);
  }
  
  addToCart() {
    console.log(this.user);
    if (this.user != null) {
      this.cartService.addItemToCart(this.product.id, this.user.id)
    } else {
      this.router.navigate(['/login']);
    }
    this.router.navigate(['home']);
  }

}