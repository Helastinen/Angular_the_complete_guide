import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSub: Subscription;
  constructor() { }

  ngOnInit() {
    /* this.firstSub = interval(1000).subscribe(count => {
      console.log("count: " + count);
    });*/

    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 7) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count greater than three!"));
        }
        count++;
      }, 1000);
    });

    this.firstSub = customIntervalObservable.pipe(
      filter((data: number) => {
        return data % 2 === 0;
      }),
      map((data: number) => {
        return 'Round: ' + (data + 1);
      })
    ).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log("completed!");
    });
  }

  ngOnDestroy() {
    this.firstSub.unsubscribe();
  }

}
