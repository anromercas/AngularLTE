import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public title = 'Acerinox MPT';
  public user: User;
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

  onSubmitRegister() {
    this._userService.register(this.user).subscribe(
      response => {
        const user = response.user;
        this.user = user;
        if (!user._id) {
          this.alertRegister = 'Error al registrarse';
        } else {
          this.alertRegister = 'El registro se ha realizado correctamente, identificate con '
          + this.user.email + `<b>Ir a <a [routerLink]='/login'>Identificarse</a></b>`;
          this.user = new User('', '', '', '', '', '', 'Lider', '');
        }

      },
      error => {
        const errorMessage = <any>error;
        const body = JSON.parse(error._body);
        if (errorMessage != null) {
          this.alertRegister = body.message;
          console.log(error);
        }
      }
    );
    console.log(this.user);
  }


}
