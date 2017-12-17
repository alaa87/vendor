import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'vendor-objection-details',
  styleUrls: ['./vendor-objection-details.scss'],
  templateUrl: './vendor-objection-details.html',
})
export class VendorObjectionDetailsComponent {

  displayDialog: boolean;

  vendors: any[];

  busy: Subscription;

  fieldOfInterests: SelectItem[];
  constructor(private _router: Router) {

  }

  ngOnInit() {

    this.fieldOfInterests = [
      {label: 'Personal Computer', value: '1'},
      {label: 'Office Laser Printer', value: '2'},
  ];

    this.vendors = [];
    this.vendors.push({ObjectionItem: 'Personal Computer', Reason: 'No Reason'});
    this.vendors.push({ObjectionItem: 'Office Laser Printer', Reason: 'No Reason'});

  }

  showDialogToAdd() {
    this.displayDialog = true;
  }

}
