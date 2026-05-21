import { Component, signal, AfterViewInit, QueryList, ViewChildren, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  gradient: string;
  svgPaths: string;
  links: { label: string; url: string; type: 'play' | 'web' | 'appstore' | 'private' }[];
  highlights: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  private sanitizer = inject(DomSanitizer);

  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  activeFilter = signal('todos');
  filters = ['todos', 'mobile', 'backend', 'fullstack', 'web'];

  // SVG paths (Feather/Lucide style, viewBox 0 0 24 24, stroke only)
  private icons = {
    navigation: `<polygon points="3 11 22 2 13 21 11 13 3 11"/>`,
    users: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
    shoppingBag: `<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>`,
    layers: `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`,
    trendingUp: `<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>`,
    cpu: `<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>`,
    home: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
    fileText: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>`,
    globe: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
  };

  projects: Project[] = [
    {
      title: 'Taxiya',
      subtitle: 'App de taxi hailing — Google Play',
      description: 'Aplicación de movilidad urbana con arquitectura de microservicios. Cálculo de tarifas dinámicas por zona geográfica, rastreo en tiempo real y gestión de conductores.',
      tags: ['mobile', 'backend', 'fullstack'],
      color: '#6c63ff',
      gradient: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
      svgPaths: this.icons.navigation,
      links: [{ label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.taxiya.app', type: 'play' }],
      highlights: ['NestJS', 'Microservicios', 'MongoDB', 'Redis', 'Ionic/Angular'],
      featured: true
    },
    {
      title: 'Conecta',
      subtitle: 'App social — Google Play & App Store',
      description: 'Publicada en ambas tiendas. Proceso completo de submission iOS: Capacitor, Xcode, firma de app, App Store Connect y aprobación de Apple.',
      tags: ['mobile', 'fullstack'],
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
      svgPaths: this.icons.users,
      links: [
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.somosconecta&hl=es_CL', type: 'play' },
        { label: 'Ver sitio', url: 'https://somosconecta.com.co/', type: 'web' }
      ],
      highlights: ['Capacitor', 'Xcode', 'App Store Connect', 'Ionic/Angular'],
      featured: true
    },
    {
      title: 'Mayorista KAI',
      subtitle: 'Plataforma E-commerce Mayorista',
      description: 'E-commerce completo con catálogo, carrito con sesiones anónimas, flujo de órdenes con comprobante, lista de deseos, reseñas y recuperación de contraseña.',
      tags: ['fullstack', 'backend'],
      color: '#ff6584',
      gradient: 'linear-gradient(135deg, #ff6584, #ff8c69)',
      svgPaths: this.icons.shoppingBag,
      links: [{ label: 'Ver sitio', url: 'https://mayoristakai.cubelab.com.co/home', type: 'web' }],
      highlights: ['ASP.NET Core', 'Angular', 'JWT', 'SMTP', 'SQL Server'],
      featured: true
    },
    {
      title: 'MIZAP',
      subtitle: 'Me Importa Un Zapato — Lavandería',
      description: 'App con 4 roles diferenciados (Admin, Repartidor, Operador, Cliente). Comisiones, logística con Mapbox, dashboard glassmorphism y módulo de reportes.',
      tags: ['fullstack', 'mobile'],
      color: '#f7971e',
      gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
      svgPaths: this.icons.layers,
      links: [{ label: 'Ver sitio', url: 'https://meimportaunzapato.com/', type: 'web' }],
      highlights: ['.NET Core', 'Ionic/Angular', 'SQL Server', 'Mapbox', 'JWT Roles'],
      featured: false
    },
    {
      title: 'ClubMiner',
      subtitle: 'Plataforma de Inversión Cripto',
      description: 'Plataforma con PSE, tarjeta y NowPayments, campañas de inversión con scheduling, sistema multinivel de bonos y procesamiento masivo de pagos.',
      tags: ['backend', 'fullstack', 'web'],
      color: '#c471ed',
      gradient: 'linear-gradient(135deg, #c471ed, #f64f59)',
      svgPaths: this.icons.trendingUp,
      links: [{ label: 'Ver sitio', url: 'https://clubminer.com.co', type: 'web' }],
      highlights: ['PHP/MySQL', 'Multi-pasarelas', 'CRON jobs', 'Multinivel', 'Crypto'],
      featured: false
    },
    {
      title: 'Automatización de Pagos',
      subtitle: 'Herramienta Android — NDA',
      description: 'Lee desde Excel, procesa pagos masivos, actualiza estados y almacena soportes en la nube. Sistema de detección y recuperación automática de errores.',
      tags: ['mobile', 'backend'],
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      svgPaths: this.icons.cpu,
      links: [],
      highlights: ['Appium', 'Python', 'Google Drive API', 'Excel', 'Error Recovery'],
      featured: false
    },
    {
      title: 'CasaClick',
      subtitle: 'Plataforma inmobiliaria — casaclick.co',
      description: 'Plataforma web responsiva para el sector inmobiliario. Mantenimiento con enfoque en rendimiento, disponibilidad continua y UX fluida en móvil y escritorio.',
      tags: ['web', 'fullstack'],
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      svgPaths: this.icons.home,
      links: [{ label: 'Ver sitio', url: 'https://www.casaclick.co/', type: 'web' }],
      highlights: ['WordPress', 'PHP', 'MySQL', 'CRM', 'Responsive'],
      featured: false
    },
    {
      title: 'Vichada al Día',
      subtitle: 'Portal de noticias — vichadaaldia.co',
      description: 'Portal de noticias regional con alto tráfico. Desarrollo, mantenimiento y optimización para garantizar disponibilidad continua y carga rápida.',
      tags: ['web', 'fullstack'],
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
      svgPaths: this.icons.fileText,
      links: [{ label: 'Ver sitio', url: 'https://www.vichadaaldia.co/', type: 'web' }],
      highlights: ['WordPress', 'PHP', 'MySQL', 'SEO', 'Performance'],
      featured: false
    },
    {
      title: 'Mel-OH Hidromiel',
      subtitle: 'Landing Page — meloh.cubelab.com.co',
      description: 'Landing page para marca colombiana de hidromiel artesanal. Paleta oscura y dorada, secciones de historia, productos, galería y contacto con backend.',
      tags: ['web', 'fullstack'],
      color: '#d4a017',
      gradient: 'linear-gradient(135deg, #7c4a00, #d4a017)',
      svgPaths: this.icons.globe,
      links: [{ label: 'Ver sitio', url: 'https://meloh.cubelab.com.co/', type: 'web' }],
      highlights: ['Angular', '.NET Core', 'UI/UX', 'Responsive', 'Landing Page'],
      featured: false
    },
  ];

  get filtered(): Project[] {
    const f = this.activeFilter();
    if (f === 'todos') return this.projects;
    return this.projects.filter(p => p.tags.includes(f));
  }

  setFilter(f: string) {
    this.activeFilter.set(f);
    setTimeout(() => this.observeCards(), 50);
  }

  getSvgIcon(paths: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`
    );
  }

  ngAfterViewInit() {
    this.projectCards.changes.subscribe(() => this.observeCards());
    this.observeCards();
  }

  private observeCards() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );
    this.projectCards.forEach(c => {
      c.nativeElement.classList.remove('visible');
      observer.observe(c.nativeElement);
    });
  }
}
