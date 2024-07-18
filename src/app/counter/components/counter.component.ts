import { Component } from '@angular/core';

// !DECORADOR
@Component({
  selector: 'app-counter', //? Nombre del componente
  styleUrl: './counter.component.css',
  template: `
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          (click)="handleAccordionOpen()"
        >
          COUNTER COMPONENT
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body" *ngIf="isAccordionOpen === true">
          <button class="btn btn-success " (click)="calculateBy(+1)">+1</button>
          <button class="btn btn-warning mx-3" (click)="resetCounter()">
            R
          </button>
          <button class="btn btn-danger" (click)="calculateBy(-1)">-1</button>

          <h2 class="my-3">Contador: {{ counter }}</h2>
        </div>
      </div>
    </div>
  `, //? Contenido del componente
})

// !CLASE
export class CounterComponent {
  public counter: number = 10;
  public isAccordionOpen: boolean = false;

  calculateBy = (value: number): void => {
    this.counter += value;
  };

  resetCounter = (): void => {
    this.counter = 10;
  };

  handleAccordionOpen(): void {
    console.log('pre-click', this.isAccordionOpen);
    this.isAccordionOpen = !this.isAccordionOpen;
    console.log('click', this.isAccordionOpen);
  }
}
