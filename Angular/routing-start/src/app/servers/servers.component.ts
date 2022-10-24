import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    ///
  }

  onReload() {
    /// functioneaza si cu relative path pentru ca Router nu stie
    /// in ce component ne aflam momentan (fata de routerLink in HTML, care stie)
    //  this.router.navigate(['servers'], { relativeTo: this.route }); /// ii spunem la router unde suntem cu { relativeTo: this.route} ca si al-2lea arg. la navigate
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
}
