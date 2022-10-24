import { Component, OnInit, OnDestroy } from '@angular/core';
// Acces la URL-ul activ, care contine id-ul userului ///
import { ActivatedRoute, Params } from '@angular/router'; ///
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {} ///

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], ///
      name: this.route.snapshot.params['name'], ///
    };
    // params - Observable, if triggered ( params changed ) - similar unui event pe params
    this.paramsSubscription = this.route.params.subscribe(
      // .subscribe(fn(updatedParams), ) - whenever params change (from Params Directive) - fn is executed
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
      }
    ); //
  }

  // Optional in cazul asta, Angular se ocupa singur
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
