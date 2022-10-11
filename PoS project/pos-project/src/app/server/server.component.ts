import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // template: `<app-server></app-server>`,
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
