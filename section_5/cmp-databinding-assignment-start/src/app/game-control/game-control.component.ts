import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() myTimer = new EventEmitter<number>();
  increment: number = 0;
  myInterval;
  
  constructor() { }

  ngOnInit(): void {
  }

  myIncrementor = () => {
    this.myTimer.emit(this.increment += 1);
  };

  onStartGame() {
    this.myInterval = setInterval(this.myIncrementor, 1000);
  }

  onStopGame() {
    clearInterval(this.myInterval);
  }
}