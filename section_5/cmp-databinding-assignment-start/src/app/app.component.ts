import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incrementList: number[] = [];

  onTimerStarted(timerIncrement: number) {
    this.incrementList.push(timerIncrement);
    console.log("incrementList: " + this.incrementList);
  }
}
