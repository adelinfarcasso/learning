import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[basicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }
}
