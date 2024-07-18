import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
  imports: [CommonModule], // ! Importamos este modulo Common, pq se necesita por ng-if, ng-for, ...
})
export class HeroesModule {}
