import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]'
})
export class HighlightCardDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#1976d2');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }

}
