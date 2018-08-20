import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';


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

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.user = new User('', '', '', '', '', '', 'Lider', '');
    this.url = Global.url;
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    console.log(this.token);
    console.log(this.identity);
  }

  public onSubmit() {
    console.log(this.user);

    // conseguir los datos del usuario identificado
    this._userService.singup(this.user).subscribe(
      response => {
        const identity = response.user;
        this.identity = identity;

        if (!this.identity._id) {
          alert('El usuario no está correctamente identificado');
        } else {
          // crear elemento en el localstorage para tener al usuario en sesion
          localStorage.setItem('identity', JSON.stringify(identity));
          // conseguir el token para enviarselo a cada peticion http
          this._userService.singup(this.user, 'true').subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            response => {
              const token = response.token;
              this.token = token;
              if (this.token.length <= 0) {
                alert('El token no se ha generado');
              } else {
                // crear elemento en el localstorage para tener el token en sesion
                localStorage.setItem('token', token);
                this._router.navigate(['/dashboard']);
                this.user = new User('', '', '', '', '', '', 'Lider', '');
              }
            },
            error => {
              // tslint:disable-next-line:prefer-const
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
  }
  logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/']);
  }

}
