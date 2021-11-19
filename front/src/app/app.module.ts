import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/template/header/header.component';
import { NavbarComponent } from './public/template/navbar/navbar.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { NotFountComponent } from './public/error/not-fount/not-fount.component';
import { InternalServerErrorComponent } from './public/error/internal-server-error/internal-server-error.component';
import { HomeComponent } from './public/general/home/home.component';
//import { SolicitudZipComponent } from './modules/visualizacion/solicitud/solicitud-zip/solicitud-zip.component';
//import { SolicitudVisualizarComponent } from './modules/visualizacion/solicitud/solicitud-visualizar/solicitud-visualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NotFountComponent,
    InternalServerErrorComponent,
    HomeComponent,
    //SolicitudZipComponent
    //SolicitudVisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
