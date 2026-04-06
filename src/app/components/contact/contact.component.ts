import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sent = signal(false);
  sending = signal(false);

  contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'danielordonez777@gmail.com',
      href: 'mailto:danielordonez777@gmail.com'
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '+57 318 310 1317',
      href: 'https://wa.me/573183101317'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Genyerber Daniel',
      href: 'https://www.linkedin.com/in/genyerber-daniel-ordo%C3%B1ez-hern%C3%A1ndez-017548194/'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/Genyerber',
      href: 'https://github.com/Genyerber'
    },
  ];

  sendMessage() {
    const { name, email, subject, message } = this.form;
    const body = `Hola Genyerber,%0D%0A%0D%0AMi nombre es ${encodeURIComponent(name)}.%0D%0A%0D%0A${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:danielordonez777@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}&cc=${encodeURIComponent(email)}`;
    window.open(mailtoUrl, '_blank');
    this.sent.set(true);
    setTimeout(() => this.sent.set(false), 4000);
  }
}
