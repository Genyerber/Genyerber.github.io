import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  highlights = [
    { icon: '🚀', label: '3 Apps en producción', desc: 'Google Play & App Store' },
    { icon: '⚡', label: 'Full Stack End-to-End', desc: 'Desde la arquitectura hasta el deploy' },
    { icon: '🛡️', label: 'JWT & Autenticación', desc: 'ASP.NET Identity, roles, refresh tokens' },
    { icon: '📱', label: 'Mobile Development', desc: 'Ionic, Capacitor, Xcode' },
  ];
}
