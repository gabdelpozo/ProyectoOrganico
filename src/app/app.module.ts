import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { NosotrosComponent } from './Componentes/nosotros/nosotros.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { SubmenuproductosComponent } from './Componentes/submenuproductos/submenuproductos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NosotrosComponent,
    ContactoComponent,
    CarritoComponent,
    MenuComponent,
    SubmenuproductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
