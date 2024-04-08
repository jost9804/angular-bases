import { Component, Input } from "@angular/core";
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

  // onDelete()


  onDeleteCharacter(index:number):void {
    // TODO: Emitir el ID del personaje
    console.log({index});

  }

 }
