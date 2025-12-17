declare module 'animejs' {
  // Export as namespace
  export as namespace anime;
  
  // Export the function directly
  export default function anime(params: any): any;
  
  // If you need to use anime.timeline() etc.
  export namespace anime {
    export function timeline(params?: any): any;
    export function random(min: number, max: number): number;
    export function setDashoffset(el: HTMLElement): number;
    export function stagger(value: any, options?: any): any;
  }
}