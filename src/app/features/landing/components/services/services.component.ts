import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Registro de marca',
      description: 'Te acompañamos desde la revisión hasta la radicación.',
      icon: 'icon-doc.svg'
    },
    {
      title: 'Renovación',
      description: 'Evita perder tu marca por fechas o requisitos.',
      icon: 'icon-clock.svg'
    },
    {
      title: 'Vigilancia',
      description: 'Detecta marcas parecidas y actúa a tiempo.',
      icon: 'icon-shield.svg'
    },
    {
      title: 'Oposición',
      description: 'Responde o inicia una oposición con respaldo legal.',
      icon: 'icon-check.svg'
    }
  ];
}