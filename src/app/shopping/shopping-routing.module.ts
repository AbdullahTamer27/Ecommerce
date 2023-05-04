import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderValidateComponent } from './order-validate/order-validate.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'',
    component:CheckOutComponent
  },
  {
    path:'my-orders',
    component:MyOrdersComponent
  },
  {
    path:'validate',
    component:OrderValidateComponent
  },
  {
    path:'new',
    component: NewOrderComponent
  },
  {
    path:'new/:id',
    component: NewOrderComponent
  },
  {
    path:'manage-orders',
    component:ManageOrdersComponent
  },
  {
    path:'product/:id',
    component:ProductComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
