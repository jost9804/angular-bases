import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

    public characters: Character[] =[{
      name: 'Krilin',
      power: 2000
    },{
      name: 'Goku',
      power: 20000
    },{
      name: 'Vegeta',
      power: 8000
    }];

    onNewCharacter( character: Character):void {
      this.characters.push(character);

    }

    // onDeleteCharacter( xxx:xx ) {
    //   this.characters.splice
    // }


}
