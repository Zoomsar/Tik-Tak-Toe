import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false);
  const [letterPattern, setLetterPattern] = useState([]);

  const [letters, setLetters] = useState(["A", "B", "C", "D", "E", "F", "G", "H", "I"])
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

  function containsWinningPattern(currentLettersArray, winningPattern) {
    return winningPattern.some(array => array.every(letter => currentLettersArray.includes(letter)))
  }

  function handleClick(letter) {
    if (letterPattern.includes(letter)) {
      return
    }

    setLetterPattern(prevPattern => [...prevPattern, letter])
  }

  useEffect(() => {
      console.log(letterPattern)

      if (containsWinningPattern(letterPattern, winningPatterns)) {
        console.log("Game over!")
        // temp
        setLetters(prevLetters => prevLetters.map(letter =>
          letter = ":)"
        ))

      }
  }, [letterPattern])

  return (
    <>
      <h1>Tik Tak Toe</h1>
      <p>Next move: O/X</p>

      <div className="game-board">
        {/*<button>Map 9 buttons</button>*/}
        {letters.map(letter => <button className="butts" id={letter} onClick={() => handleClick(letter)}>{letter}</button>)}
      </div>

      <div className="reset">
        <button>Reset Game</button>
      </div>
    </>
  )
}

export default App
