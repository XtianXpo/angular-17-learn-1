import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { ICharacter } from '../interfaces/character.interface';

// ! Al ser una injección de dependencias se puede utilizar en toda la app.
// ? Por eso está puesto en el ProvidedIn y es de tipo @Injectable
@Injectable({
  providedIn: 'root',
})
export class DbzService {
  // * Mock Inventado que se le pasará del padre al hijo
  public charactersMock: ICharacter[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 2200,
    },
    {
      id: uuid(),
      name: 'A16',
      power: 700,
    },
    {
      id: uuid(),
      name: 'A17',
      power: 1200,
    },
    {
      id: uuid(),
      name: 'A18',
      power: 1100,
    },
  ];

  addCharacter(character: ICharacter): void {
    const newCharacter: ICharacter = {
      ...character,
      id: uuid(),
    };

    this.charactersMock.push(newCharacter);
  }

  // * Funcion que recibirá el event | el dato que hemos asignado al Output.
  deleteCharacterById(idSelected: string): void {
    this.charactersMock = this.charactersMock.filter(
      (elm) => elm.id !== idSelected
    );
  }
}
