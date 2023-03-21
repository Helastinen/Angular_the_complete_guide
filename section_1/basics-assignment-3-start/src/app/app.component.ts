import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPara: boolean = false;
  timeStamps: Date[] = [];

  onBtnClick() {
    this.timeStamps.push(new Date());
    this.showPara = !this.showPara;
  }

  getBgColor(timeStamp) {   
    return this.timeStamps.indexOf(timeStamp) >= 4 ? 'blue' : 'white';
  }
}
