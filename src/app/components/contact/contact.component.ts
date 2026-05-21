import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Obtén tu access key gratis en https://web3forms.com (ingresa tu email, recibirás la key al instante)
const WEB3FORMS_KEY = '18e1a3e2-96ec-43d0-852a-97909eb03b82';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private http = inject(HttpClient);

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sent    = signal(false);
  sending = signal(false);
  error   = signal(false);

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
    this.sending.set(true);
    this.error.set(false);

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `[Portafolio] ${this.form.subject}`,
      from_name: this.form.name,
      email: this.form.email,
      message: this.form.message,
      botcheck: '',
    };

    this.http.post<{ success: boolean }>('https://api.web3forms.com/submit', payload)
      .subscribe({
        next: (res) => {
          this.sending.set(false);
          if (res.success) {
            this.sent.set(true);
            this.form = { name: '', email: '', subject: '', message: '' };
          } else {
            this.error.set(true);
          }
        },
        error: () => {
          this.sending.set(false);
          this.error.set(true);
        }
      });
  }

  retry() {
    this.error.set(false);
  }
}
