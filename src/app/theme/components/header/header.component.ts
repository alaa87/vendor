import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ven-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  constructor(private _router: Router) {
  }

  startSearch() {
      jQuery('.vendors').addClass('scrollable-container');
    jQuery('.vendors').find('sidebar-notification-cmp').parent('div').find('#main').addClass('startSearch');
}

endSearch() {
    jQuery('.vendors').removeClass('scrollable-container');
  jQuery('.vendors').find('sidebar-notification-cmp').parent('div').find('#main').removeClass('startSearch');
}
  ngOnInit() {
  }

  signout(){
    localStorage.removeItem('User');
    this._router.navigateByUrl('/login');

  }

  viewProfile() {
      this._router.navigateByUrl('/pages/userProfile');
  }
}
