import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: 'dashboard', component: DashboardComponent},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
   imports: [RouterModule.forChild( pagesRoutes )],
   exports: [RouterModule]
})

export class PagesRouterModule {}
