import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = ["Type1","Type2", "Type3", "Type4"];

  constructor() { }
  getCategory(){
    return this.categories;
  }
}
