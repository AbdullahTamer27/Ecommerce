import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule, BreadcrumbModule, TabsModule, ButtonModule, InputModule, DatePickerModule, DropdownModule, RadioModule, ComboBoxModule, NotificationModule } from 'carbon-components-angular';


@NgModule({
  declarations: [
    AdminProductFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    GridModule,
    BreadcrumbModule,
    TabsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputModule,
    DatePickerModule,
    DropdownModule,
    RadioModule,
    ComboBoxModule,
    NotificationModule,
  ],
  providers:[
    
  ]
})
export class AdminModule { }
