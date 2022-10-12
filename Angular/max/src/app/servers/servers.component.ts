import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  textTest = 'querySelector';
  serverName = '';
  serverCreationStatus = 'No server created';
  serverCreated = false;
  servers = ['Testserver', 'Testservers 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    if (this.allowNewServer) this.serverCreationStatus = 'Server created!';
    this.serverCreated = true;
    setTimeout(() => {
      this.serverCreated = false;
      this.serverName = '';
    }, 2000);
    this.servers.push(this.serverName);
  }

  onUpdateServerName(abcEvent: any) {
    this.serverName = abcEvent.target.value;
  }

  ngOnInit(): void {}
}
