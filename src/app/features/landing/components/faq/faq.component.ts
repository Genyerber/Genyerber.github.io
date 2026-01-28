import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: '¿Cuánto demora el proceso?',
      answer: 'Depende del caso. Te damos tiempos estimados en la asesoría.',
      isOpen: false
    },
    {
      question: '¿Necesito LLC para registrar?',
      answer: 'No siempre. Te orientamos según tu situación.',
      isOpen: false
    },
    {
      question: '¿Puedo registrar si estoy fuera de USA?',
      answer: 'Sí. Evaluamos tu caso y te guiamos.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}