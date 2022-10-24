import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  // <router-outlet></router-outlet> citeste doar primul nivel de paths-uri, nu si children ///
  // solutie - > <router-outlet></router-outlet> in servers.component.html ///
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  // Passing argumments to routes, accesul parametrului in componentul tinta ///

  {
    path: 'servers',
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  // catch every path that can't be found
  // make sure is the last path declared (parsed top -> bottom)
  //   { path: 'not-found', component: PageNotFoundComponent },

  // Pasarea de date statice folosind Routes
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  // # - webserver ignora path-ul dat prin Router returneaza index.html in caz de 404
  // - requesturile din linkbar sunt procesate de catre webserver prima data
  // - angular, by default, nu are intaietate pentru a folosi Router coresp.

  //   imports: [RouterModule.forRoot(appRoutes, { useHash: true })], ///
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
