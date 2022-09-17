import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  @Output() pageSelected = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(page: string) {
    this.pageSelected.emit(page);
  }
}
