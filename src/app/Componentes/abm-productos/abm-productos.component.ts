<<<<<<< Updated upstream
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ok } from 'assert';
import { Producto } from 'src/app/Clases/Producto';
import Swal from 'sweetalert2';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-abm-productos',
  templateUrl: './abm-productos.component.html',
  styleUrls: ['./abm-productos.component.scss']
})
export class AbmProductosComponent implements OnInit {

<<<<<<< Updated upstream
  /*
    tomate = new Producto("verdura", "Tomate", "1k", 200, 8, null, "assets/tomate.png", "Los tomates orgánicos no tienen residuos de agroquímicos, no se han usado en su producción hormonas de ningún tipo, y además los agricultores prefieren el uso de semillas orgánicas conservadas por ellos mismos, como son los tomates locales o de herencia o “reliquia”, que son productos con diferentes colores, sabores y formas.");
  */
  productosBase;

  prod: Producto = new Producto();

  constructor(private httpClient: HttpClient) { }
=======
  constructor() { }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
  altaProd() {
    this.httpClient.post('http://localhost:3000/producto', this.prod)
      .subscribe(ok => {
        console.log(ok);
      });

  }

  getProd() {
    this.httpClient.get('http://localhost:3000/producto')
      .subscribe(ok => {
        this.productosBase = ok;
        console.log(ok);
      })
  }

  modificarProd(producto) {
    this.httpClient.put('http://localhost:3000/producto/' + producto.id, producto)
      .subscribe(ok => {
        console.log(ok);
      })
  }

  eliminarProd(producto, indice) {
    this.httpClient.delete('http://localhost:3000/producto/' + producto.id)
      .subscribe(respuesta => {
        let r: any = respuesta;
        console.log(respuesta);
        if (r.affected == 1) {
          this.productosBase.splice(indice, 1);
          Swal.fire ("Se eliminó con éxito");
        }
      }, (error) => {
        Swal.fire ("Ocurrió un error");
      })

    console.log(producto, indice);

  }
}


=======
}
>>>>>>> Stashed changes
