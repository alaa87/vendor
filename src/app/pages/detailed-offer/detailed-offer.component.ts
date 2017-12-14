import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'detailed-offer',
  styleUrls: ['./detailed-offer.scss'],
  templateUrl: './detailed-offer.html',
})
export class DetailedOfferComponent {

  tenders: any[];

  busy: Subscription;

  constructor(private _router: Router) {

  }
  ngOnInit() {

    this.tenders = [];
    this.tenders.push({vendor: 'Vendor 1', Name: 'PC', Quantity: '20'});
  }

}
