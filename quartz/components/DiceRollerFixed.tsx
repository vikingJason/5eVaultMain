import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { animate } from 'animejs'

const DiceRollerFixed: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1
    const diceElement = document.getElementById('dice-result')
    
    animate({
      targets: diceElement,
      innerHTML: [0, result],
      round: 1,
      duration: 800,
      easing: 'easeOutElastic(1, .8)'
    })
  }

  return (
    <div class={`dice-roller ${displayClass}`}>
      <h3>🎲 Dice Roller (Fixed Import)</h3>
      <div id="dice-result" class="dice-result">0</div>
      {/* ... rest of component same as above */}
    </div>
  )
}

export default (() => DiceRollerFixed) satisfies QuartzComponentConstructor