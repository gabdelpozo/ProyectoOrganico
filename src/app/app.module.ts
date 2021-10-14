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
import { LoginComponent } from './Componentes/login/login.component';
import { AbmProductosComponent } from './Componentes/abm-productos/abm-productos.component';



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
    FinalizarCompraComponent,
    LoginComponent,
<<<<<<< Updated upstream
    AbmProductosComponent
=======
    AbmProductosComponent,
>>>>>>> Stashed changes
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
