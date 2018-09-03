import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';
import { Global } from '../services/global';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';



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

  forma: FormGroup;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
   // this.user = new User('', '', '', '', '', '', 'Lider', '');
    this.url = Global.url;
  }

  sonIguales ( campo1: string, campo2: string) {
    return ( group: FormGroup ) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {

    this.forma = new FormGroup({
      name: new FormControl( null, Validators.required ),
      surname: new FormControl( null, Validators.required ),
      secondsurname: new FormControl( null, Validators.required ),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      terms: new FormControl( false )
    }, { validators: this.sonIguales('password', 'password2') } );

    this.forma.setValue({
      name: 'Test ',
      surname: 'Teste',
      secondsurname: 'Testeo',
      email: 'test@test.com',
      password: '1234',
      password2: '1234',
      terms: true
    });

    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    console.log(this.token);
    console.log(this.identity);
  }

  onSubmitRegister() {
    if ( this.forma.invalid ) {
      return;
    }
    if ( !this.forma.value.terms ) {
      swal('Importante!', 'Debe aceptar las conciones!', 'warning');
      return;
    }
    let user = new User(
      this.forma.value.name,
      this.forma.value.surname,
      this.forma.value.secondsurname,
      this.forma.value.email,
      this.forma.value.password,
    );

    this._userService.register(user)
    .subscribe(
      resp => { this._router.navigate(['/login']); });

    /* this._userService.register(this.user).subscribe(
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
    console.log(this.user); */
  }


}
