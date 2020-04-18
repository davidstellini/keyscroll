import { keyscroller, elementAnimate } from "keyscroll";


keyscroller.initializeFromDomEvents();


window.onload = () => {
    debugger;
    const elements = document.querySelectorAll('[data-keyscroll]');

    for (const element of elements) {
        const keyframe = element.getAttribute('data-keyscroll');

        elementAnimate.attachAnimation(element, keyframe);
    }
}
