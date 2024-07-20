import { Component } from '@angular/core';

import { ICharacter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // ! Es buena practica que siempre sea Private
  constructor(private DbzService: DbzService) {}

  get characters(): ICharacter[] {
    return this.DbzService.charactersMock;
  }

  onDeleteCharacter(id: string): void {
    this.DbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: ICharacter): void {
    this.DbzService.addCharacter(character);
  }
}
