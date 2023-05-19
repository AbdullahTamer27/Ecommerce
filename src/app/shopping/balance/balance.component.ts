import { Component } from '@angular/core';
import { SAMLAuthProvider } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {

  user: any;

  constructor(private authService: AuthService) {
    this.authService.getLoggedInName.subscribe(user => this.user = user);
    this.authService.getUser();
  }

  addAmount(form: any) {
    console.log(form);
    this.authService.addToCash(form, this.user.id);
  }
}
