import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      type: "server",
      name: "Test server",
      content:"This is just test content"
    },
    {
      type: "blueprint",
      name: "Test server blueprint",
      content:"This is just test content for blueprint"
    },
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  OnFirstChange() {
    console.log("OnFirstChange fired");
    this.serverElements[0].name = "Changed!";
  }

  
  OnFirstDestroy() {
    console.log("OnFirstDestroy fired");
    this.serverElements.splice(0, 1);
  }
}
