import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

// render is a better approach to access DOM.
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostBinding('style.BackgroundColor') backgroundColor = 'transparent';

  // it's a better practice to initialize in ngOnInit
  ngOnInit() {
    // renderer is a better practice to access DOM elements
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-
    this.backgroundColor = 'blue';

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

  @HostListener('click') mouseclick(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey');
  }

}
