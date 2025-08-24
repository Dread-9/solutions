import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu';
import { HeroComponent } from './components/hero/hero';
import { ServicesCarouselComponent } from './components/services-carousel/services-carousel';
import { ServicesGridComponent } from './components/services-grid/services-grid';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavMenuComponent,
    HeroComponent,
    ServicesCarouselComponent,
    ServicesGridComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  protected readonly title = signal('Soluciones Integrales');

  ngOnInit() {
    // Component initialization
  }
}
