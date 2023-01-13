import React, { useState } from 'react';

function App() {
  const [character, setCharacter] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [flyingPokemon, setFlyingPokemon] = useState(null);
  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(0);
  const [displayedPokemon, setDisplayedPokemon] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [jumpedPokemon, setJumpedPokemon] = useState(0);
  const [nameEntered, setNameEntered] = useState(false);
  const [usedImages, setUsedImages] = useState([]);

  const handleKeyUp = (e) => {
    if (e.keyCode === 32) {
      jump();
    }
  };


const images = [
    'https://www.serebii.net/swordshield/pokemon/001.png',
    'https://www.serebii.net/swordshield/pokemon/002.png',
    'https://www.serebii.net/swordshield/pokemon/003.png',
    'https://www.serebii.net/swordshield/pokemon/004.png',
    'https://www.serebii.net/swordshield/pokemon/005.png',
    'https://www.serebii.net/swordshield/pokemon/006.png',
    'https://www.serebii.net/swordshield/pokemon/007.png',
    'https://www.serebii.net/swordshield/pokemon/008.png',
    'https://www.serebii.net/swordshield/pokemon/009.png',
    'https://www.serebii.net/swordshield/pokemon/010.png',
    'https://www.serebii.net/swordshield/pokemon/011.png',
    'https://www.serebii.net/swordshield/pokemon/013.png',
    'https://www.serebii.net/swordshield/pokemon/014.png',
    'https://www.serebii.net/swordshield/pokemon/015.png',
    'https://www.serebii.net/swordshield/pokemon/016.png',
    'https://www.serebii.net/swordshield/pokemon/017.png',
    'https://www.serebii.net/swordshield/pokemon/018.png',
    'https://www.serebii.net/swordshield/pokemon/019.png',
    'https://www.serebii.net/swordshield/pokemon/020.png',
    'https://www.serebii.net/swordshield/pokemon/021.png',
    'https://www.serebii.net/swordshield/pokemon/022.png',
    'https://www.serebii.net/swordshield/pokemon/023.png',
    'https://www.serebii.net/swordshield/pokemon/024.png',
    'https://www.serebii.net/swordshield/pokemon/025.png',
    'https://www.serebii.net/swordshield/pokemon/026.png',
    'https://www.serebii.net/swordshield/pokemon/027.png',
    'https://www.serebii.net/swordshield/pokemon/028.png',
    'https://www.serebii.net/swordshield/pokemon/029.png',
    'https://www.serebii.net/swordshield/pokemon/031.png',
    'https://www.serebii.net/swordshield/pokemon/032.png',
    'https://www.serebii.net/swordshield/pokemon/033.png',
    'https://www.serebii.net/swordshield/pokemon/034.png',
    'https://www.serebii.net/swordshield/pokemon/035.png',
    'https://www.serebii.net/swordshield/pokemon/036.png',
    'https://www.serebii.net/swordshield/pokemon/037.png',
    'https://www.serebii.net/swordshield/pokemon/038.png',
    'https://www.serebii.net/swordshield/pokemon/039.png',
    'https://www.serebii.net/swordshield/pokemon/041.png',
    'https://www.serebii.net/swordshield/pokemon/042.png',
    'https://www.serebii.net/swordshield/pokemon/043.png',
    'https://www.serebii.net/swordshield/pokemon/044.png',
    'https://www.serebii.net/swordshield/pokemon/045.png',
    'https://www.serebii.net/swordshield/pokemon/046.png',
    'https://www.serebii.net/swordshield/pokemon/047.png',
    'https://www.serebii.net/swordshield/pokemon/048.png',
    'https://www.serebii.net/swordshield/pokemon/049.png',
    'https://www.serebii.net/swordshield/pokemon/050.png',
    'https://www.serebii.net/swordshield/pokemon/051.png',
    'https://www.serebii.net/swordshield/pokemon/052.png',
    'https://www.serebii.net/swordshield/pokemon/053.png',
    'https://www.serebii.net/swordshield/pokemon/054.png',
    'https://www.serebii.net/swordshield/pokemon/055.png',
    'https://www.serebii.net/swordshield/pokemon/056.png',
    'https://www.serebii.net/swordshield/pokemon/057.png',
    'https://www.serebii.net/swordshield/pokemon/058.png',
    'https://www.serebii.net/swordshield/pokemon/059.png',

  ];

  useEffect(() => {
    const checkDead = setInterval(() => {
      if (usedImages.length === images.length) {
        clearInterval(checkDead);
        setGameOver(true);
        if (!nameEntered) {
          setPlayerName(prompt("Game over! Enter your name:"));
          setNameEntered(true);
          saveScore(playerName, Math.floor(counter / 100));
        } else {
          saveScore("no name entered", Math.floor(counter / 100));
        }
        showScoreBoard();
      } else {
        setCounter(counter + 1);
      }
    }, 100);
    return () => clearInterval(checkDead);
  }, [counter, usedImages, nameEntered]);

  const nextImage = () => {
    if (usedImages.length === images.length) {
      clearInterval(checkDead);
      return;
    }
    let nextImage;
    do {
      nextImage = images[Math.floor(Math.random() * images.length)];
    } while (usedImages.includes(nextImage));
    setUsedImages([...usedImages, nextImage]);
    return nextImage;
}

const nextFlyingImage =() => flyingImages[Math.floor(Math.random() * flyingImages.length)];

const jump = () => {
if (character.classList.contains("animate")) {
return;
}
character.classList.add("animate");
setTimeout(() => {
character.classList.remove("animate");
const currentImage = nextImage();
pokemon.style.backgroundImage = `url(${currentImage})`;
flyingPokemon.style.backgroundImage = `url(${nextFlyingImage()})`;
displayedPokemon.src = currentImage;
const newImage = document.createElement("img");
newImage.src = currentImage;
newImage.loading = 'lazy';
document.getElementById("image-container").appendChild(newImage);

setJumpedPokemon(jumpedPokemon + 1);
}, 1000);
}

const saveScore = (name, score) => {
const scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) || [];
scoreBoard.push({ name, score });
localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
}

const showScoreBoard = () => {
// code to display the score board
}

return (
<div>
<div id="character" onClick={jump} className="character"></div>
<div id="pokemon"></div>
<div id="flyingPokemon"></div>
<div id="image-container"></div>
<img id="displayed-pokemon" src="" alt="" />
{gameOver && <div>Game Over!</div>}
</div>
);
}

export default App;