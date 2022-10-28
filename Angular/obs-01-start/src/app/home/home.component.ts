import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { timeout } from 'rxjs-compat/operator/timeout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  private customSubscription: Subscription;

  ngOnInit() {
    const customObservable = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) observer.complete();
        if (count > 3) observer.error(new Error('error'));
        count++;
      }, 1000);
    });

    // Observable
    // customObservable.pipe( ///
    //   map((data) => {
    //     return 'Round' + data + 1;
    //   })
    // );

    this.customSubscription = customObservable
      .pipe(
        ///
        map((data) => {
          return 'Round:' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          // on complete
          console.log('completed');
        }
      );
  }

  ngOnDestroy() {
    // this.counterSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}

// private counterSubscription: Subscription;
// this.counterSubscription = interval(1000).subscribe((counter) => {
//   console.log(counter);
// });
