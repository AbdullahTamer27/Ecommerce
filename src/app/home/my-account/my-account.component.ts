import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  user: any


  UpdateForm: FormGroup;


  constructor(fb: FormBuilder, private authService: AuthService) {
    this.UpdateForm = fb.group({
      firstName: ['', [], []],
      lastName: ['', [], []],
      phone: ['', [], []],
      country: ['', [], []],
      email: ['', [], []],
      password: ['', [], []],
      address: ['', [], []]
    })

    this.authService.getLoggedInName.subscribe(user => {
      this.user = user;
    });
    this.authService.getUser();
  }


  submit(form: any) {
    this.authService.update(form, this.user.id);
  }

  delete() {
    this.authService.delete(this.user.id);
  }

  generateReports() {

  }
}
