import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

// RUTAS
import { RouterModule } from '@angular/router';

// MODULOS
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    PagesModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
