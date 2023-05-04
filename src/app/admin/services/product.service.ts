import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    {'title': Text, "price": Number, "category": Text ,"imageurl": Text}
  ];

  constructor() { }
  create(product: any){
    let newObj = {'title': product.title, "price": product.price, "category": product.category ,"imageurl": product.imageurl}
    this.products.push(product);
    product = null;

  }
  getProducts(){
    return this.products;
  }
}
