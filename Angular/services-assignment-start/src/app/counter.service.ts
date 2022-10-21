export class CounterService {
  counter = [0, 0];

  increaseCounter(no: any): void {
    this.counter[no]++;
    console.log(
      `Active -> Inactive: ${this.counter[0]} / Inactive -> Active: ${this.counter[1]}`
    );
  }
}
