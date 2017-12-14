import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CountryService } from '../../theme/services/country.service';
import { Subscription } from 'rxjs/Subscription';
import { User, Country } from '../register/user'

//Validators
import { EmailValidator, EqualPasswordsValidator } from 'app/theme/validators';
@Component({
  selector: 'vendor-registration',
  styleUrls: ['./vendor-registration.scss'],
  templateUrl: './vendor-registration.html',
})
export class VendorRegistrationComponent {

  displayDialog: boolean;

  vendor: {};

  selectedVendor: {};

  newVendor: boolean;

  vendors: any[];

  busy: Subscription;

  countries: any[];
  submitted: boolean = false;
  user: User = new User;
  selectedFiles: File[];

  selectedCountry: string = '-1';
  constructor(private _router: Router, fb: FormBuilder, private countryService: CountryService) {

  }

  selectDocuments(event) {
    for (let file of event.files) {
      this.selectedFiles.push(file);
    }
  }

  clearDocuments() {
    this.selectedFiles = [];
  }

  showDialogToAdd() {
    this.newVendor = true;
    this.vendor = {};
    this.displayDialog = true;
  }

  save() {
    
    this.displayDialog = false;
}

  ngOnInit() {

    this.vendors = [];
    this.vendors.push({computer: 'Computer 1', officeSupplier: 'Office 1', medicalEquip: 'Medical 1'});
    this.vendors.push({computer: 'Computer 2', officeSupplier: 'Office 2', medicalEquip: 'Medical 2'});
    this.vendors.push({computer: 'Computer 3', officeSupplier: 'Office 3', medicalEquip: 'Medical 3'});
    this.getCountries();
    if (JSON.parse(localStorage.getItem('User'))) {
      this.user = JSON.parse(localStorage.getItem('User'));
    } else {
      this._router.navigateByUrl('/');
    }
  }

  getCountries() {
    this.countries = [];
    this.busy = this.countryService.getCountries()
      .subscribe((data: any[]) => {
        console.log(data);
        this.countries = data;
      });
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      localStorage.setItem('User', JSON.stringify(this.user));
      this._router.navigateByUrl('/pages/home/');
    }
  }
}
