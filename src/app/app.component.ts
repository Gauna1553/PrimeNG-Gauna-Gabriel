import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeNG';

  items: MenuItem[]=[];

  ngOnInit() {

      this.items = [
          {
              label: 'Inicio',
              icon: 'pi pi-fw pi-pencil',
              routerLink: "inicio"
          },
          {
              label: 'Productos',
              icon: 'pi pi-fw pi-cart-plus',
              routerLink: "producto"
          },
          {
            label: 'Contactos',
            icon: 'pi pi-fw pi-user',
            routerLink: "contacto"
        },
      ];
  }
}

