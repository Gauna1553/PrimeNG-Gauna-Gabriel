import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {HttpClientModule} from '@angular/common/http'
import {GalleriaModule} from 'primeng/galleria';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    GalleriaModule,
    HttpClientModule,
    ChartModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    InputTextareaModule,
    InputTextModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
