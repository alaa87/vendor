import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'vendor-objection-details',
  styleUrls: ['./vendor-objection-details.scss'],
  templateUrl: './vendor-objection-details.html',
})
export class VendorObjectionDetailsComponent {

  displayDialog: boolean;

  vendors: any[];

  busy: Subscription;

  constructor(private _router: Router) {

  }

  ngOnInit() {

    this.vendors = [];
    this.vendors.push({ObjectionItem: 'Item 1', Reason: 'No Reason'});
    this.vendors.push({ObjectionItem: 'Item 2', Reason: 'Reason .....'});

  }

  showDialogToAdd() {
    this.displayDialog = true;
  }

}
