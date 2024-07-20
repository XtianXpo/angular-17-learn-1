import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular 18 😊';
  public isAccordionOpen: boolean = false;

  public isAccordionOpenHero: boolean = false;
  public isAccordionOpenDbz: boolean = false;

  handleAccordionOpenHero(): void {
    this.isAccordionOpenHero = !this.isAccordionOpenHero;
  }

  handleAccordionOpenDBZ(): void {
    this.isAccordionOpenDbz = !this.isAccordionOpenDbz;
  }
}
