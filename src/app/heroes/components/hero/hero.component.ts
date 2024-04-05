import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 30;
  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.name= 'spidey';
  }

  changeAge():void{
    this.age = 20;
  }

  resetForm():void {
    this.name= 'ironman';
    this.age = 30;
  }



}
