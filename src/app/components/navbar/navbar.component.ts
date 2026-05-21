import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);
  cvDropdownOpen = signal(false);

  navLinks = [
    { label: 'Inicio',      href: '#hero' },
    { label: 'Sobre mí',    href: '#about' },
    { label: 'Skills',      href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos',   href: '#projects' },
    { label: 'Contacto',    href: '#contact' },
  ];

  cvOptions = [
    { label: 'Español', flag: '🇨🇴', file: 'cv_genyerber_es.pdf', name: 'CV_Genyerber_Ordoñez_FullStack_ES.pdf' },
    { label: 'English', flag: '🇺🇸', file: 'cv_genyerber_en.pdf', name: 'CV_Genyerber_Ordoñez_FullStack_EN.pdf' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.cv-dropdown-wrapper')) {
      this.cvDropdownOpen.set(false);
    }
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
    this.cvDropdownOpen.set(false);
  }

  toggleCvDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.cvDropdownOpen.update(v => !v);
  }
}
