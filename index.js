var character = document.getElementById("character");
var block = document.getElementById("block");
var flyingPokemon = document.getElementById("flyingPokemon")
var counter = 0;
var index = 0;

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

  const flyingImages = [
    'https://www.serebii.net/swordshield/pokemon/145.png',
    'https://www.serebii.net/swordshield/pokemon/146.png',
    "https://www.serebii.net/pokearth/sprites/pt/093.png"

  ]
  

const nextImage = () => images[Math.floor(Math.random() * images.length)]; 



  function nextFlyingImage() {
    if (index >= flyingImages.length) index = 0;
    return flyingImages[index];
  }

  function jump() {
    if (character.classList.contains("animate")) {
      return image[index]
    }
    
  

    character.classList.add("animate");
    setTimeout(function() {
      character.classList.remove("animate");
      block.style.content = `url(${nextImage()})`;
    //   flyingPokemon.style.content = `url(${nextFlyingImage()})`      
    }, 300);
  }




var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft >-20 && characterTop >= 130){
        block.style.animation = "none";
        alert("Game Over! Score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1.3s infinite linear";
        // flyingPokemon.style.animation = "block 3s infinite linear"

    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

