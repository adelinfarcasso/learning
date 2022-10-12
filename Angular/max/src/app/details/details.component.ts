import { Component } from '@angular/core';

@Component({
  selector: 'display-details',
  templateUrl: './details.component.html',
  styles: [''],
})
export class DetailsComponent {
  isVisible = false;
  secretPassword = 'trout';
  logs = [];
  logBackgroundColor = {};
  constructor() {}

  logger() {
    const log = `${new Date().getTime()} (${this.isVisible ? 'show' : 'hide'})`;
    this.logs.push(log);
  }

  // cam ineficient
  checker() {
    this.logs.forEach((elem: any, idx: number) => {
      console.log(idx > 4 ? true : false);
      console.log(idx);
    });
  }

  getStyle() {
    if (this.logs.length > 4) {
      return {
        'background-color': 'blue',
        color: 'white',
      };
      return {};
    }
    console.log(this.logs, this.logs.length, this.logBackgroundColor);
    return this.logBackgroundColor;
  }
}
