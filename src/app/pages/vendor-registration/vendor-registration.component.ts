import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { User, Country } from '../register/user'

import {SelectItem} from 'primeng/primeng';


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

  fieldOfInterests: SelectItem[];

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
    this.vendors.push({computer: 'IT Software', officeSupplier: 'Office 1', medicalEquip: 'Medical 1'});
    this.vendors.push({computer: 'IT Hardware', officeSupplier: 'Office 3', medicalEquip: 'Medical 3'});
  
    this.fieldOfInterests = [
      {label: 'IT Hardware', value: '1'},
      {label: 'IT Software', value: '2'},
      {label: 'Medical Supply', value: '3'},
      {label: 'Medications', value: '4'},
  ];
  
  }

}
