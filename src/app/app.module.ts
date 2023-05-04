import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';




//firebase
import { firebaseConfig } from 'src/environments/firebaseConfig';
import { initializeApp } from 'firebase/app';




//services
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';


//carbon components
import { UIShellModule, IconModule, DropdownModule } from 'carbon-components-angular';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/products/product.service';
import { CategoryService } from './services/category/category.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    HomeModule,
    DropdownModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ProductService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    const app = initializeApp(firebaseConfig);
    
  }
 }
