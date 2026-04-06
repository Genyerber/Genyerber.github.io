import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animFrame!: number;
  private resizeObs!: ResizeObserver;

  roles = ['Full Stack Developer', 'Mobile App Developer', 'Backend Architect', 'Angular & .NET Expert'];
  currentRole = 0;
  displayedText = '';
  private typingInterval: any;
  private roleInterval: any;

  ngAfterViewInit() {
    this.initCanvas();
    this.startTyping();
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize(canvas);

    this.resizeObs = new ResizeObserver(() => this.resize(canvas));
    this.resizeObs.observe(document.body);

    for (let i = 0; i < 80; i++) {
      this.particles.push(new Particle(canvas.width, canvas.height));
    }
    this.animate();
  }

  private resize(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private animate() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.particles.forEach(p => {
      p.update(canvas.width, canvas.height);
      p.draw(this.ctx);
    });
    this.connectParticles(canvas);
    this.animFrame = requestAnimationFrame(() => this.animate());
  }

  private connectParticles(canvas: HTMLCanvasElement) {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const a = this.particles[i], b = this.particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 120) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(108,99,255,${(1 - dist / 120) * 0.3})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.stroke();
        }
      }
    }
  }

  private startTyping() {
    const type = () => {
      const role = this.roles[this.currentRole];
      let i = 0;
      this.displayedText = '';
      clearInterval(this.typingInterval);
      this.typingInterval = setInterval(() => {
        this.displayedText = role.slice(0, ++i);
        if (i >= role.length) {
          clearInterval(this.typingInterval);
          setTimeout(() => {
            this.currentRole = (this.currentRole + 1) % this.roles.length;
            type();
          }, 2200);
        }
      }, 60);
    };
    type();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animFrame);
    clearInterval(this.typingInterval);
    clearInterval(this.roleInterval);
    this.resizeObs?.disconnect();
  }
}

class Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.size = Math.random() * 2 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update(w: number, h: number) {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(108,99,255,${this.opacity})`;
    ctx.fill();
  }
}
