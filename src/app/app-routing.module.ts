import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginGuard } from './guards/login.guard';
import { NotFoundPageComponent } from 'src/app/shared/not-found-page/not-found-page.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
     {
         path: '',
         component: PagesComponent,
         children: [
             {path: 'progress', component: ProgressComponent},
             {path: 'graficas1', component: Graficas1Component},
            //  {path: 'mis-datos', component: ProfileComponent},
             {path: 'dashboard', component: DashboardComponent},
             {path: '', redirectTo: '/dashboard', pathMatch: 'full' }
         ]
     },
    {path: '', component: PagesComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {path: 'progress', component: ProgressComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot( routes, {useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {}
