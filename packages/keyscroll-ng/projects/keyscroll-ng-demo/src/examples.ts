export const examples = {
  slideInLeft: {
    css: `@keyframes slide-in-left {
\tfrom {
\t\ttransform: translateX(-70vw);
\t}

\tto {
\t\ttransform: translateX(0);
\t}
}`,
    html: `<div keyscroll='slide-in-left'></div>`,
  },
  controlSpeed: {
    css: ``,
    html: `<div>
\t<div keyscroll='slide-in-left' keyscrollStart='0.2'></div>
\t<div keyscroll='slide-in-left' keyscrollStart='0.4'></div>
\t<div keyscroll='slide-in-left' keyscrollStart='0.6'></div>
\t<div keyscroll='slide-in-left' keyscrollStart='0.8'></div>
</div>`,
  },
  textBlurOut: {
    css: `@keyframes text-blur-out {
\t0% {
\t\tfilter: blur(0);
\t}
\t100% {
\t\tfilter: blur(12px) opacity(0);
\t}
}`,
    html: `<div keyscroll='text-blur-out' keyscrollEnd='0.3'></div>`,
  },
  textFocusIn: {
    css: `@keyframes text-focus-in {
\t0% {
\t\tfilter: blur(12px);
\t\topacity: 0;
\t}
\t100% {
\t\tfilter: blur(0);
\t\topacity: 1;
\t}
}`,
    html: `<div keyscroll='text-focus-in' keyscrollStart='1' keyscrollEnd='0.8'></div>`,
  },
  spinGrow: {
    css: `@keyframes spin-grow {
\t0% {
\t\ttransform: rotateY(0deg);
\t}
\t100% {
\t\ttransform: rotateY(360deg);
\t}
}`,
    html: `<div keyscroll='spin-grow' keyscrollStart='-0.2'
        keyscrollEnd='1.2'></div>`,
  },
  cubeExplode: {
    css: `@keyframes cube-explode {
\t0% {
\t\t--cubeTranslateZ: 100px;

\t\ttransform: rotateY(var(--cubeRotateY))
\t\t\trotateX(var(--cubeRotateX))
\t\t\ttranslateZ(var(--cubeTranslateZ));
\t}

\t100% {
\t\ttransform: rotateY(var(--cubeRotateY))
\t\t\trotateX(var(--cubeRotateX))
\t\t\ttranslateZ(400px);
\t}
}`,
    html: `<div keyscroll='cube-explode'></div>`,
  },
  fadeInVertical: {
    css: `@keyframes fade-in {
\tfrom {
\t\topacity: 0;
\t}

\tto {
\t\topacity: 1;
\t}
}`,
    html: `<div keyscroll='fade-in'></div>`,
  },
  fadeInHorizontal: {
    css: ``,
    html: `<div keyscroll="fade-in" keyscrollStart="0" class="box"></div>
<div keyscroll="fade-in" keyscrollStart="0.3" class="box"></div>
<div keyscroll="fade-in" keyscrollStart="0.6" class="box"></div>
<div keyscroll="fade-in" keyscrollStart="0.8" class="box"></div>`,
  },
  slideUp: {
    css: `@keyframes slide-up {
\tfrom {
\t\ttransform: translateY(0);
\t}

\tto {
\t\ttransform: translateY(-100%);
\t}
}`,
    html: `<img keyscroll='slide-up' keyscrollStart='0' keyscrollEnd='0.8'/>`,
  },
};
