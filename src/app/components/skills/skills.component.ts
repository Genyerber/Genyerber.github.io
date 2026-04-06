import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  label: string;
  icon: string;
  skills: { name: string; level: number; color: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  categories: SkillCategory[] = [
    {
      label: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'Angular', level: 90, color: '#dd0031' },
        { name: 'Ionic Framework', level: 88, color: '#3ecff1' },
        { name: 'TypeScript', level: 85, color: '#3178c6' },
        { name: 'HTML5 / CSS3 / SCSS', level: 92, color: '#e44d26' },
        { name: 'Vue.js', level: 65, color: '#42b883' },
      ]
    },
    {
      label: 'Backend',
      icon: '⚙️',
      skills: [
        { name: '.NET Core / C#', level: 85, color: '#7b68ee' },
        { name: 'NestJS', level: 82, color: '#ea0071' },
        { name: 'Node.js', level: 78, color: '#68a063' },
        { name: 'PHP', level: 75, color: '#8892be' },
        { name: 'Python', level: 60, color: '#ffd43b' },
      ]
    },
    {
      label: 'Bases de datos',
      icon: '🗄️',
      skills: [
        { name: 'SQL Server', level: 82, color: '#cc2927' },
        { name: 'MongoDB', level: 78, color: '#47a248' },
        { name: 'MySQL', level: 80, color: '#4479a1' },
        { name: 'Firebase / Redis', level: 70, color: '#ffca28' },
      ]
    },
    {
      label: 'Mobile & DevOps',
      icon: '📱',
      skills: [
        { name: 'Google Play Console', level: 90, color: '#01875f' },
        { name: 'App Store Connect / Xcode', level: 80, color: '#0070c9' },
        { name: 'Capacitor', level: 85, color: '#119eff' },
        { name: 'Git / Azure DevOps', level: 88, color: '#f05033' },
        { name: 'Playwright / Appium', level: 72, color: '#2d8e3e' },
      ]
    },
  ];

  animated = false;

  ngOnInit() {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !this.animated) {
          this.animated = true;
        }
      },
      { threshold: 0.2 }
    );
    setTimeout(() => {
      const el = document.querySelector('#skills');
      if (el) observer.observe(el);
    }, 100);
  }
}
