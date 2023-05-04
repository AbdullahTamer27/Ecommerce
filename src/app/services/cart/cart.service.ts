import { Injectable } from '@angular/core';
import { getDatabase, ref, push, get, onValue, set } from 'firebase/database';
import { AuthService } from '../auth/auth.service';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  localCart: any[] = [];
  db = getDatabase();
  user: any;
  userData: any;

  constructor(private authService: AuthService) {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      this.user = user;
      if (user) {
        const database = getDatabase();
        const userDataRef = ref(database, `users/${user.uid}`);
        onValue(userDataRef, (snapshot) => {
          this.userData = snapshot.val();
        });
      } else {
        this.userData = null;
      }
    });
    
  }
  private loadCartItems() {
  }

  private loadLocalCart() {
  }

  addItemToCart(item: any) {
    // Get a reference to the user's cart
    const userId = this.user.uid;
    const cartRef = ref(this.db, `carts/${userId}/products`);
  
    push(cartRef, { product: item, quantity: 1 }).then(() => {
      console.log('Item added to cart');
    }).catch((error) => {
      console.error('Error adding item to cart:', error);
    });
  }
  
  

  removeItemFromCart(itemId: string) {

  }

  getCartItems() {
  }
  


  checkout() {

  }
  
}
