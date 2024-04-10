import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: "trunks",
    power: 10
  }];

  @Output()
    onDelete:EventEmitter<string> = new EventEmitter();


  // onDeleteCharacter(index:number):void {
    // TODO: Emitir el ID del personaje
  //   this.onDelete.emit(index);

  // }
  deleteCharacterById(id?:string):void {
    if (!id) return;
    this.onDelete.emit(id);
  }

 }
