import { useState } from 'react'

function App() {
  const [jumpedPokemon, setJumpedPokemon] = useState(0)

  const handleClick = () => {
    setJumpedPokemon(jumpedPokemon + 1)
  }

  return (
    <div onClick={handleClick}>
      <h1>Pokemon Jump</h1>
      <div className="game">
        <div id="character"></div>
        <div className="myImg" id="pokemon"></div> 
        <div id="flyingPokemon"></div>
      </div>
      <span id="scoreboard"></span>
      <p>Jumped Pokemon: {jumpedPokemon}</p>
      <div id="game-container">
        <img id="displayed-pokemon" src={""} alt="jumpeed"/>
      </div>
      <div id="image-container"></div>
    </div>
  )
}

export default App
