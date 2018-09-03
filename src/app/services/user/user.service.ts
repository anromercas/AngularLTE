import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';
import { Global } from '../global';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable()
export class UserService {
    public url: string;
    public identity;
    public token;

    constructor(
        private http: HttpClient,
        private _router: Router,
        private _http: Http
    ) {
        this.url = Global.url;
        this.cargarStorage();
    }

    isLogin() {
        return ( this.token !== null) ? true : false;
    }

    cargarStorage() {
        if ( localStorage.getItem('token') ) {
            this.token = localStorage.getItem('token');
            this.identity = JSON.parse(localStorage.getItem('identity'));
        } else {
            this.token = null;
            this.identity = null;
        }
    }

    singup(user_to_login, recordar: boolean = false) {
        if ( recordar ) {
            localStorage.setItem('email', user_to_login.email);
        } else {
            localStorage.removeItem('email');
        }

        return this.http.post(this.url + 'login', user_to_login)
                        .map( (res: any) => {
                            localStorage.setItem('id', JSON.stringify(res.user._id));
                            localStorage.setItem('token', res.token);
                            localStorage.setItem('identity', JSON.stringify(res.user));

                            this.identity = res.user;
                            this.token = res.token;

                            return true;
                        });
    }

    logout() {
        this.identity = null;
        this.token = null;
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.clear();
        this._router.navigate(['/login']);
    }

    register(user: User) {
        return this._http.post( this.url + 'register', user)
                    .map( (res: any) => {
                        swal ('Usuario creado', user.email, 'success');
                        return res.user;
                    });
    }

    updateUser(user_to_update) {
        const params = JSON.stringify(user_to_update);

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
       // return this._http.post(this.url + 'update-user/' + user_to_update._id, user_to_update);
         return this._http.put(this.url + 'update-user/' + user_to_update._id, params, {headers: headers})
                        .map(res => res.json());
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
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
