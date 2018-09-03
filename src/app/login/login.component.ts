import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { UserService } from '../services/user/user.service';
import { User } from '../models/user.model';
import { Global } from '../services/global';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title = 'Acerinox MPT';
  public user: User;
  public user_register: User;
  public identity;
  public token;
  public errorMessage;
  public alertRegister;
  public url: string;
  public recuerdame: boolean = false;
  public email: string;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.user = new User('', '', '', '', '', '', 'LIDER', '');
    this.url = Global.url;
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1 ) {
      this.recuerdame = true;
    }

    console.log(this.token);
    console.log(this.identity);
  }

  public onSubmit( forma: NgForm ) {
    if ( forma.invalid ) {
      return;
    }

    let user = new User(null, null, null, forma.value.email, forma.value.password);
    this._userService.singup(user, forma.value.recuerdame)
                    .subscribe( res => this._router.navigate(['/dashboard']));
    /*  .subscribe( () => window.location.href = '#/dashboard' ); */

    }

  /* public onSubmit( forma: NgForm ) {
    if ( forma.invalid ) {
      return;
    }
    this.user = new User(null, null, null, forma.value.email, forma.value.password);
    // conseguir los datos del usuario identificado
    this._userService.singup(this.user).subscribe(
      response => {
        let identity = response.user;
        this.identity = identity;

        if (!this.identity._id) {
          alert('El usuario no está correctamente identificado');
        } else {
          // crear elemento en el localstorage para tener al usuario en sesion
          localStorage.setItem('identity', JSON.stringify(identity));
          // conseguir el token para enviarselo a cada peticion http
          this._userService.singup(this.user, 'true').subscribe(
            res => {
              const token = res.token;
              this.token = token;
              if (this.token.length <= 0) {
                alert('El token no se ha generado');
              } else {
                // crear elemento en el localstorage para tener el token en sesion
                localStorage.setItem('token', token);
                this._router.navigate(['/dashboard']);
                this.user = new User('', '', '', '', '', '', 'LIDER', '');
              }
            },
            error => {
              let errorMessage = <any>error;
              const body = JSON.parse(error._body);
              if (errorMessage != null) {
                this.errorMessage = body.message;
                console.log(error);
              }
            }
          );
        }
      },
      error => {
        const errorMessage = <any>error;
        const body = JSON.parse(error._body);
        if (errorMessage != null) {
          this.errorMessage = body.message;
          console.log(error);
        }
      }
    );
  } */


}
