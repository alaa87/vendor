import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'rfq-entry',
  styleUrls: ['./rfq-entry.scss'],
  templateUrl: './rfq-entry.html',
})
export class RfqEntryComponent {

  displayDialog: boolean;

  vendor: {};

  selectedVendor: {};

  newVendor: boolean;

  vendorDetails: any[];
  tenders: any[];

  busy: Subscription;

  countries: any[];
  submitted: boolean = false;
    selectedFiles: File[];

  selectedCountry: string = '-1';
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
    this.newVendor = true;
    this.vendor = {};
    this.displayDialog = true;
  }

  save() {
    
    this.displayDialog = false;
}

  ngOnInit() {

    this.vendorDetails = [];
    this.vendorDetails.push({computer: 'Computer 1', officeSupplier: 'Office 1', medicalEquip: 'Medical 1'});
    this.vendorDetails.push({computer: 'Computer 2', officeSupplier: 'Office 2', medicalEquip: 'Medical 2'});
    this.vendorDetails.push({computer: 'Computer 3', officeSupplier: 'Office 3', medicalEquip: 'Medical 3'});

    this.tenders = [];
    this.tenders.push({tenderName: 'Computer Supply', date: '01/02/2018', closeDate: '13/12/2017', tenderDocument: 'Attachement 1'});
    this.tenders.push({tenderName: 'Medical Supply', date: '17/02/2018', closeDate: '31/12/2017', tenderDocument: 'Attachement 2'});
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
  }
}
