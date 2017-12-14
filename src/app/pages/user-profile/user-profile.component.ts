import {Component, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { CountryService } from '../../theme/services/country.service';
import { Subscription } from 'rxjs/Subscription';
import { User, Country } from '../register/user'

//Validators
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
@Component({
    selector: 'user-profile',
    styleUrls: ['./user-profile.scss'],
    templateUrl: './user-profile.html',
})
export class UserProfileComponent {

    public form:FormGroup;
    public name:AbstractControl;
    public email:AbstractControl;
    public country:AbstractControl;
    public password:AbstractControl;
    public repeatPassword:AbstractControl;
    public passwords:FormGroup;
    busy: Subscription;

    countries: any[];
    submitted:boolean = false;
    user: User = new User;
  
    selectedCountry: string = '-1';
    constructor(private _router: Router, fb:FormBuilder, private countryService: CountryService) {
  
      this.form = fb.group({
        'name': ['', Validators.compose([Validators.required])],
        'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
        'country': ['', Validators.compose([Validators.required])],
        'passwords': fb.group({
          'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
          'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
      });
  
      this.name = this.form.controls['name'];
      this.email = this.form.controls['email'];
      this.country = this.form.controls['country'];
      this.passwords = <FormGroup> this.form.controls['passwords'];
      this.password = this.passwords.controls['password'];
      this.repeatPassword = this.passwords.controls['repeatPassword'];
    }
   
    ngOnInit() {
      this.getCountries();
      if(JSON.parse(localStorage.getItem('User')))
      {
          this.user = JSON.parse(localStorage.getItem('User'));
      }else{
        this._router.navigateByUrl('/');  
      }
  }
  
    getCountries(){
      this.countries = [];
      this.busy = this.countryService.getCountries()
      .subscribe((data: any[]) => {
        console.log(data);
          this.countries = data;
      });
  }
  
    public onSubmit(values:Object):void {
      this.submitted = true;
      if (this.form.valid) {
        localStorage.setItem('User', JSON.stringify(this.user));
        this._router.navigateByUrl('/pages/home/');
      }
    }
  }
  