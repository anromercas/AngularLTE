import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'fa fa-dashboard',
      submenu: [
          { titulo: 'Dashboard', url: '/dashboard', icono: 'fa fa-circle-o', },
          { titulo: 'ProgressBar', url: '/progress', icono: 'fa fa-circle-o', },
          { titulo: 'Graficas', url: '/graficas1', icono: 'fa fa-circle-o', },
          { titulo: 'Promesas', url: '/promesas', icono: 'fa fa-circle-o', },
          { titulo: 'Rxjs', url: '/rxjs', icono: 'fa fa-circle-o', }
      ]
    }
  ];

  constructor() { }
}
