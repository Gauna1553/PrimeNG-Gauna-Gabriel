import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  images = [
    {
        "previewImageSrc": "../../../assets/image/aletas.jpg",
        "thumbnailImageSrc": "../../../assets/image/aletas.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
    },        {
        "previewImageSrc": "../../../assets/image/gorro.jpg",
        "thumbnailImageSrc": "../../../assets/image/gorro.jpg",
        "alt": "Description for Image 1",
        "title": "Title 2"
    },        {
        "previewImageSrc": "../../../assets/image/malla.jpg",
        "thumbnailImageSrc": "../../../assets/image/malla.jpg",
        "alt": "Description for Image 1",
        "title": "Title 3"
    },        {
        "previewImageSrc": "../../../assets/image/antiparras.jpg",
        "thumbnailImageSrc": "../../../assets/image/antiparras.jpg",
        "alt": "Description for Image 1",
        "title": "Title 4"
    },        {
        "previewImageSrc": "../../../assets/image/manoplas.jpg",
        "thumbnailImageSrc": "../../../assets/image/manoplas.jpg",
        "alt": "Description for Image 1",
        "title": "Title 5"
    },        {
        "previewImageSrc": "../../../assets/image/tabla.jpg",
        "thumbnailImageSrc": "../../../assets/image/tabla.jpg",
        "alt": "Description for Image 1",
        "title": "Title 6"
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
