import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(name: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: name.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: name.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
