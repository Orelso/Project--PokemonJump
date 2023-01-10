import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<div lang="en" onclick="jump()">
<body>
    <h1>poop</h1>
    <div class="game">
        <div id="character"></div>
        <div className="myImg" id="pokemon"></div> 
        <div id="flyingPokemon"></div>
    </div>
    <showScoreBoard />
    <p>Score: <span id="scoreboard"></span></p>
    <p>Jumped Pokemon <span id="imageSpan"></span></p>
    <div id="game-container">
        <img id="displayed-pokemon" src=""/>
      </div>

      <div id="image-container"></div>
</body>
<script src="index.js"></script>
    </div>
    </div>
  );
}

export default App;
