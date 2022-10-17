import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css'],
})
export class ElementsComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() element: {
    name: string;
    type: string;
    content: string;
  };

  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(`Text Content:${this.header.nativeElement.textContent}`);
  }
}
