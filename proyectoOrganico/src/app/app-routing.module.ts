import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { NosotrosComponent } from './Componentes/nosotros/nosotros.component';
import { ProductosComponent } from './Componentes/productos/productos.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
