import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input.fields.component.html',
  styleUrls: ['./input.fields.component.css'],
})
export class InputFieldsComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName = '';
  newServerContent = '';
  serverElements = [];

  onAddServer(
    serverNameInput: HTMLInputElement,
    serverContentInput: HTMLInputElement
  ) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: serverContentInput.value,
    });
    //  this.serverElements.push({
    //    type: 'server',
    //    name: this.newServerName,
    //    content: this.newServerContent,
    //  });
    console.dir(serverNameInput);
    console.log(this.serverInputValue);
  }

  onAddBlueprint(
    serverNameInput: HTMLInputElement,
    serverContentInput: HTMLInputElement
  ) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: serverContentInput.value,
    });
    //  this.serverElements.push({
    //    type: 'blueprint',
    //    name: this.newServerName,
    //    content: this.newServerContent,
    //  });
    console.dir(serverContentInput);
    console.dir(this.viewChildServerContentInput.nativeElement);
  }
  serverInputValue: string;

  @ViewChild('serverNameInput', { static: true })
  viewChildServerContentInput: ElementRef;

  constructor() {
    this.serverInputValue = '';
  }

  ngOnInit(): void {}
}
