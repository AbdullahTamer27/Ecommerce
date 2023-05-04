import { Component } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent{


  constructor(){
    
  }
  

  orders = [ 
    { title: 'Item 1', description: 'This is the first item.' , quantity : 1 , price: 1000} ,
    { title: 'Item 2', description: 'This is the second item.', quantity : 1 , price: 1000} , 
    { title: 'Item 3', description: 'This is the third item.', quantity : 1 , price: 1000} ,
  ];




  IncreaseItems(i:any){

    this.orders[i].quantity++;

  }

  DeccreaseItems(i:any){

    this.orders[i].quantity--;

  }

  deleteItem(item:any){

  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (let i = 0; i < this.orders.length; i++) {
      totalPrice += this.orders[i].price * this.orders[i].quantity;
    }
    return totalPrice;
  }
  
}
