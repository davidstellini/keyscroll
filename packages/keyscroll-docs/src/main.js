import { keyscroller, elementAnimate } from "keyscroll";


keyscroller.initializeFromDomEvents();


window.onload = () => {
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
