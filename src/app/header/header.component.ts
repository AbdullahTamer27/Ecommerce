import { Component, HostBinding } from '@angular/core';
import { IconService } from 'carbon-components-angular';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Icons
// @ts-ignore
import Search20 from 'node_modules/@carbon/icons/es/search/20.js';
// @ts-ignore
import UserAvatar20 from 'node_modules/@carbon/icons/es/user--avatar/20.js';
// @ts-ignore
import ShoppingCart20 from 'node_modules/@carbon/icons/es/shopping--cart/20.js';
import { Route, Router } from '@angular/router';
import { ProductService } from '../services/products/product.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: any;
  userData: any;
  SearchForm: FormGroup;
  isSearchActive: boolean = false;


  constructor(protected iconService: IconService, private authService: AuthService, fb: FormBuilder, private router: Router, private productService: ProductService) {
    /*
    let userString = localStorage.getItem('userKey');
    if(userString != null){
      let userObject = JSON.parse(userString);
      this.user = userObject;
    }
    */
    this.SearchForm = fb.group({
      search: ['', [Validators.required], []]
    })


    this.authService.getLoggedInName.subscribe(user => {
      this.user = user;
    });

  }

  @HostBinding('class.cds--header') headerClass = true;

  ngOnInit() {
    this.iconService.registerAll([Search20, UserAvatar20, ShoppingCart20]);
  }

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
  }

  search(form: any) {
    console.log(form.value);
    const myInput = document.getElementById("header-search") as HTMLInputElement;
    this.productService.isSearch = true;
    this.router.navigate(['/home']);
    this.productService.search(form);
    myInput.value = "";
  }

  logOut() {
    this.authService.logout();
  }
}

