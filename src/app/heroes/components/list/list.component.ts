import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public listHeroes: string[] = [
    'Batman',
    'Superman',
    'Hulk',
    'She Hulk',
    'Thor',
    'Spiderman',
  ];

  public listHeroesCount: number = this.listHeroes.length;
  public lastHeroeDeleted: string = '';

  removeLastHero(): void {
    this.lastHeroeDeleted = this.listHeroes.pop() ?? '';
  }
}
