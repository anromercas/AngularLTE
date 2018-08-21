import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot( routes, {useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {}
