import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CountryService } from '../../theme/services/country.service';
import { Subscription } from 'rxjs/Subscription';
import { User, Country } from '../register/user'

@Component({
  selector: 'vendor-review',
  styleUrls: ['./vendor-review.scss'],
  templateUrl: './vendor-review.html',
})
export class VendorReviewComponent {

  displayDialog: boolean;

  vendor: {};

  selectedVendor: {};

  newVendor: boolean;

  vendorDetails: any[];
  vendors: any[];

  busy: Subscription;

  constructor(private _router: Router) {

  }

  
  showDialogToAdd() {
    this.displayDialog = true;
  }

  save() {
    this.displayDialog = false;
}

  ngOnInit() {

    this.vendorDetails = [];
    this.vendorDetails.push({computer: 'Computer', officeSupplier: 'Office 1', medicalEquip: 'Medical 1'});
    this.vendorDetails.push({computer: 'Office', officeSupplier: 'Office 2', medicalEquip: 'Medical 2'});
    this.vendorDetails.push({computer: 'Medical Equip', officeSupplier: 'Office 3', medicalEquip: 'Medical 3'});

    this.vendors = [];
    this.vendors.push({vendorName: 'CERTACURE', mobile: '+9629876543', email: 'info@certacure.com'});
    this.vendors.push({vendorName: 'STS', mobile: '+96261234567', email: 'info@sts.com'});
    this.vendors.push({vendorName: 'CCS', mobile: '+96267654321', email: 'info@ccs.com'});
  }
}
