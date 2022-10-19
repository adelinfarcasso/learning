import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { FormsModule } from '@angular/forms';
import { UsernameComponent } from './username/username.component';
import { DetailsComponent } from './details/details.component';
import { Databinding } from './cmp-databinding/databinding.component';
import { InputFieldsComponent } from './cmp-databinding/input.fields/input.fields.component';
import { ElementsComponent } from './cmp-databinding/elements/elements.component';
import { ngForIfRecap } from './ngForIfRecap/ngForIfRecap.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    UsernameComponent,
    DetailsComponent,
    Databinding,
    InputFieldsComponent,
    ElementsComponent,
    ngForIfRecap,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
