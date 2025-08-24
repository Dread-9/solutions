import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';

@Component({
  selector: 'app-services-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-carousel.html',
  styleUrls: ['./services-carousel.scss']
})
export class ServicesCarouselComponent implements AfterViewInit {
  coverflowSwiper: Swiper | undefined;
  cubeSwiper: Swiper | undefined;

  constructor() { }

  ngAfterViewInit() {
    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      this.initSwipers();
    }, 100);
  }

  private initSwipers() {
    // Initialize Coverflow Swiper
    this.coverflowSwiper = new Swiper('.hero-swiper', {
      modules: [EffectCoverflow, Autoplay, Pagination],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        init: () => {
          console.log('Coverflow Swiper initialized');
        },
        slideChange: () => {
          console.log('Coverflow slide changed');
        }
      }
    });

    // Initialize Cube Swiper
    this.cubeSwiper = new Swiper('.cube-swiper', {
      modules: [EffectCube, Autoplay, Pagination],
      effect: 'cube',
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        init: () => {
          console.log('Cube Swiper initialized');
        },
        slideChange: () => {
          console.log('Cube slide changed');
        }
      }
    });
  }
}
