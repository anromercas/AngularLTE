import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        MenuComponent,
        BreadcrumbsComponent,
        FooterComponent,
        NotFoundPageComponent
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        BreadcrumbsComponent,
        FooterComponent,
        NotFoundPageComponent
    ]
})

export class SharedModule { }
