import { Component} from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

<button (click)="increaseBy(2)">+2</button>
<button (click)="reset()">Reset</button>
<button (click)="decreaseBy(1)">-1</button>



  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 31

  public increaseBy(value: number):void {
    this.counter += value;
  }
  public reset(): void {
    this.counter = 31;
  }
  public decreaseBy(value: number):void {
    this.counter -= value;
  }
}
