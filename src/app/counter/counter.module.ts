import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/countercomponent";



@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
