import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {

  products: any
  user: any;

  constructor(private router: Router, private cartService: CartService, private authService: AuthService, private productService: ProductService) {

    this.authService.getLoggedInName.subscribe(user => this.user = user);
    this.authService.getUser();
    this.getProductsFromCart();
  }


  checkOut() {
    if (this.getTotalPrice() <= this.user.cash) {
      this.cartService.checkout(this.products, this.getTotalPrice(), this.user.id);
      this.router.navigate(['shopping/validate']);
    } else {
      alert("Not enough balance!");
    }
  }


  getProductsFromCart() {
    this.cartService.getProducts.subscribe(products => this.products = products);
    this.cartService.getCartItems(this.user.id);
  }


  IncreaseItems(i: any) {

    this.products[i].quantity++;

  }

  DeccreaseItems(i: any) {

    this.products[i].quantity--;

  }

  deleteItem(product: any) {
    this.products = this.products.filter((item: { id: any; }) => item.id !== product.id);
    this.cartService.removeItemFromCart(product.id, this.user.id);
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].price * this.products[i].quantity;
    }
    return totalPrice;
  }

}