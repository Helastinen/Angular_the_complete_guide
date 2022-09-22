import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CounterService {
    count: number = 0;
    CounterIncremented = new EventEmitter<number>();

    incrementCount() {
        this.count++;
        console.log("count: " + this.count);
    }
}