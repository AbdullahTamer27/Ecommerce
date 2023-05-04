import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GridModule, BreadcrumbModule, TabsModule, ButtonModule } from 'carbon-components-angular';
import { ComboBoxModule, DatePickerModule, DropdownModule,  InputModule, NotificationModule, RadioModule } from 'carbon-components-angular';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginPageComponent,
    MyAccountComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
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

  ]
})
export class HomeModule {
  
 }
