import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isGameOver, setIsGameOver] =useState(false);

  // Buttons will have letter id-s:
  // A B C
  // D E F
  // G H I
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
  const winningPatterns = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"],
    ["A", "D", "G"],
    ["B", "E", "H"],
    ["C", "F", "I"],
    ["A", "E", "I"],
    ["C", "E", "G"]
  ]

  return (
    <>
      <h1>Tik Tak Toe</h1>
      <p>Next move: O/X</p>

      <div class="game-board">
        <button>Map 9 buttons</button>
      </div>

      <button>Reset Game</button>
    </>
  )
}

export default App
