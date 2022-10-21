// Service - a repo that holds repetable code
// no imports, just TS class
import { Injectable } from '@angular/core';

// bcoz recommended by Angular, no technical difference atm, works fine without Injectable() in the injected component, as well.
@Injectable()
export class LoggingService {
  logStatusChange(status: string) {
    console.log(
      'A server status changed, new status: ' + status + ' (LoggingService)'
    );
  }
}
