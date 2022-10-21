import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //   providers: [LoggingService],
})
export class NewAccountComponent {
  //   @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {
    this.accountService.statusUpdate.subscribe((status: string) => {
      alert(`${status} - status received!`);
    });
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    //  this.accountAdded.emit({
    //    name: accountName,
    //    status: accountStatus,
    //  });
    this.accountService.addAccount(accountName, accountStatus);
    //  this.loggingService.logStatusChange(accountStatus);

    // Bad way of using services bcoz manually creating instances
    /*
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
    */
    //
    // The way
    // Dependency injection - injecteaza un 'dependency' intr-o clasa (component)
    // NewAccountComponent ar fi dependent de metoda de logare de pe clasa de servicii 'logging.service'
    // Dependency injector - injecteaza un 'depenency' (o instanta a clasei de servicii) in componentul tinta automat
    //
    // serviciul ca si argument in parametrii constructorului - pt ca Angular sa instantieze corect clasa de servicii (private loggingService - face valabila proprietatea pe component)
    // plasarea serviciului in arg. constr. obliga angular sa instantieze clasa de servicii
    // providers in @Component, cu numele serviciului

    //  console.log('A server status changed, new status: ' + accountStatus);
  }
}
