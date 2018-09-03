import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { Global } from '../../services/global';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [UserService]
})
export class MenuComponent implements OnInit {

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
    public _sidebar: SidebarService
  ) {
    this.user = new User('', '', '', '', '', '', 'Lider', '');
    this.url = Global.url;
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

}
