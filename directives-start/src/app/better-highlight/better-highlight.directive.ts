import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

// render is a better approach to access DOM.
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  // it's a better practice to initialize in ngOnInit
  ngOnInit() {
    // renderer is a better practice to access DOM elements
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
