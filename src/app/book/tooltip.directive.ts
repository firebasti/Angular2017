import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input()
  set tooltip(newVal) {this.tooltipElement.innerText = newVal;}

  tooltipElement = document.createElement('div');


  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')
  public onMouseEnter() {
    console.log("enter")

    this.elementRef.nativeElement.appendChild(this.tooltipElement);
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    console.log("leave")
    this.elementRef.nativeElement.removeChild(this.tooltipElement);
  }
}
