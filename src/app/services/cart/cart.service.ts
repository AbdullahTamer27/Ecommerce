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

    
  }
  private loadCartItems() {
  }

  private loadLocalCart() {
  }

  addItemToCart(item: any) {
    
  }
  
  

  removeItemFromCart(itemId: string) {

  }

  getCartItems() {
  }
  


  checkout() {

  }
  
}
