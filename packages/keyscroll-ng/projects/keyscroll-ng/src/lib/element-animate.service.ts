import { Injectable } from '@angular/core';
import { elementAnimate } from 'keyscroll';

@Injectable({
  providedIn: 'root',
})
export class ElementAnimateService {
  public attachAnimation = (
    element: HTMLElement,
    keyframeName: string,
    config = {
      animationTiming: 'linear',
      animationStart: 0,
      animationEnd: 1,
    }
  ) => elementAnimate.attachAnimation(element, keyframeName, config)
}
