# React Usage
1. Install: `npm install keyscroll rxjs --save`

   RxJS is used due to the way the library hooks up to [listen to events](packages/keyscroll/src/keyscroller.ts). 
   If you're concerned about size - initialize the library using `initializeFromCallbackFn()`. With this approach, very little will be used from RxJS and treeshaking will leave you with a low size footprint. 
   However, if you would like to avoid rxjs usage entirely, open a feature request. If there is some demand, RxJS can be refactored out.
   
2. Create a keyframe animation, in your styles.css, for example:
   ```css
   @keyframes fade {
     from { opacity: 0; }
     to { opacity: 1; }
   }
   ```
3. Initialize it:
   ```jsx harmony
   class App extends Component {
     componentDidMount() {
       keyscroller.initializeFromDomEvents();   
     }
     
   }
   ```
   
4. Alternatively, you can initialize from a smooth scrolling library, for example:

   ```jsx harmony
   import { nativeSmoothScroll } from '@smoovy/scroller';

   class App extends Component {
     componentDidMount() {
         
       const scroller = nativeSmoothScroll({
         element: this.sectionRef,
       });
           
       keyscroller.initializeFromCallbackFn(scroller.onScroll.bind(scroller));
     }
  
     render() {
        <Sections ref={ (ref) => this.sectionRef = ref }> </Sections>
     }
     
   }
    ```
 
5. Create a wrapper class based on your usage:
   ```jsx harmony
   export class Keyscroll extends React.Component {
     constructor(props) {
       super(props);
   
       const { keyframe, start, end } = props;
   
       this.animateChildRef = (ref) => {
         elementAnimate.attachAnimation(ref, keyframe, {
           animationStart: start || 0,
           animationEnd: end || 1,
           animationTiming: "ease",
         });
       };
     }
   
     render() {
       const { children } = this.props;
   
       // This creates a div per animation, but is simpler to use.
       // The alternative is to pass the element reference from the child.
       return <div ref={this.animateChildRef}> {children} </div>;
     }
   }
   ``` 
6. Animate your elements:
   ```jsx harmony
     <Keyscroll keyframe="slide-in-left">
       <div class="box" />
     </Keyscroll>
   ```
