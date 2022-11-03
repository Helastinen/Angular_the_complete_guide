import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // use this if route will not change while on this page
    // this.errorMessage = this.route.snapshot.data['message'];
    
    // use this if possibility that route will change
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )
  }

}
