import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from 'app/theme/services/menu.service';

@Component({
  selector: 'ven-sidebar',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  menus: any[] = [];
  busy: Subscription;
  username: string;
  constructor(private _router: Router, private _menuService: MenuService) {

  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('username'))
    if(user == 'vendor@certacure.com'){
      this.username = 'vendor';
    } else{
      this.username = 'hospital';
    }
    this.getMenus();
  }

  getMenus() {
    this.menus = [];
    this._menuService.getMenus(this.username)
      .subscribe((data: any[]) => {
        this.menus = data;
      });
  }

  goto(item) {

    this.menus.forEach(element => {
      element.active = false;
    });
    item.active = true;
    
  }

}