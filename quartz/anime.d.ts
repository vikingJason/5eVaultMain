declare module 'animejs' {
  const anime: {
    (params: any): any;
    timeline: (params?: any) => any;
    random: (min: number, max: number) => number;
    setDashoffset: (el: HTMLElement) => number;
    stagger: (value: any, options?: any) => any;
  }
  export = anime
}