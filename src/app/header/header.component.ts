import { Component, HostBinding } from '@angular/core';
import { IconService } from 'carbon-components-angular';

// Icons
// @ts-ignore
import Search20 from 'node_modules/@carbon/icons/es/search/20.js';
// @ts-ignore
import UserAvatar20 from 'node_modules/@carbon/icons/es/user--avatar/20.js';
// @ts-ignore
import ShoppingCart20 from 'node_modules/@carbon/icons/es/shopping--cart/20.js';

import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: any;
  userData: any;

  constructor(protected iconService: IconService, private authService: AuthService) {
    /*
    let userString = localStorage.getItem('userKey');
    if(userString != null){
      let userObject = JSON.parse(userString);
      this.user = userObject;
    }
    */

    this.authService.getLoggedInName.subscribe(user =>  this.user=user);
    
  }

  @HostBinding('class.cds--header') headerClass = true;

  ngOnInit() {
    this.iconService.registerAll([Search20, UserAvatar20, ShoppingCart20]);
  }

  logOut() {
    this.authService.logout();
  }
}

