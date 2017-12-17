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
  displayVendorDialog: boolean;
  displayHospitalDialog: boolean;

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

    let user = JSON.parse(localStorage.getItem('username'))
    if(user == 'vendor@certacure.com'){
      this.displayVendorDialog = true;
    } else{
      this.displayHospitalDialog = true;
    }
  }
  
  saveRespondDialogToAdd() {
    let user = JSON.parse(localStorage.getItem('username'))
    if(user == 'vendor@certacure.com'){
      this.displayVendorDialog = false;
    } else{
      this.displayHospitalDialog = false;
    }
  }

  save() {
    this.displaySpecsDialog = false;
}

  ngOnInit() {

    this.tenders = [];
    this.tenders.push({Number: '43211507020000', Name: 'Personal Computer', Unit: 'Piece', Quantity: '20'});
    this.tenders.push({Number: '4321210524000', Name: 'Office Lazer Priter', Unit: 'Piece', Quantity: '3'});
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
  }
}
