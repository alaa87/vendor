import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {

    constructor(private _http: Http) { }

    getMenus(username: string) {
        if(username === 'vendor')
        {
            return this._http.get('assets/showcase/vendor-menu.json')
            .map((response: Response) => response.json())
        } else {
            return this._http.get('assets/showcase/hospital-menu.json')
            .map((response: Response) => response.json())
        }
        
    }
}