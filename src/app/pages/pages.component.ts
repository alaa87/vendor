import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
    selector: 'pages',
    template: `
    <ven-header></ven-header>
    <ven-sidebar></ven-sidebar>
    <router-outlet></router-outlet>
    `
})
export class Pages {

    constructor() {
    }

    ngOnInit() {

    }
}
