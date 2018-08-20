import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
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
