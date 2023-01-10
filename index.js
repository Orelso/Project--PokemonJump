var character = document.getElementById("character");
var pokemon = document.getElementById("pokemon");
var flyingPokemon = document.getElementById("flyingPokemon")
var counter = 0;
var index = 0;
const displayedPokemon = document.getElementById("displayed-pokemon");
gameOver = false
let jumpedPokemon = 0;

document.body.onkeyup = function(e) {
  if( e.keyCode === 32 ) {
    jump();
  }
}

const images = [
    'https://www.serebii.net/swordshield/pokemon/001.png',
    'https://www.serebii.net/swordshield/pokemon/002.png',
    'https://www.serebii.net/swordshield/pokemon/003.png',
    'https://www.serebii.net/swordshield/pokemon/004.png',
    'https://www.serebii.net/swordshield/pokemon/005.png',
    'https://www.serebii.net/swordshield/pokemon/006.png',
    'https://www.serebii.net/swordshield/pokemon/007.png',
    'https://www.serebii.net/swordshield/pokemon/008.png',
    'https://www.serebii.net/swordshield/pokemon/009.png'

  ];

  const usedImages = [];



  const flyingImages = [
    
    'https://www.serebii.net/swordshield/pokemon/146.png',
    'https://www.serebii.net/pokearth/sprites/pt/093.png',
    'https://www.serebii.net/xy/pokemon/144.png',
    'https://www.serebii.net/pokemon/art/145.png',
    'https://www.serebii.net/sunmoon/pokemon/018.png',
    'https://www.serebii.net/xy/pokemon/092.png'


  ]
  
// const nextImage = () => images[Math.floor(Math.random() * images.length)]; 

const nextImage = () => {
  if (usedImages.length === images.length) {
      clearInterval(checkDead);
      alert("You've already jumped all the Pokemon Great Job! Game over!");
      return;
  }
  let nextImage;
  do {
      nextImage = images[Math.floor(Math.random() * images.length)];
  } while (usedImages.includes(nextImage));
  usedImages.push(nextImage);
  return nextImage;
}

const nextFlyingImage =() => flyingImages[Math.floor(Math.random() * flyingImages.length)]; 

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
      document.getElementById("image-container").appendChild(newImage);
      
      jumpedPokemon++;
  }, 1000);
}



  
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(pokemon).getPropertyValue("left"));
    if(blockLeft < 60 && blockLeft > -60 && characterTop >= 260){
        pokemon.style.animation = "none";
        alert("GAME OVER! SCORE: "+ Math.floor(counter / 100) + "\n \nThe Pokemon will come slower now! Refresh the game for a FASTER challenge!");
        counter = 0;
        pokemon.style.animation = "block 1.3s infinite linear";
        // flyingPokemon.style.animation = "block 3s infinite linear"
        // score = Math.floor(counter / 100);
        // scoreDisplay.textContent = "Score: " + score;
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
    if(gameOver){
      clearInterval(checkDead);
      return;
  }
    if (usedImages.length === images.length) {
      clearInterval(checkDead);
      gameOver = true;
      alert("You've already jumped all the Pokemon Great Job! Game over!");
      return;
  } 
}, 10);

