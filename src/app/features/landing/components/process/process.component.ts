import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  steps: ProcessStep[] = [
    {
      number: 1,
      title: 'Asesoría inicial',
      description: '15 minutos de evaluación para entender tu caso',
      icon: 'icon-chat.svg'
    },
    {
      number: 2,
      title: 'Búsqueda y estrategia',
      description: 'Investigación exhaustiva y plan personalizado',
      icon: 'icon-doc.svg'
    },
    {
      number: 3,
      title: 'Radicación y seguimiento',
      description: 'Registro oficial y acompañamiento completo',
      icon: 'icon-shield.svg'
    }
  ];
}