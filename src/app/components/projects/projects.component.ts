import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  gradient: string;
  icon: string;
  links: { label: string; url: string; icon: string }[];
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
export class ProjectsComponent {
  activeFilter = signal('todos');

  filters = ['todos', 'mobile', 'backend', 'fullstack', 'web'];

  projects: Project[] = [
    {
      title: 'Taxiya',
      subtitle: 'App de taxi hailing — Publicada en Google Play',
      description: 'Aplicación de movilidad urbana con arquitectura de microservicios. Cálculo de tarifas dinámicas por zona geográfica, sistema de rastreo en tiempo real y gestión de conductores.',
      tags: ['mobile', 'backend', 'fullstack'],
      color: '#6c63ff',
      gradient: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
      icon: '🚕',
      links: [
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.taxiya.app', icon: '▶' }
      ],
      highlights: ['NestJS Microservicios', 'MongoDB', 'Redis', 'Ionic/Angular', 'JWT Auth'],
      featured: true
    },
    {
      title: 'Conecta',
      subtitle: 'App social — Google Play & App Store',
      description: 'Aplicación publicada en ambas tiendas. Proceso completo de submission iOS con Capacitor, Xcode, firma de aplicación, creación de listing en App Store Connect y aprobación de Apple.',
      tags: ['mobile', 'fullstack'],
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
      icon: '🌐',
      links: [
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.somosconecta&hl=es_CL', icon: '▶' },
        { label: 'Sitio web', url: 'https://somosconecta.com.co/', icon: '🌐' }
      ],
      highlights: ['Capacitor', 'Xcode', 'App Store Connect', 'Google Play', 'Angular/Ionic'],
      featured: true
    },
    {
      title: 'Mayorista KAI',
      subtitle: 'Plataforma E-commerce Mayorista',
      description: 'Sistema completo de e-commerce con catálogo de productos, carrito con sesiones anónimas, flujo de órdenes con comprobante de pago, lista de deseos, reseñas moderadas y recuperación de contraseña.',
      tags: ['fullstack', 'backend'],
      color: '#ff6584',
      gradient: 'linear-gradient(135deg, #ff6584, #ff8c69)',
      icon: '🛒',
      links: [
        { label: 'Ver sitio', url: 'https://mayoristakai.cubelab.com.co/home', icon: '🌐' }
      ],
      highlights: ['ASP.NET Core', 'Angular', 'JWT', 'SMTP', 'CORS por ambiente', 'Ionic'],
      featured: true
    },
    {
      title: 'MIZAP',
      subtitle: 'Me Importa Un Zapato — Lavandería de calzado',
      description: 'App con 4 roles diferenciados (Admin, Repartidor, Operador, Cliente). Sistema de comisiones, módulo de logística con mapa Mapbox, dashboard glassmorphism y módulo de reportes.',
      tags: ['fullstack', 'mobile'],
      color: '#f7971e',
      gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
      icon: '👟',
      links: [
        { label: 'Ver sitio', url: 'https://meimportaunzapato.com/', icon: '🌐' }
      ],
      highlights: ['.NET Core', 'Ionic/Angular', 'SQL Server', 'Mapbox', '4 roles JWT'],
      featured: false
    },
    {
      title: 'ClubMiner',
      subtitle: 'Plataforma de Inversión en Minería Cripto',
      description: 'Plataforma con múltiples pasarelas de pago (PSE, tarjeta, crypto), campañas de inversión con scheduling preciso, sistema multinivel de bonos y procesamiento masivo de pagos.',
      tags: ['backend', 'fullstack', 'web'],
      color: '#c471ed',
      gradient: 'linear-gradient(135deg, #c471ed, #f64f59)',
      icon: '⛏️',
      links: [
        { label: 'Ver sitio', url: 'https://clubminer.com.co', icon: '🌐' }
      ],
      highlights: ['PHP/MySQL', 'Multi-pasarelas', 'CRON', 'Sistema multinivel', 'Crypto'],
      featured: false
    },
    {
      title: 'Automatización de pagos masivos',
      subtitle: 'Herramienta Android — NDA',
      description: 'Herramienta de automatización que lee desde Excel, procesa pagos masivos, actualiza estados y almacena soportes en la nube mediante cuenta de servicio. Incluye manejo de errores y recuperación automática.',
      tags: ['mobile', 'backend'],
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      icon: '⚡',
      links: [],
      highlights: ['Appium', 'Google Drive API', 'Excel', 'Python', 'Error handling'],
      featured: false
    },
    {
      title: 'CasaClick',
      subtitle: 'Plataforma inmobiliaria — casaclick.co',
      description: 'Aplicación web responsiva para el sector inmobiliario. Desarrollo y mantenimiento de la plataforma con enfoque en rendimiento, disponibilidad continua y experiencia de usuario fluida en móvil y escritorio.',
      tags: ['web', 'fullstack'],
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      icon: '🏠',
      links: [
        { label: 'Ver sitio', url: 'https://www.casaclick.co/', icon: '🌐' }
      ],
      highlights: ['WordPress', 'PHP', 'CRM', 'UX/UI', 'Responsive'],
      featured: false
    },
    {
      title: 'Vichada al Día',
      subtitle: 'Portal de noticias — vichadaaldia.co',
      description: 'Portal de noticias regional con alto tráfico. Desarrollo, mantenimiento y optimización de rendimiento para garantizar disponibilidad continua y carga rápida del contenido informativo.',
      tags: ['web', 'fullstack'],
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
      icon: '📰',
      links: [
        { label: 'Ver sitio', url: 'https://www.vichadaaldia.co/', icon: '🌐' }
      ],
      highlights: ['WordPress', 'PHP', 'MySQL', 'SEO', 'Responsive'],
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
  }
}
