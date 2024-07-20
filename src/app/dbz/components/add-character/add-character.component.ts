import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

// ? CREAR COMPONENTE: ng g c dbz/components/addCharacter

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  // ! Creamos un EventEmiter para poder controlar el cambio de estado del objeto.
  // ! Puede emitir cualquier tipo de dato a traves del <T> : Interfaz
  // ? @Output salida del componente que el componente padre puede suscribirse para escuchar.
  @Output()
  public onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  public character: ICharacter = {
    name: '',
    power: 0,
  };

  public emitCharacter(): void {
    console.table(this.character);

    if (this.character.name.length === 0) return;

    //? Intanciamos nuestro emitter con el nuevo objeto.
    this.onNewCharacter.emit(this.character);

    this.character = { id: '', name: '', power: 0 };
  }
}
