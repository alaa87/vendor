import { Component } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { User, Country } from '../register/user';

//Validators
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
@Component({
    selector: 'login',
    styleUrls: ['./login.scss'],
    templateUrl: './login.html',
})
export class LoginComponent {

    public form:FormGroup;
    public email:AbstractControl;
    public password:AbstractControl;
    user: User = new User;
    sellectedEmail: string = null;
    selectedPassword: string = null;

    constructor(private _router: Router, fb:FormBuilder) {
        if(JSON.parse(localStorage.getItem('User')))
        {
            this._router.navigateByUrl('/pages/home/');
        }
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
              'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
          });
      
          this.email = this.form.controls['email'];
          this.password = this.form.controls['password'];
    }

    public onSubmit(values: Object): void {
        if(this.sellectedEmail == 'vendor@certacure.com' || this.sellectedEmail == 'hospital@certacure.com'){
            if (this.form.valid) {
                this.user.Country = new Country;
                this.user.Country.name = "Jordan";
                this.user.Country.code = "JO";
                this.user.Name = "Avatar";
                this.user.Email = this.sellectedEmail;
                localStorage.setItem('User', JSON.stringify(this.user));
                localStorage.setItem('username', JSON.stringify(this.sellectedEmail));
                this._router.navigateByUrl('/pages/rfqEntry');
            }
        }
      }
}
