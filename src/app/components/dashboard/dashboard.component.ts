import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  currentSlide = 0;
  private autoplayTimer: any;

  slides = [
    {
      img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1400&q=80',
      tag: 'Bienvenido',
      title: 'Grand Résidence',
      desc: 'Sistema integral de gestión hotelera'
    },
    {
      img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=80',
      tag: 'Habitaciones',
      title: 'Experiencia de Lujo',
      desc: 'Administra disponibilidad y categorías de habitaciones'
    },
    {
      img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=80',
      tag: 'Reservaciones',
      title: 'Control Total',
      desc: 'Gestiona reservas, estadías y fechas con precisión'
    },
    {
      img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=80',
      tag: 'Huéspedes',
      title: 'Atención Personalizada',
      desc: 'Perfiles detallados de cada huésped del hotel'
    }
  ];

  stats = [
    { value: '4', label: 'Módulos' },
    { value: '24/7', label: 'Disponibilidad' },
    { value: '100%', label: 'Control' },
    { value: '∞', label: 'Reservaciones' }
  ];

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayTimer);
  }

  startAutoplay(): void {
    this.autoplayTimer = setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

}
