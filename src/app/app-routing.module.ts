import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { DetalleComponent } from './Componentes/detalle/detalle.component';
import { FinalizarCompraComponent } from './Componentes/finalizar-compra/finalizar-compra.component';
import { NosotrosComponent } from './Componentes/nosotros/nosotros.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { LoginComponent } from "./Componentes/login/login.component";

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent
  },
  {
    path: 'finalizar-compra',
    component: FinalizarCompraComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
