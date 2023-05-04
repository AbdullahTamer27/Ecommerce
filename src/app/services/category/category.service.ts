import { Injectable } from '@angular/core';
import { getDatabase, onValue, ref } from 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  db = getDatabase();

  constructor() { }
  getAll(){

    const subject = new Subject<any>();

    onValue(ref(this.db, 'categories'), (snapshot) => {
      subject.next(snapshot.val());
    });

    return subject.asObservable();
  }
}
