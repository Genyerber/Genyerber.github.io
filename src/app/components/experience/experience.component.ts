import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  jobs = [
    {
      company: 'Cube Lab S.A.S.',
      role: 'Desarrollador Full Stack',
      period: 'Mayo 2025 – Presente',
      location: 'Granada, Meta — Colombia',
      url: 'https://cubelabcolombia.com',
      color: '#6c63ff',
      current: true,
      achievements: [
        'Lideré el desarrollo completo de <strong>Taxiya</strong> (taxi hailing), publicada en Google Play con microservicios NestJS y cálculo de tarifas dinámicas por zona geográfica.',
        'Publiqué <strong>Conecta</strong> en Google Play y gestioné su submission a App Store (Capacitor + Xcode + firma + App Store Connect listing).',
        'Diseñé módulo de gestión de rutas con JWT, eliminación lógica y endpoints de admin, reduciendo el tiempo de configuración operativa en un <strong>60%</strong>.',
        'Construí herramienta de automatización de pagos masivos para Android (NDA) con lectura desde Excel y almacenamiento automático de soportes en la nube.',
        'Generé assets gráficos para tiendas (1080x1920px Play Store, formatos iPad/iPhone) usando automatización con <strong>Playwright y Pillow</strong>.',
        'Desarrollé múltiples APIs RESTful con .NET Core y NestJS (monorepo npm workspaces), documentadas con Swagger.',
        'Implementé autenticación JWT con ASP.NET Identity (roles, claims, refresh tokens) para más de 4 perfiles de usuario.',
        'Gestión de repositorios en <strong>Azure DevOps</strong> bajo Git Flow: feature/develop/main, pull requests y revisión de código.',
      ]
    },
    {
      company: 'Grupo Empresarial GB',
      role: 'Desarrollador Full Stack',
      period: '2022 – 2025',
      location: 'Colombia',
      url: '#',
      color: '#ff6584',
      current: false,
      achievements: [
        'Desarrollé y mantuve aplicaciones web responsivas para <strong>casaclick.co</strong> y <strong>vichadaaldia.co</strong> con disponibilidad continua.',
        'Construí plugins personalizados en WordPress optimizando flujos CRM para equipos no técnicos.',
        'Diseñé e implementé tiendas eCommerce con enfoque en UX y accesibilidad, garantizando experiencias fluidas en móvil y escritorio.',
        'Lidereé equipos de desarrollo bajo <strong>metodologías ágiles</strong>, coordinando entregas semanales y revisiones de código.',
        'Creé landing pages de alta conversión con integración de formularios, analytics y captación de leads.',
      ]
    }
  ];
}
