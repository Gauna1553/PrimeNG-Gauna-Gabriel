import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
products = [
  {
    name: "Malla Arena talle 24",
    price: 31500,
    image: "../../../assets/arena24.jpg"
  },
  {
    name: "Antiparras Cobra",
    price: 11000,
    image: "../../../assets/antiparras.jpg"
  },
  {
    name: "Aletas Hydro",
    price: 11300,
    image: "../../../assets/aletas.jpg"
  },
  {
    name: "Gorro Silicona Arena",
    price: 1500,
    image: "../../../assets/gorro.jpg"
  },
  {
    name: "Manoplas Nataciòn",
    price: 3500,
    image: "../../../assets/manoplas.jpg"
  },
  {
    name: "Tabla Natacion",
    price: 12400,
    image: "../../../assets/tabla.jpeg"
  }
];
responsiveOptions = [     
  {
  breakpoint: '1024px',
  numVisible: 3,
  numScroll: 3
},
{
  breakpoint: '768px',
  numVisible: 2,
  numScroll: 2
},
{
  breakpoint: '560px',
  numVisible: 1,
  numScroll: 1
}];

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
  }

}
