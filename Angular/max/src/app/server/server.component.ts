import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // template: `<app-server></app-server>`,
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId = 10;
  serverStatus: string;

  constructor() {
    this.serverStatus = Math.round(Math.random()) === 0 ? 'offline' : 'online';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'lightgreen' : 'orangered';
  }
  getget() {}
}
