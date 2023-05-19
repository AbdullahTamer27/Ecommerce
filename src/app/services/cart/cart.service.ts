import { EventEmitter, Injectable, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import axios from 'axios';
import { PortService } from '../port/port.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  @Output() getProducts: EventEmitter<any> = new EventEmitter();
  @Output() transactions: EventEmitter<any> = new EventEmitter();
  @Output() bestSellers: EventEmitter<any> = new EventEmitter();

  products: any[] = [];
  user: any;

  constructor(private authService: AuthService, private portService: PortService) {


  }
  private loadCartItems() {
  }

  private loadLocalCart() {
  }

  addItemToCart(productId: any, cartId: any) {
    axios.post(`http://localhost:${this.portService.port}/cart/add`,
      {
        cartId: cartId,
        productId: productId,
        quantity: "1"
      }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      });
  }



  removeItemFromCart(productId: any, cartId: any) {
    axios.post(`http://localhost:${this.portService.port}/cart/remove`,
      {
        cartId: cartId,
        productId: productId
      }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      });
  }

  getCartItems(cartId: any) {
    axios.post(`http://localhost:${this.portService.port}/cart/get`,
      {
        cartId: cartId
      }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response.data)
        this.products = response.data;
        this.getProducts.emit(this.products);
      })
      .catch(error => {
        console.log(error)
      });
  }

  checkout(products: any, totalPrice: any, userId: any) {
    var options = {
      cartId: userId,
      cart: JSON.stringify(products),
      totalPrice: totalPrice
    };
    axios.post(`http://localhost:${this.portService.port}/cart/checkout`,
      options, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response.data)
        this.authService.updateBalance(response.data.cashBalance);
      })
      .catch(error => {
        console.log(error)
      });
  }

  getTransactions() {
    axios.get(`http://localhost:${this.portService.port}/report/transaction`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        console.log(response.data)
        this.transactions.emit(response.data);
      })
      .catch(error => {
        console.log(error)
      });
  }

  getBestsellers() {
    axios.get(`http://localhost:${this.portService.port}/report/bestseller`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        console.log(response.data)
        this.bestSellers.emit(response.data);
      })
      .catch(error => {
        console.log(error)
      });
  }

}