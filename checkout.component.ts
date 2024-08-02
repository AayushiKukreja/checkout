import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  Form,
  FormBuilder,
  FormControl,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  public checkoutData = {
    name: '',
    email: '',
    address: '',
  };
  msg = '';
  users = [{ name: 'admin', email: 'admin@gmail.com', address: 'gurgaon' }];
  constructor(private router: Router) {}
  onSubmit(form: any) {
    if (form.valid) {
      var flag = false;
      for (let user of this.users) {
        if (
          user.name === this.checkoutData.name &&
          user.email === this.checkoutData.email &&
          user.address === this.checkoutData.address
        ) {
          flag = true;
          break;
        }
      }

      if (flag) {
        this.msg = 'Login Successful...';
        this.router.navigateByUrl('/dashboard');
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
