import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

// Type declaration for the global anime object loaded via CDN
declare global {
  interface Window {
    anime: any
  }
}

const DiceRoller: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  const rollDice = (sides: number) => {
    // Check if anime.js is loaded (from CDN in Head.tsx)
    if (!window.anime) {
      console.error("Anime.js not loaded. Check the CDN script in quartz/components/Head.tsx")
      alert("Dice animations not loaded. Please refresh the page.")
      return
    }
    
    // Generate random result
    const result = Math.floor(Math.random() * sides) + 1
    const diceElement = document.getElementById('ttrpg-dice-result')
    const historyElement = document.getElementById('ttrpg-roll-history')
    
    if (!diceElement) return
    
    // Animate the dice roll
    window.anime({
      targets: diceElement,
      innerHTML: [0, result],
      round: 1,
      duration: 800,
      easing: 'easeOutElastic(1, .8)',
      begin: () => {
        // Add shaking effect during animation
        diceElement.classList.add('rolling')
      },
      complete: () => {
        diceElement.classList.remove('rolling')
        
        // Add to roll history
        if (historyElement) {
          const rollItem = document.createElement('div')
          rollItem.className = 'roll-history-item'
          
          // Use theme color or fallback to heading1 color
          const color = cfg?.theme?.colors?.lightMode?.heading1 || '#c14343'
          rollItem.innerHTML = `
            <span class="roll-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span class="roll-dice">d${sides}</span>
            <span class="roll-result" style="color: ${color}">${result}</span>
          `
          
          // Add to top of history
          historyElement.insertBefore(rollItem, historyElement.firstChild)
          
          // Keep only last 10 rolls
          while (historyElement.children.length > 10) {
            historyElement.removeChild(historyElement.lastChild!)
          }
          
          // Animate new history entry
          window.anime({
            targets: rollItem,
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 300
          })
        }
      }
    })
  }

  // Quick roll buttons for common dice
  const quickRolls = [
    { sides: 20, label: 'd20', desc: 'Attack/Skill' },
    { sides: 6, label: '3d6', desc: 'Ability Score' },
    { sides: 100, label: 'd%', desc: 'Percentile' },
    { sides: 4, label: 'd4', desc: 'Damage' },
    { sides: 8, label: 'd8', desc: 'Damage' },
    { sides: 10, label: 'd10', desc: 'Damage' }
  ]

  return (
    <div class={`ttrpg-dice-roller ${displayClass}`}>
      <h3 style={{ color: 'var(--heading1)' }}>🎲 TTRPG Dice Roller</h3>
      
      {/* Current Roll Display */}
      <div class="dice-result-container">
        <div id="ttrpg-dice-result" class="dice-result">0</div>
        <div class="dice-label">Click dice below to roll!</div>
      </div>
      
      {/* Standard Dice Set */}
      <div class="dice-section">
        <h4>Standard Dice</h4>
        <div class="dice-buttons">
          {[4, 6, 8, 10, 12, 20].map(sides => (
            <button 
              key={`d${sides}`}
              onClick={() => rollDice(sides)}
              class="dice-button"
              title={`Roll a d${sides}`}
            >
              d{sides}
            </button>
          ))}
        </div>
      </div>
      
      {/* Quick Roll Buttons */}
      <div class="dice-section">
        <h4>Quick Rolls</h4>
        <div class="quick-roll-buttons">
          {quickRolls.map(roll => (
            <button
              key={roll.label}
              onClick={() => rollDice(roll.sides)}
              class="quick-roll-button"
              title={roll.desc}
            >
              <span class="quick-roll-label">{roll.label}</span>
              <span class="quick-roll-desc">{roll.desc}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Roll History */}
      <div class="dice-section">
        <h4>Recent Rolls</h4>
        <div id="ttrpg-roll-history" class="roll-history">
          <div class="roll-history-empty">No rolls yet</div>
        </div>
        <button 
          onClick={() => document.getElementById('ttrpg-roll-history')!.innerHTML = '<div class="roll-history-empty">No rolls yet</div>'}
          class="clear-history-button"
        >
          Clear History
        </button>
      </div>
    </div>
  )
}

DiceRoller.css = `
.ttrpg-dice-roller {
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--note);
  border: 2px solid var(--outline);
  margin: 2rem 0;
  font-family: var(--bodyFont);
}

.ttrpg-dice-roller h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-align: center;
}

.ttrpg-dice-roller h4 {
  margin: 1rem 0 0.75rem 0;
  color: var(--secondary);
  font-size: 1rem;
  font-weight: 600;
}

/* Current Roll Display */
.dice-result-container {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--outerbar);
  border-radius: 8px;
}

.dice-result {
  font-size: 4rem;
  font-weight: 900;
  color: var(--heading1);
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', 'Consolas', monospace;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.dice-result.rolling {
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.dice-label {
  font-size: 0.9rem;
  color: var(--darkgray);
  margin-top: 0.5rem;
  font-style: italic;
}

/* Standard Dice Buttons */
.dice-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.dice-button {
  padding: 1rem 0.5rem;
  border: 2px solid var(--outline);
  background: var(--outerbar);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.2s ease;
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

/* Quick Roll Buttons */
.quick-roll-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.quick-roll-button {
  padding: 0.75rem 0.5rem;
  border: 2px solid var(--secondary);
  background: var(--outerbar);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.quick-roll-button:hover {
  background: var(--secondary);
  border-color: var(--tertiary);
}

.quick-roll-label {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--textcolor);
}

.quick-roll-desc {
  font-size: 0.8rem;
  color: var(--darkgray);
  margin-top: 0.25rem;
}

/* Roll History */
.roll-history {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: var(--light);
  border-radius: 6px;
  border: 1px solid var(--lightgray);
}

.roll-history-empty {
  text-align: center;
  color: var(--gray);
  font-style: italic;
  padding: 1rem;
}

.roll-history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  margin: 0.25rem 0;
  background: var(--outerbar);
  border-radius: 4px;
  border-left: 3px solid var(--heading1);
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.roll-history-item:nth-child(odd) {
  background: var(--light);
}

.roll-time {
  color: var(--gray);
  font-size: 0.8rem;
  min-width: 60px;
}

.roll-dice {
  font-weight: 600;
  color: var(--textcolor);
}

.roll-result {
  font-weight: 700;
  font-size: 1rem;
}

.clear-history-button {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--lightgray);
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  color: var(--gray);
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.clear-history-button:hover {
  background: var(--lightgray);
  color: var(--textcolor);
}

/* Responsive Design */
@media (max-width: 768px) {
  .dice-buttons {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .quick-roll-buttons {
    grid-template-columns: 1fr;
  }
  
  .dice-result {
    font-size: 3rem;
    min-height: 60px;
  }
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .dice-button, .quick-roll-button {
    background: var(--lightgray);
  }
  
  .roll-history {
    background: var(--lightgray);
  }
}
`

export default (() => DiceRoller) satisfies QuartzComponentConstructor