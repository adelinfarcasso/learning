import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  id: number;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //  this.id = this.route.snapshot.params['id'] * 1;
    //  this.server = this.serversService.getServer(this.id);
    //  this.route.params.subscribe((params: Params) => {
    //    // ce sa faca atunci cand subscribe fires
    //    this.server = this.serversService.getServer(params.id * 1);
    //  });
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }

  // navigates to the app-edit-server
  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }

  onCall() {}
}
