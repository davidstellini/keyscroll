import { Directive, ElementRef, Inject, Input, OnChanges, PLATFORM_ID, SimpleChanges, } from '@angular/core';
import { ElementAnimateService } from './element-animate.service';
import { isPlatformBrowser } from '@angular/common';

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
    private elementAnimateService: ElementAnimateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.keyscroll && isPlatformBrowser(this.platformId)) {
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
