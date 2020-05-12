import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { keyscroller } from 'keyscroll';
import { nativeSmoothScroll } from '@smoovy/scroller';
import { examples } from '../examples';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  slideInLeft = examples.slideInLeft;
  controlSpeed = examples.controlSpeed;
  textBlurOut = examples.textBlurOut;
  textFocusIn = examples.textFocusIn;
  spinGrow = examples.spinGrow;
  cubeExplode = examples.cubeExplode;
  fadeInVertical = examples.fadeInVertical;
  fadeInHorizontal = examples.fadeInHorizontal;
  slideUp = examples.slideUp;

  title = 'keyscroll-ng-demo';
  @ViewChild('sections', { static: true }) sections;

  ngAfterViewInit(): void {
    const scroller = nativeSmoothScroll({
      element: this.sections.nativeElement,
    });

    keyscroller.initializeFromCallbackFn(scroller.onScroll.bind(scroller));
  }
}
