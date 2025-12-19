// quartz/components/TestAnime.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

declare global {
  interface Window {
    anime: any
  }
}

const TestAnime: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  const testAnimation = () => {
    if (!window.anime) {
      alert("Anime.js not loaded! Check Head.tsx")
      return
    }
    
    const box = document.getElementById('test-box')
    window.anime({
      targets: box,
      translateX: 250,
      rotate: '1turn',
      duration: 1000,
      easing: 'easeInOutSine'
    })
  }

  return (
    <div class={`test-anime ${displayClass}`}>
      <h4>Anime.js Test</h4>
      <button onClick={testAnimation} style={{padding: '0.5rem 1rem', margin: '0.5rem'}}>
        Run Test
      </button>
      <div id="test-box" style={{
        width: '50px',
        height: '50px',
        background: 'var(--heading1)',
        margin: '1rem auto'
      }}></div>
    </div>
  )
}

export default (() => TestAnime) satisfies QuartzComponentConstructor