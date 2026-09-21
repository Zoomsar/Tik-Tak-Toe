import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [xLetterPattern, setXLetterPattern] = useState([]);
  const [oLetterPattern, setOLetterPattern] = useState([]);
  const [nextChar, setNextChar] = useState("X");
  const [letters, setLetters] = useState(["", "", "", "", "", "", "", "", ""])
  const [message, setMessage] = useState("Lol");

  const indexToLetterMap = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
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

  function handleClick(index) {
    if (letters[index] || isGameOver) {
      return
    }

    const newLetterPattern = [...letters];
    newLetterPattern[index] = nextChar;
    const currentLetter = indexToLetterMap[index];

    nextChar === "X" ? setXLetterPattern(prevPattern => [...prevPattern, currentLetter]) : setOLetterPattern(prevPattern => [...prevPattern, currentLetter]);
    setLetters(newLetterPattern)
    setNextChar(prevChar => prevChar === "X" ? "O" : "X")
  }

  function resetGame() {
    setIsGameOver(false);
    setLetters(Array(9).fill(""));
    setXLetterPattern([]);
    setOLetterPattern([]);
    setNextChar("X");
  }

  useEffect(() => {
      if (containsWinningPattern(xLetterPattern, winningPatterns) || containsWinningPattern(oLetterPattern, winningPatterns)) {
        setIsGameOver(true);
        setMessage(containsWinningPattern(xLetterPattern, winningPatterns) ? "X wins!" : "O wins!")
      } else if (xLetterPattern.length > 4) {
        setIsGameOver(true)
        setMessage("Draw!")
      }
  }, [xLetterPattern, oLetterPattern])

  return (
    <>
      <h1>Tik Tak Toe</h1>
      <p>Next move: {nextChar}</p>
      {isGameOver && <p><strong>{message}</strong></p>}

      <div className="game-board">
        {letters.map((letter, index) => <button className="butts" key={index} disabled={isGameOver} onClick={() => handleClick(index)}>{letter}</button>)}  
      </div>

      <div className="reset">
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </>
  )
}

export default App
