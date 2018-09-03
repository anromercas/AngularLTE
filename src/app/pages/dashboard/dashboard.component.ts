import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public identity;
  public token;

  constructor() { }

  ngOnInit() {

    console.log('token desde dashboard ' + localStorage.getItem('token'));
    console.log('identity desde dashboard ' + localStorage.getItem('identity'));
    // this.identity = this._userService.getIdentity();
    // this.token = this._userService.getToken();
    // console.log(this.token);
    // console.log(this.identity);
  }

}
