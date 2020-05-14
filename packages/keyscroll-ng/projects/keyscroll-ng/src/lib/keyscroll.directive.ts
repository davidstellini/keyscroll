import { Directive, ElementRef, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { ElementAnimateService } from './element-animate.service';

@Directive({
  selector: '[keyscroll]',
})
export class KeyscrollDirective implements OnChanges {
  @Input() keyscroll: string;
  @Input() keyscrollStart = 0;
  @Input() keyscrollEnd = 1;
  @Input() keyscrollFollowElement: HTMLElement;

  constructor(
    private elRef: ElementRef,
    private elementAnimateService: ElementAnimateService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.keyscroll) {
      this.elementAnimateService.attachAnimation(
        this.elRef.nativeElement,
        this.keyscroll,
        {
          animationTiming: 'linear',
          animationStart: this.keyscrollStart,
          animationEnd: this.keyscrollEnd,
        },
        this.keyscrollFollowElement
      );
    }
  }
}
