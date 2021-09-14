import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppComponent } from './app.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { NosotrosComponent } from './Componentes/nosotros/nosotros.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { SubmenuproductosComponent } from './Componentes/submenuproductos/submenuproductos.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { DetalleComponent } from './Componentes/detalle/detalle.component';
import { FinalizarCompraComponent } from './Componentes/finalizar-compra/finalizar-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NosotrosComponent,
    ContactoComponent,
    CarritoComponent,
    MenuComponent,
    SubmenuproductosComponent,
    DetalleComponent,
    FinalizarCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [ BrowserModule,
    ReactiveFormsModule,
    FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
