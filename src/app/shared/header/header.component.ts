import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../../services/service.index';
import { User } from '../../models/user.model';
import { Global } from '../../services/global';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit {
  public user: User;
  public identity;
  public token;
  public errorMessage;
  public alertRegister;
  public url: string;

  constructor(
    public _userService: UserService,
    public _route: ActivatedRoute,
    public _router: Router,
  ) {
    this.user = new User('', '', '', '', '', '', 'Lider', '');
    this.url = Global.url;
  }

  ngOnInit() {
     this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  /* logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/login']);
  } */

}
