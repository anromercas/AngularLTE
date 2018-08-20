import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { Global } from './global';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
    public url: string;
    public identity;
    public token;

    constructor(
        private _http: Http
    ) {
        this.url = Global.url;
    }

    singup(user_to_login, gethash = null) {
        if (gethash != null) {
            user_to_login.gethash = gethash;
        }
        const json = JSON.stringify(user_to_login);
        const params = json;

        const headers = new Headers({'Content-Type': 'application/json'});

        return this._http.post(this.url + 'login', params, {headers: headers})
                        .map(res => res.json());
    }

    register(user_to_register) {
        const params = JSON.stringify(user_to_register);

        const headers = new Headers({'Content-Type': 'application/json'});

        return this._http.post(this.url + 'register', params, {headers: headers})
                        .map(res => res.json());
    }

    updateUser(user_to_update) {
        const params = JSON.stringify(user_to_update);

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });

        return this._http.put(this.url + 'update-user/' + user_to_update._id, params, {headers: headers})
                        .map(res => res.json());
    }

    getIdentity() {
        const identity = JSON.parse(localStorage.getItem('identity'));
        if (identity !== 'undefined') {
            this.identity = identity;
        } else {
            this.identity = null;
        }
        return this.identity;
    }

    getToken() {
        const token = localStorage.getItem('token');

        if (token !== 'undefined') {
            this.token = token;
        } else {
            this.token = null;
        }

        return this.token;
    }
/*
    saveUser(user: User): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'singup', params, {headers: headers});
    }
    */
}
