import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  // default settings
  @Input() defaultColor: string = 'transparent';
  //   @Input('alias') defaultColor: string = 'red'; pentru '[appBetterHighlight]'="'color'" pe elen. HTML
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') localStyleProperty: string =
    this.defaultColor;
  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green'
    );
    //  this.localStyleProperty = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //  this.renderer.setStyle(
    //    this.element.nativeElement,
    //    'background-color',
    //    'orangered'
    //  );
    this.localStyleProperty = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //  this.renderer.setStyle(
    //    this.element.nativeElement,
    //    'background-color',
    //    'transparent'
    //  );
    this.localStyleProperty = this.defaultColor;
  }
}
