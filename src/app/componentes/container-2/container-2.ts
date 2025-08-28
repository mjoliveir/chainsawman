import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';



@Component({
  selector: 'app-container-2',
  imports: [GalleriaModule, AnimateOnScrollModule],
  templateUrl: './container-2.html',
  styleUrl: './container-2.css',
})
export class Container2 {
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  img: string = 'img-episodes/';

  images = [
    {
      itemImageSrc: `${this.img}1-pochita.webp`,
    },
    {
      itemImageSrc: `${this.img}1.2-pochitaeDenji.webp`,
    },
    {
      itemImageSrc: `${this.img}1.3-makima.webp`,
    },
    {
      itemImageSrc: `${this.img}2.1-makima.webp`,
    },
    {
      itemImageSrc: `${this.img}2.2-power.webp`,
    },
    {
      itemImageSrc: `${this.img}2.3-akieDenji.webp`,
    },
    {
      itemImageSrc: `${this.img}3.1-chainsawman.webp`,
    },
    {
      itemImageSrc: `${this.img}3.2-power.webp`,
    },
    {
      itemImageSrc: `${this.img}3.3-powereDenji.webp`,
    },
    {
      itemImageSrc: `${this.img}4.1-aki.webp`,
    },
    {
      itemImageSrc: `${this.img}4.2-denji.webp`,
    },
    {
      itemImageSrc: `${this.img}4.3-power.webp`,
    },
  ];
}
