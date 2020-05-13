import { Injectable } from '@angular/core';
import { elementAnimate } from 'keyscroll';

@Injectable({
  providedIn: 'root',
})
export class ElementAnimateService {
  public attachAnimation = (
    elementToAnimate: HTMLElement,
    keyframeName: string,
    config = {
      animationTiming: 'linear',
      animationStart: 0,
      animationEnd: 1,
    },
    followElement?: HTMLElement
  ) => elementAnimate.attachAnimation(elementToAnimate, keyframeName, config, followElement)
}
