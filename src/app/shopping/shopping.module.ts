import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderValidateComponent } from './order-validate/order-validate.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { FormsModule } from '@angular/forms';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateOrderComponent } from './update-order/update-order.component';




@NgModule({
  declarations: [
    MyOrdersComponent,
    CheckOutComponent,
    OrderValidateComponent,
    NewOrderComponent,
    ManageOrdersComponent,
    UpdateOrderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingRoutingModule,
    HttpClientModule,
  ],
})
export class ShoppingModule { }
