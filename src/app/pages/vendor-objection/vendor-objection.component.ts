import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'vendor-objection',
  styleUrls: ['./vendor-objection.scss'],
  templateUrl: './vendor-objection.html',
})
export class VendorObjectionComponent {

  displayDialog: boolean;

  vendors: any[];

  busy: Subscription;

  constructor(private _router: Router) {

  }

  ngOnInit() {

    this.vendors = [];
    this.vendors.push({TenderNumber: '123', TenderName: 'Computer Supply', SupplierName: 'Vendor 2'});
    this.vendors.push({TenderNumber: '423', TenderName: 'Medical Supply', SupplierName: 'Vendor M'});

  }

  showDialogToAdd() {
    this.displayDialog = true;
  }

}
