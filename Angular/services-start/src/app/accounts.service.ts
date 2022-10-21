// attach metadata for service in service to work
import { LoggingService } from './logging.service';
import { EventEmitter, Injectable } from '@angular/core';

// attach metadata for service in service to work - decorator
@Injectable()
// tells Angular that this service can be injected with another service ~ AccountService is Injectable
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  constructor(private loggingService: LoggingService) {}
  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }

  statusUpdate = new EventEmitter<string>();
}
