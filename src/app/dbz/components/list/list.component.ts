import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

// ? CREAR COMPONENTE: ng g c dbz/components/list

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // ! Definir las (PROPS) del componente => nombre de CharacterList.
  @Input()
  public characterList: ICharacter[] = [];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteId.emit(id);
  }
}
