import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import anime from "animejs"

const AnimatedDice: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1
    const diceElement = document.getElementById('dice-result')
    const history = document.getElementById('roll-history')
    
    // Animate the roll
    anime({
      targets: diceElement,
      innerHTML: [0, result],
      round: 1,
      duration: 800,
      easing: 'easeOutElastic(1, .8)',
      update: function(anim) {
        if (diceElement) {
          diceElement.innerHTML = Math.round(anim.animations[0].currentValue)
        }
      },
      complete: function() {
        // Add to history with your theme colors
        if (history) {
          const rollItem = document.createElement('div')
          rollItem.className = 'roll-item'
          rollItem.innerHTML = `d${sides}: <span style="color: ${cfg?.theme?.colors?.lightMode?.heading1 || '#c14343'}">${result}</span>`
          history.prepend(rollItem)
          
          // Animate new history entry
          anime({
            targets: rollItem,
            opacity: [0, 1],
            translateY: [-10, 0],
            duration: 300
          })
        }
      }
    })
  }

  return (
    <div class={`animated-dice ${displayClass}`}>
      <h3 style={{ color: 'var(--heading1)' }}>🎲 Dice Roller</h3>
      <div id="dice-result" class="dice-result">0</div>
      <div class="dice-buttons">
        {[4, 6, 8, 10, 12, 20, 100].map(sides => (
          <button 
            onClick={() => rollDice(sides)}
            class="dice-button"
            style={{
              backgroundColor: 'var(--outline)',
              color: 'var(--textcolor)'
            }}
          >
            d{sides}
          </button>
        ))}
      </div>
      <div class="roll-history">
        <h4>Recent Rolls</h4>
        <div id="roll-history" class="history-list"></div>
      </div>
    </div>
  )
}

AnimatedDice.css = `
.animated-dice {
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--note);
  border: 2px solid var(--outline);
  margin: 2rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.dice-result {
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  margin: 1.5rem 0;
  color: var(--heading1);
  text-shadow: 0 2px 8px rgba(193, 67, 67, 0.3);
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dice-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .dice-buttons {
    grid-template-columns: repeat(3, 1fr);
  }
}

.dice-button {
  padding: 0.75rem 0.5rem;
  border: 2px solid var(--outline);
  background: var(--outerbar);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 700;
  font-size: 1rem;
  color: var(--textcolor);
}

.dice-button:hover {
  background: var(--outline);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(251, 180, 87, 0.3);
}

.dice-button:active {
  transform: translateY(0);
}

.roll-history {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--lightgray);
}

.roll-history h4 {
  margin-bottom: 1rem;
  color: var(--heading1);
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 200px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.roll-item {
  padding: 0.5rem;
  background: var(--outerbar);
  border-radius: 6px;
  border-left: 4px solid var(--heading1);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9rem;
}

/* Scrollbar styling for history */
.history-list::-webkit-scrollbar {
  width: 6px;
}

.history-list::-webkit-scrollbar-track {
  background: var(--lightgray);
  border-radius: 3px;
}

.history-list::-webkit-scrollbar-thumb {
  background: var(--outline);
  border-radius: 3px;
}
`

export default (() => AnimatedDice) satisfies QuartzComponentConstructor