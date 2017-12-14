import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { User, Country } from '../register/user'

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
  selectedFiles: File[];

  constructor(private _router: Router, fb: FormBuilder) {

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
  }

}
