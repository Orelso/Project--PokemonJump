var character = document.getElementById("character");
var pokemon = document.getElementById("pokemon");
var flyingPokemon = document.getElementById("flyingPokemon")
var counter = 0;
var index = 0;
let score = 0;
let jumpedPokemon = 0;
let nameEntered = false;
const usedImages = [];


/* -------------------------------------------------------------------------------------------------------------------------------------------(Space bar click)------------------------------------------------------------------------------------------------------------------------------------------------------------*/

document.body.onkeyup = function(e) {
  if (e.keyCode === 32) {
    jump();
  } else if (e.keyCode === 49) { // check if number 1 is pressed
    paused = !paused; // toggle pause state
    if (paused) {
      clearInterval(checkDead); // pause the game
    } else {
      checkDead = setInterval(gameLoop, 10); // resume the game
    }
  }
}



/* -------------------------------------------------------------------------------------------------------------------------------------------(Images)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const images = [...Array(151).keys()].map((_, i) => `https://www.serebii.net/swordshield/pokemon/${String(i+1).padStart(3, '0')}.png`)

/* -------------------------------------------------------------------------------------------------------------------------------------------(Flying pokemon)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  const flyingImages = [
    
    'https://www.serebii.net/swordshield/pokemon/146.png',
    'https://www.serebii.net/pokearth/sprites/pt/093.png',
    'https://www.serebii.net/xy/pokemon/144.png',
    'https://www.serebii.net/pokemon/art/145.png',
    'https://www.serebii.net/sunmoon/pokemon/018.png',
    'https://www.serebii.net/xy/pokemon/092.png'


  ]
  

/* -------------------------------------------------------------------------------------------------------------------------------------------(Next pokemon Image)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const nextImage = () => {
  if (usedImages.length === images.length) {
      return;
  }
  let nextImage;
  do {
      nextImage = images[Math.floor(Math.random() * images.length)];
  } while (usedImages.includes(nextImage));
  usedImages.push(nextImage);
  return nextImage;
}
/* -------------------------------------------------------------------------------------------------------------------------------------------(Next flying pokemon Image)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const nextFlyingImage =() => flyingImages[Math.floor(Math.random() * flyingImages.length)]; 
/* -------------------------------------------------------------------------------------------------------------------------------------------(jump)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function jump() {
  if (character.classList.contains("animate")) {
    return;
  }
  character.classList.add("animate");
  setTimeout(function() {
    character.classList.remove("animate");
    setTimeout(function() {
      const currentImage = nextImage();
      pokemon.style.content = `url(${currentImage})`;
      flyingPokemon.style.content = `url(${nextFlyingImage()})`;
      const newImage = document.createElement("img");
      newImage.src = currentImage;
      newImage.loading = "lazy";
      document.getElementById("image-container").appendChild(newImage);
      jumpedPokemon++;
    }, 1100);
  }, 1000);
}


/* -------------------------------------------------------------------------------------------------------------------------------------------(SAVESCORE)------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function saveScore(name, score) {
  const scoreBoard = JSON.parse(localStorage.getItem("scoreBoard")) || [];
  scoreBoard.push({ name, score });
  localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
  
  
}
  /* -------------------------------------------------------------------------------------------------------------------------------------------(check if Character is dead)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  
  
  var checkDead = setInterval(function() {
    showScoreBoard()
      let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      let blockLeft = parseInt(window.getComputedStyle(pokemon).getPropertyValue("left"));
      if(blockLeft < 60 && blockLeft > -60 && characterTop >= 260){
          pokemon.style.animation = "none";
          if (!nameEntered) {
              const playerName = prompt("Game over! Enter your name:");
              nameEntered = true;
              saveScore(playerName, Math.floor(counter/100));
          } else {
              saveScore("no name entered", Math.floor(counter/100));
          }
          console.log(window.location.reload())
          window.location.reload();
          console.log(window.location.reload())

      } else {
          counter++;
          document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);

      }
      if (usedImages.length === images.length) {
        clearInterval(checkDead);
        if (!nameEntered) {
              const playerName = prompt("Game over! Enter your name:");
              nameEntered = true;
              saveScore(playerName, Math.floor(counter/100));
          } else {
            promptForName();
              saveScore("no name entered", Math.floor(counter/100));
          }
        showScoreBoard();
        alert("You've already jumped all the Pokemon Great Job! Final score: " + Math.floor(counter/100) + "\n your score is saved!");
        return;
      } 
  }, 10);

  
  /* -------------------------------------------------------------------------------------------------------------------------------------------(Scoreboard)------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const table = document.createElement("table");
table.classList.add("scoreboard");
// table.innerHTML = `
//     <h2>Score Board</21>
// `;
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
          <th><u>Name</u></th>
          <th><u>Score</u></th>
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


