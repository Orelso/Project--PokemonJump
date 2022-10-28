var character = document.getElementById("character");
var pokemon = document.getElementById("pokemon");
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
    
    'https://www.serebii.net/swordshield/pokemon/146.png',
    'https://www.serebii.net/pokearth/sprites/pt/093.png',
    'https://www.serebii.net/xy/pokemon/144.png'

  ]
  

const nextImage = () => images[Math.floor(Math.random() * images.length)]; 



 const nextFlyingImage =() => flyingImages[Math.floor(Math.random() * flyingImages.length)]; 

  function jump() {
    if (character.classList.contains("animate")) {
      return image[index]
    }
    
 
  

    character.classList.add("animate");
    setTimeout(function() {
      character.classList.remove("animate");
      pokemon.style.content = `url(${nextImage()})`;
      flyingPokemon.style.content = `url(${nextFlyingImage()})`      
    }, 300);
  }




var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(pokemon).getPropertyValue("left"));
    if(blockLeft < 70 && blockLeft > -70 && characterTop >= 260){
        pokemon.style.animation = "none";
        alert("Game Over! Score: " + Math.floor(counter / 100));
        counter = 0;
        pokemon.style.animation = "block 1.3s infinite linear";
        flyingPokemon.style.animation = "block 3s infinite linear"

    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

