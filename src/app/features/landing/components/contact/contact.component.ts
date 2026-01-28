import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo: ContactInfo[] = [
    {
      icon: 'icon-chat.svg',
      label: 'WhatsApp',
      value: '+1 (555) 012-7842',
      link: 'https://wa.me/15550127842'
    },
    {
      icon: 'icon-doc.svg',
      label: 'Correo',
      value: 'hola@marcafirmeusa.com',
      link: 'mailto:hola@marcafirmeusa.com'
    },
    {
      icon: 'icon-clock.svg',
      label: 'Horario',
      value: 'Lun a Vie: 9:00 AM – 6:00 PM (ET)'
    },
    {
      icon: 'icon-location.svg',
      label: 'Dirección',
      value: '1200 Brickell Ave, Suite 900, Miami, FL 33131'
    }
  ];

  openLink(link?: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }
}