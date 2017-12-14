import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'comparison-sheet',
  styleUrls: ['./comparison-sheet.scss'],
  templateUrl: './comparison-sheet.html',
})
export class ComparisonSheetComponent {

  tenders: any[];

  busy: Subscription;

  constructor(private _router: Router, private confirmationService: ConfirmationService) {

  }
  ngOnInit() {

    this.tenders = [];
    this.tenders.push({vendor: 'Vendor 1', Name: 'PC', Quantity: '20'});
    this.tenders.push({vendor: 'Vendor 2', Name: 'Printer', Quantity: '10'});
    this.tenders.push({vendor: 'Vendor 3', Name: 'Laptop', Quantity: '3'});
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

confirm2() {
  this.confirmationService.confirm({
      message: 'Do you want to cancel award?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
      },
      reject: () => {
      }
  });
}

}
