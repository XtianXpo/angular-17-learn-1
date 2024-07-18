import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 44;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name.toUpperCase()} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Batman';
  }

  changeAge(): void {
    this.age = 38;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 44;
  }
}
