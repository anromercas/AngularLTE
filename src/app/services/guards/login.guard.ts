import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    public _userService: UserService,
    public _router: Router
  ) {}

  canActivate() {
    if ( this._userService.isLogin() ) {
      console.log('pasó por el login guard');
      return true;
    } else {
      console.log('Bloqueado por guard');
      console.log(localStorage.getItem('token'));
      this._router.navigate(['/login']);
      return false;
    }
  }
}
