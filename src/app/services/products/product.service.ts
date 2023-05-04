import { Injectable } from '@angular/core';
import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  db = getDatabase();

  constructor() { }
  
  create(product: any) {
    // Generate a new ID for the product using push()
    const newProductRef = push(ref(this.db, 'products'));
    const newProductId = newProductRef.key;

    // Add the ID to the product object
    product.id = newProductId;

    // Set the product object in the database using set()
    return set(newProductRef, product);
  }

  getAll() {

    const subject = new Subject<any>();
    onValue(ref(this.db, 'products'), (snapshot) => {
      subject.next(snapshot.val());
    });
    return subject.asObservable();
  }

  get(productId: string) {
    return onValue(ref(this.db, 'products/' + productId), (snapshot) => {
      console.log(snapshot.val());
    });
  }

  update(productId: string, product: any) {
    return set(ref(this.db, 'products/' + productId), product);
  }

  delete(productId: string) {
    return set(ref(this.db, 'products/' + productId), null);
  }
}
