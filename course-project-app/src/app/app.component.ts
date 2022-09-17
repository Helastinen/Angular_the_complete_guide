import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedPage: string = "recipes";

  onNavigate(page: string) {
    this.loadedPage = page;
    console.log("onNavigate fired: " + page);
  }
}
