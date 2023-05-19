import { Component, Renderer2 } from '@angular/core';
import { Route, Router } from '@angular/router';
import { deleteUser } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent {

  products: any;
  users: any;
  transactions: any;
  bestSellers: any;

  constructor(private renderer: Renderer2, private cartService: CartService, private authService: AuthService, private productService: ProductService, private route: Router) {
    this.productService.getProducts.subscribe(products => this.products = products);
    this.productService.getAll();
    this.authService.getUsersList.subscribe(users => this.users = users);
    this.authService.getAllUsers();
    this.cartService.transactions.subscribe(transaction => this.transactions = transaction);
    this.cartService.getTransactions();
    this.cartService.bestSellers.subscribe(bestsellers => this.bestSellers = bestsellers);
    this.cartService.getBestsellers();
  }

  printReport() {
    // Trigger the "Ctrl+P" shortcut to print the page
    window.print();
  }

  edit(productId: number) {
  }

  delete(productId: number) {
    this.productService.delete(productId);
    this.products = this.products.filter((product: { id: any; }) => (product.id != productId));
  }
  editUser() {

  }
  deleteUser(userId: any) {
    this.authService.deleteUser(userId);
    this.users = this.users.filter((user: { id: any; }) => (user.id != userId));
  }

}
