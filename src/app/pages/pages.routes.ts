import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../services/service.index';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuard ],
        children: [
            {path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
            {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            {path: 'promesas', component: PromisesComponent, data: { titulo: 'Promesas' } },
            {path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Cuenta' } },
            {path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
   imports: [RouterModule.forChild( pagesRoutes )],
   exports: [RouterModule]
})

export class PagesRouterModule {}
