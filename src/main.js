import {elementAnimate, keyscroller} from "keyscroll";
import {nativeSmoothScroll} from '@smoovy/scroller';
import './index.scss';

window.onload = () => {
    const scroller = nativeSmoothScroll({ element: document.querySelector('.sections')});

    keyscroller.initializeFromCallbackFn(scroller.onScroll.bind(scroller));

    const elements = document.querySelectorAll('[data-keyscroll]');

    for (const element of elements) {
        const keyframe = element.getAttribute('data-keyscroll');
        const animationStart = +(element.getAttribute('data-keyscroll-start') || 0);
        const animationEnd = +(element.getAttribute('data-keyscroll-end') || 1);

        elementAnimate.attachAnimation(element, keyframe,  {
            animationTiming: 'linear',
            animationStart,
            animationEnd,
        });
    }
}
