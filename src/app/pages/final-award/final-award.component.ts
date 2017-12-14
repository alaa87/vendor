import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'final-award',
  styleUrls: ['./final-award.scss'],
  templateUrl: './final-award.html',
})
export class FinalAwardComponent {

  displayDialog: boolean;

  vendor: {};

  selectedVendor: {};

  newVendor: boolean;

  vendors: any[];

  busy: Subscription;

  constructor(private _router: Router, private confirmationService: ConfirmationService) {

  }

  ngOnInit() {

    this.vendors = [];
    this.vendors.push({TenderNumber: '123', TenderName: 'Computer Supply', SupplierName: 'Vendor 2'});
    this.vendors.push({TenderNumber: '423', TenderName: 'Medical Supply', SupplierName: 'Vendor M'});

  }

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'fa fa-question-circle',
        accept: () => {
        },
        reject: () => {
          }
    });
}


}
