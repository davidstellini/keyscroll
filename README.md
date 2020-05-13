

Work in progress. Todo:
- tests
- memory leaks
- npm publish fixes
- angular support under packages/ngx-keysroll
- better docs
- ~~automatic CI deployment of github pages on merge to master~~




# Keyscroll
![](https://github.com/davidstellini/ngrx-demo/workflows/Build%20Test%20And%20Deploy/badge.svg)

Animate CSS keyframes by scrolling through the page. This library can work independently or with a smooth scrolling library of your choice.

###Demo
Angular Demo:
https://davidstellini.github.io/keyscroll/keyscroll-ng/


Vanilla JS Demo: https://davidstellini.github.io/keyscroll/keyscroll-docs


### Quickstart - Angular

1. Install: `npm install keyscroll-ng`
2. Create a keyframe animation. For example (in styles.scss):
   ```scss
   @keyframes fade {
     from { opacity: 0; }
     to { opacity: 1; }
   }
   ```
3. Add the keyscroll module:
`imports: [ KeyscrollNgModule ],`
4. Tell keyscroll how it should monitor scroll events. The easiest way is as follows:
    ```typescript
    import { keyscroller } from 'keyscroll';

    keyscroller.initializeFromDomEvents();
    ```
    
    If you are using a smooth scrolling library, you may want to bind to a callback thrown by this 
    library. In that case, [check this section in the docs](todo).
    
5. Use the keyscroll directive on whichever element you would like to animate:
   ```html
   <div keyscroll="fade"> </div>
   ```
   When this element is at the top of the screen, it will be invisible, at the bottom, it will be fully visible. To learn what else you can do check the `README.md` the `keyscroll-ng` package, or the Angular docs source code.
   
    

### Quickstart - Vanilla Javascript

1. Install: `npm install keyscroll`. (Todo: cdnjs).
2. Create a keyframe animation, in your styles.css, for example:
   ```css
   @keyframes fade {
     from { opacity: 0; }
     to { opacity: 1; }
   }
   ```
3. Initialize it, and attach it to all elements you'd like to animate:

   ```javascript
   import {elementAnimate, keyscroller} from "keyscroll";
   
   window.onload = () => {
       keyscroller.initializeFromDomEvents();
   
       const myElement = document.querySelector('[data-fade-me]');
   
       elementAnimate.attachAnimation(myElement, 'fade',  {
           animationTiming: 'linear', animationStart: 0, animationEnd: 1
       });
   }
   ```
   [Here's an alternative usage example.](https://github.com/davidstellini/keyscroll/blob/master/packages/keyscroll-docs/src/main.js)


###Packages
Name  | Version | Bundle Size
------------- | ------------- | -------------
keyscroll | 0.1.0 | 4K
keyscroll-ng |  0.1.0 | 4K
keyscroll-docs  | 0.1.0  | 248K


## Contributing

###Getting Started
Once you have cloned the project, run: `npm install` to install all dependencies across all packages in the project.
This will also install dependencies for nested packages.

####Start a dev build
To start a dev build, run `npm start`.
This will start the docs locally, and rebuild the library on each change.
Modules are resolved in package.json via relative paths: 
`"keyscroll": "file:../keyscroll"`.

####Build the project
The project can be built for production by running:
`$ npm run build`
Again, the command will build all packages. The result from the build can be found in the  `./dist` folder of the project.

####Start a production build
To serve the built project locally just run:
`$ npm run local-server`
This will host an index page from where you can navigate either to the Angular Demo page or to the Vanilla JS page.

####Testing
To test all packages in the project run:
`$ npm run test`.
Due to locally resolved dependencies, remember to build before running the test command.

####Linting
To lint all packages run:
`$ npm run lint`
