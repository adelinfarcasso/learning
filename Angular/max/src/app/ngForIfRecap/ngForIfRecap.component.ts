import { Component } from '@angular/core';

@Component({
  selector: 'ng-for-if-recap',
  templateUrl: './ngForIfRecap.component.html',
  styleUrls: ['./ngForIfRecap.component.css'],
})
export class ngForIfRecap {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  oddnumbers = [];
  oddNumbers = this.numbers.filter(function (nr) {
    return nr % 2 == 0;
  });
  evenNumbers = this.numbers.filter(function (nr) {
    return nr % 2 !== 0;
  });
  value = 12;
}
