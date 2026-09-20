import anime from "animejs"

export default function SimpleAnimation() {
  // This runs client-side
  if (typeof window !== 'undefined') {
    anime({
      targets: '.animated-title',
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1000,
      easing: 'easeOutExpo'
    })
  }

  return (
    <h1 className="animated-title">
      Welcome to My TTRPG Site!
    </h1>
  )
}