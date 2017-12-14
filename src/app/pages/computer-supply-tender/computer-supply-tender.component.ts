import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'computer-supply-tender',
  styleUrls: ['./computer-supply-tender.scss'],
  templateUrl: './computer-supply-tender.html',
})
export class ComputerSupplyTenderComponent {

  displaySpecsDialog: boolean;
  displayRespondDialog: boolean;

  vendor: {};

  selectedVendor: {};

  newVendor: boolean;

  vendorDetails: any[];
  tenders: any[];

  busy: Subscription;

  countries: any[];
  submitted: boolean = false;
    selectedFiles: File[];

  constructor(private _router: Router, fb: FormBuilder) {

  }

  showDialogToAdd() {
    this.displaySpecsDialog = true;
  }

  showRespondDialogToAdd() {
    this.displayRespondDialog = true;
  }
  
  saveRespondDialogToAdd() {
    this.displayRespondDialog = false;
  }

  save() {
    this.displaySpecsDialog = false;
}

  ngOnInit() {

    this.tenders = [];
    this.tenders.push({Number: '113', Name: 'PC', Quantity: '20'});
    this.tenders.push({Number: '212', Name: 'Printer', Quantity: '10'});
    this.tenders.push({Number: '133', Name: 'Laptop', Quantity: '3'});
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
  }
}
