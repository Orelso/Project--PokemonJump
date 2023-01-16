var character = document.getElementById("character");
var pokemon = document.getElementById("pokemon");
var flyingPokemon = document.getElementById("flyingPokemon")
var counter = 0;
var index = 0;
const displayedPokemon = document.getElementById("displayed-pokemon");
gameOver = false
let score = 0;
let jumpedPokemon = 0;
let nameEntered = false;
const usedImages = [];
/* -------------------------------------------------------------------------------------------------------------------------------------------(Space bar click)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
document.body.onkeyup = function(e) {
  if( e.keyCode === 32 ) {
    jump();
  }
}
/* -------------------------------------------------------------------------------------------------------------------------------------------(Images)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
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
/* -------------------------------------------------------------------------------------------------------------------------------------------(comment)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  const flyingImages = [
    
    'https://www.serebii.net/swordshield/pokemon/146.png',
    'https://www.serebii.net/pokearth/sprites/pt/093.png',
    'https://www.serebii.net/xy/pokemon/144.png',
    'https://www.serebii.net/pokemon/art/145.png',
    'https://www.serebii.net/sunmoon/pokemon/018.png',
    'https://www.serebii.net/xy/pokemon/092.png'


  ]
/* -------------------------------------------------------------------------------------------------------------------------------------------(comment)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const nextImage = () => {
  if (usedImages.length === images.length) {
      clearInterval(checkDead);
      // alert("You've already jumped all the Pokemon Great Job! Game over!");
      return;
  }
  let nextImage;
  do {
      nextImage = images[Math.floor(Math.random() * images.length)];
  } while (usedImages.includes(nextImage));
  usedImages.push(nextImage);
  return nextImage;
}
/* -------------------------------------------------------------------------------------------------------------------------------------------(comment)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const nextFlyingImage =() => flyingImages[Math.floor(Math.random() * flyingImages.length)]; 
/* -------------------------------------------------------------------------------------------------------------------------------------------(jump)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function jump() {
  if (character.classList.contains("animate"))  {
      return;     
  }    
  character.classList.add("animate");
  setTimeout(function() {
      character.classList.remove("animate");
      const currentImage = nextImage();
      pokemon.style.content = `url(${currentImage})`;
      flyingPokemon.style.content = `url(${nextFlyingImage()})`;
      displayedPokemon.src = currentImage;

     const newImage = document.createElement("img");
      newImage.src = currentImage;
      newImage.loading = 'lazy';
      document.getElementById("image-container").appendChild(newImage);
      
      jumpedPokemon++;
  }, 1000);
}

/* -------------------------------------------------------------------------------------------------------------------------------------------(SAVESCORE)------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function saveScore(name, score) {
  const scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) || [];
  scoreBoard.push({ name, score });
  localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
}
  /* -------------------------------------------------------------------------------------------------------------------------------------------(check of Character is dead)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  var checkDead = setInterval(function() {
      let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      let blockLeft = parseInt(window.getComputedStyle(pokemon).getPropertyValue("left"));
      if(blockLeft < 60 && blockLeft > -60 && characterTop >= 260){
          pokemon.style.animation = "none";
          gameOver = true;
          if (!nameEntered) {
              // const playerName = prompt("Game over! Enter your name:");
              nameEntered = true;
              saveScore(playerName, Math.floor(counter/100));
          } else {
              saveScore("no name entered", Math.floor(counter/100));
          }
          showScoreBoard();
          // alert("Final score: " + Math.floor(counter/100) + "\n your score is saved!");
          counter = 0;
          pokemon.style.animation = "block 1.1s infinite linear";
      } else {
          counter++;
      }
      if (usedImages.length === images.length) {
        clearInterval(checkDead);
        gameOver = true;
        if (!nameEntered) {
              // const playerName = prompt("Game over! Enter your name:");
              nameEntered = true;
              saveScore(playerName, Math.floor(counter/100));
          } else {
            promptForName();
              saveScore("no name entered", Math.floor(counter/100));
          }
        showScoreBoard();
        // alert("You've already jumped all the Pokemon Great Job! Final score: " + Math.floor(counter/100) + "\n your score is saved!");
        return;
      } 
  }, 10);

  
  /* -------------------------------------------------------------------------------------------------------------------------------------------()------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const table = document.createElement("table");
table.classList.add("scoreboard");
table.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Score</th>
    </tr>
`;
document.getElementById("scoreboard").appendChild(table);

function showScoreBoard() {
  // get the scoreBoard data
  let scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) || [];
  // sort the scoreBoard data by score in descending order
  scoreBoard.sort((a, b) => b.score - a.score);
  // take only the top 10 scores
  scoreBoard = scoreBoard.slice(0, 10);
  // update the content of the table
  table.innerHTML = `
      <tr>
          <th>Name</th>
          <th>Score</th>
      </tr>
  `;
  scoreBoard.forEach(function(player) {
      table.innerHTML += `
          <tr>
              <td>${player.name}</td>
              <td>${player.score}</td>
          </tr>
      `;
  });
}


