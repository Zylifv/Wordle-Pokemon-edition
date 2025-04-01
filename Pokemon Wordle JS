const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const guessTally = document.getElementById("guessTally");
let resetButton = document.getElementById("reset-btn");
let currentGuess = document.getElementById("currentGuess");
let maxGuesses = 4;
let remainGuesses = maxGuesses;
let guessTallyTotal = document.getElementById("guessTallyTotal");
const typeIcons = document.querySelectorAll('.types');
const iconsList = ["Normal", "Fire", "Fighting", "Water", "Flying", "Grass", "Poison", "Electric", "Ground", "Psychic", "Rock", "Ice", "Bug", "Dragon", "Ghost", "None", "Steel", "Fairy"];
const options = [
  {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    height: 0.7,
    weight: 6.9
    },
  {
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    height: 1.0,
    weight: 13.0
  },
  {
    name: "Venusaur",
    types: ["Grass", "Poison"],
    height: 2.0,
    weight: 100.0
  },
  {
    name: "Charmander",
    types: ["Fire", "None"],
    height: 0.6,
    weight: 8.5
  },
  {
    name: "Charmeleon",
    types: ["Fire", "None"],
    height: 1.1,
    weight: 19.0
  },
  {
    name: "Charizard",
    types: ["Fire", "Flying"],
    height: 1.7,
    weight: 90.5
  },
  {
    name: "Squirtle",
    types: ["Water", "None"],
    height: 0.5,
    weight: 9.0
  },
  {
    name: "Wartortle",
    types: ["Water", "None"],
    height: 1.0,
    weight: 22.5
  },
  {
    name: "Blastoise",
    types: ["Water", "None"],
    height: 1.6,
    weight: 85.5
  },
  {
    name: "Caterpie",
    types: ["Bug", "None"],
    height: 0.3,
    weight: 2.9
  },
  {
    name: "Metapod",
    types: ["Bug", "None"],
    height: 0.7,
    weight: 9.9
  },
  {
    name: "Butterfree",
    types: ["Bug", "Flying"],
    height: 1.1,
    weight: 32.0
  },
  {
    name: "Weedle",
    types: ["Bug", "Poison"],
    height: 0.3,
    weight: 3.2
  },
  {
    name: "Kakuna",
    types: ["Bug", "Poison"],
    height: 0.6,
    weight: 10.0
  },
  {
    name: "Beedrill",
    types: ["Bug", "Poison"],
    height: 1.0,
    weight: 29.5
  },
  {
    name: "Pidgey",
    types: ["Normal", "Flying"],
    height: 0.3,
    weight: 1.8
    },
  {
    name: "Pidgeotto",
    types: ["Normal", "Flying"],
    height: 1.1,
    weight: 30.0
    },
  {
    name: "Pidgeot",
    types: ["Normal", "Flying"],
    height: 1.5,
    weight: 39.5
    },
  {
    name: "Rattata",
    types: ["Normal", "None"],
    height: 0.3,
    weight: 3.5
  },
  {
    name: "Raticate",
    types: ["Normal", "None"],
    height: 0.7,
    weight: 18.5
  },
  {
    name: "Spearow",
    types: ["Normal", "Flying"],
    height: 0.3,
    weight: 2.0
  },
  {
    name: "Fearow",
    types: ["Normal", "Flying"],
    height: 1.2,
    weight: 38.0
  },
  {
    name: "Ekans",
    types: ["Poison", "None"],
    height: 2.0,
    weight: 6.9
  },
  {
    name: "Arbok",
    types: ["Poison", "None"],
    height: 3.5,
    weight: 65.0
  },
  {
    name: "Pikachu",
    types: ["Electric", "None"],
    height: 0.4,
    weight: 6.0
  },
  {
    name: "Raichu",
    types: ["Electric", "None"],
    height: 0.8,
    weight: 30.0
  },
  {
    name: "Sandshrew",
    types: ["Ground", "None"],
    height: 0.6,
    weight: 12.0
  },
  {
    name: "Sandslash",
    types: ["Ground", "None"],
    height: 1.0,
    weight: 29.5
  },
  {
    name: "Nidoran♀",
    types: ["Poison", "None"],
    height: 0.4,
    weight: 7.0
  },
  {
    name: "Nidorina",
    types: ["Poison", "None"],
    height: 0.8,
    weight: 20.0
  },
  {
    name: "Nidoqueen",
    types: ["Poison", "Ground"],
    height: 1.3,
    weight: 60.0
  },
  {
    name: "Nidoran♂",
    types: ["Poison", "None"],
    height: 0.5,
    weight: 9.0
  },
  {
    name: "Nidorino",
    types: ["Poison", "None"],
    height: 0.9,
    weight: 19.5
  },
  {
    name: "Nidoking",
    types: ["Poison", "Ground"],
    height: 1.4,
    weight: 62.0
  },
  {
    name: "Clefairy",
    types: ["Fairy", "None"],
    height: 0.6,
    weight: 7.5
  },
  {
    name: "Clefable",
    types: ["Fairy", "None"],
    height: 1.3,
    weight: 40.0
  },
  {
    name: "Vulpix",
    types: ["Fire", "None"],
    height: 0.6,
    weight: 9.9
  },
  {
    name: "Ninetales",
    types: ["Fire", "None"],
    height: 1.1,
    weight: 19.9
  },
  {
    name: "Jigglypuff",
    types: ["Normal", "Fairy"],
    height: 0.5,
    weight: 5.5
  },
  {
    name: "Wigglytuff",
    types: ["Normal", "Fairy"],
    height: 1.0,
    weight: 12.0
  }, 
  {
    name: "Zubat",
    types: ["Poison", "Flying"],
    height: 0.8,
    weight: 7.5
  },
  {
    name: "Golbat",
    types: ["Poison", "Flying"],
    height: 1.6,
    weight: 55.0
  },
  {
    name: "Oddish",
    types: ["Grass", "Poison"],
    height: 0.5,
    weight: 5.4
  },
  {
    name: "Gloom",
    types: ["Grass", "Poison"],
    height: 0.8,
    weight: 8.6
  },
  {
    name: "Vileplume",
    types: ["Grass", "Poison"],
    height: 1.2,
    weight: 18.6
  },
  {
    name: "Paras",
    types: ["Bug", "Grass"],
    height: 0.3,
    weight: 5.4
  },
  {
    name: "Parasect",
    types: ["Bug", "Grass"],
    height: 1.0,
    weight: 29.5
  },
  {
    name: "Venonat",
    types: ["Bug", "Poison"],
    height: 1.0,
    weight: 30.0
  },
  {
    name: "Venomoth",
    types: ["Bug", "Poison"],
    height: 1.5,
    weight: 12.5
  },
  {
    name: "Diglett",
    types: ["Ground", "None"],
    height: 0.2,
    weight: 0.8
  },
  {
    name: "Dugtrio",
    types: ["Ground", "None"],
    height: 0.7,
    weight: 33.3
  },
  {
    name: "Meowth",
    types: ["Normal", "None"],
    height: 0.4,
    weight: 4.2
  },
  {
    name: "Persian",
    types: ["Normal", "None"],
    height: 1.0,
    weight: 32.0
  },
  {
    name: "Psyduck",
    types: ["Water", "None"],
    height: 0.8,
    weight: 19.6
  },
  {
    name: "Golduck",
    types: ["Water", "None"],
    height: 1.7,
    weight: 76.6
  },
  {
    name: "Mankey",
    types: ["Fighting", "None"],
    height: 0.5,
    weight: 28.0
  },
  {
    name: "Primeape",
    types: ["Fighting", "None"],
    height: 1.0,
    weight: 32.0
  },
  {
    name: "Growlithe",
    types: ["Fire", "None"],
    height: 0.7,
    weight: 19.0
  },
  {
    name: "Arcanine",
    types: ["Fire", "None"],
    height: 1.9,
    weight: 155.0
  },
  {
    name: "Poliwag",
    types: ["Water", "none"],
    height: 0.6,
    weight: 12.4
  },
  {
    name: "Poliwhirl",
    types: ["Water", "None"],
    height: 1.0,
    weight: 20.0
  },
  {
    name: "Poliwrath",
    types: ["Water", "Fighting"],
    height: 1.3,
    weight: 54.0
  },
  
 {
    name: "Abra",
    types: ["Psychic", "None"],
    height: 0.9,
    weight: 19.5
  },
  {
    name: "Kadabra",
    types: ["Psychic", "None"],
    height: 1.3,
    weight: 56.5
  },
  {
    name: "Alakazam",
    types: ["Psychic", "None"],
    height: 1.5,
    weight: 48.0
  },
  {
    name: "Machop",
    types: ["Fighting", "None"],
    height: 0.8,
    weight: 19.5
  },
  {
    name: "Machoke",
    types: ["Fighting", "None"],
    height: 1.5,
    weight: 70.5
  },
  {
    name: "Machamp",
    types: ["Fighting", "None"],
    height: 1.6,
    weight: 130.0
  },
  {
    name: "Bellsprout",
    types: ["Grass", "Poison"],
    height: 0.7,
    weight: 4.0
  },
  {
    name: "Weepinbell",
    types: ["Grass", "Poison"],
    height: 1.0,
    weight: 6.4
  },
  {
    name: "Victreebel",
    types: ["Grass", "Poison"],
    height: 1.7,
    weight: 15.5
  },
  {
    name: "Tentacool",
    types: ["Water", "Poison"],
    height: 0.9,
    weight: 45.5
  },
  {
    name: "Tentacruel",
    types: ["Water", "Poison"],
    height: 1.6,
    weight: 55.0
  },
  {
    name: "Geodude",
    types: ["Rock", "Ground"],
    height: 0.4,
    weight: 20.0
  },
  {
    name: "Graveler",
    types: ["Rock", "Ground"],
    height: 1.0,
    weight: 105.0
  },
  {
    name: "Golem",
    types: ["Rock", "Ground"],
    height: 1.4,
    weight: 300.0
  },
  {
    name: "Ponyta",
    types: ["Fire", "None"],
    height: 1.0,
    weight: 30.0
  },
  {
    name: "Rapidash",
    types: ["Fire", "None"],
    height: 1.7,
    weight: 95.0
  },
  {
    name: "Slowpoke",
    types: ["Water", "Psychic"],
    height: 1.2,
    weight: 36.0
  },
  {
    name: "Slowbro",
    types: ["Water", "Psychic"],
    height: 1.6,
    weight: 78.5
  },
  {
    name: "Magnemite",
    types: ["Electric", "Steel"],
    height: 0.3,
    weight: 6.0
  },
  {
    name: "Magneton",
    types: ["Electric", "Steel"],
    height: 1.0,
    weight: 60.0
  },
  {
    name: "Farfetch'd",
    types: ["Normal", "Flying"],
    height: 0.8,
    weight: 15.0
  },
  {
    name: "Doduo",
    types: ["Normal", "Flying"],
    height: 1.4,
    weight: 39.2
  },
  {
    name: "Dodrio",
    types: ["Normal", "Flying"],
    height: 1.8,
    weight: 85.2
  },
  {
    name: "Seel",
    types: ["Water", "None"],
    height: 1.1,
    weight: 90.0
  },
  {
    name: "Dewgong",
    types: ["Water", "Ice"],
    height: 1.7,
    weight: 120.0
  },
  {
    name: "Grimer",
    types: ["Poison", "None"],
    height: 0.9,
    weight: 30.0
  },
  {
    name: "Muk",
    types: ["Poison", "None"],
    height: 1.2,
    weight: 30.0
  },
  {
    name: "Shellder",
    types: ["Water", "None"],
    height: 0.3,
    weight: 4.0
  },
  {
    name: "Cloyster",
    types: ["Water", "Ice"],
    height: 1.5,
    weight: 132.5
  },
  {
    name: "Gastly",
    types: ["Ghost", "Poison"],
    height: 1.3,
    weight: 0.1
  },
  {
    name: "Haunter",
    types: ["Ghost", "Poison"],
    height: 1.6,
    weight: 0.1
  },
  {
    name: "Gengar",
    types: ["Ghost", "Poison"],
    height: 1.5,
    weight: 40.5
  },
  {
    name: "Onix",
    types: ["Rock", "Ground"],
    height: 8.8,
    weight: 210.0
  },
  {
    name: "Drowzee",
    types: ["Psychic", "None"],
    height: 1.0,
    weight: 32.4
  },
  {
    name: "Hypno",
    types: ["Psychic", "None"],
    height: 1.6,
    weight: 75.6
  },
  {
    name: "Krabby",
    types: ["Water", "None"],
    height: 0.4,
    weight: 6.5
  },
  {
    name: "Kingler",
    types: ["Water", "None"],
    height: 1.3,
    weight: 60.0
  },
  {
    name: "Voltorb",
    types: ["Electric", "None"],
    height: 0.5,
    weight: 10.4
  },
  {
    name: "Electrode",
    types: ["Electric", "None"],
    height: 1.2,
    weight: 66.6
  },
  {
    name: "Exeggcute",
    types: ["Grass", "Psychic"],
    height: 0.4,
    weight: 2.5
  },
  {
    name: "Exeggutor",
    types: ["Grass", "Psychic"],
    height: 2.0,
    weight: 120.0
  },
  {
    name: "Cubone",
    types: ["Ground", "None"],
    height: 0.4,
    weight: 6.5
  },
  {
    name: "Marowak",
    types: ["Ground", "None"],
    height: 1.0,
    weight: 45.0
  },
  {
    name: "Hitmonlee",
    types: ["Fighting", "None"],
    height: 1.5,
    weight: 49.8
  },
  {
    name: "Hitmonchan",
    types: ["Fighting", "None"],
    height: 1.4,
    weight: 50.2
  },
  {
    name: "Lickitung",
    types: ["Normal", "None"],
    height: 1.2,
    weight: 65.5
  },
  {
    name: "Koffing",
    types: ["Poison", "None"],
    height: 0.6,
    weight: 1.0
  },
  {
    name: "Weezing",
    types: ["Poison", "None"],
    height: 1.2,
    weight: 9.5
  },
  {
    name: "Rhyhorn",
    types: ["Ground", "Rock"],
    height: 1.0,
    weight: 115.0
  },
  {
    name: "Rhydon",
    types: ["Ground", "Rock"],
    height: 1.9,
    weight: 120.0
  },
  {
    name: "Chansey",
    types: ["Normal", "None"],
    height: 1.1,
    weight: 34.6
  },
  {
    name: "Tangela",
    types: ["Grass", "None"],
    height: 1.0,
    weight: 35.0
  },
  {
    name: "Kangaskhan",
    types: ["Normal", "None"],
    height: 2.2,
    weight: 80.0
  },
  {
    name: "Horsea",
    types: ["Water", "None"],
    height: 0.4,
    weight: 8.0
  },{
    name: "Seadra",
    types: ["Water", "None"],
    height: 1.2,
    weight: 25.0
  },
  {
    name: "Goldeen",
    types: ["Water", "None"],
    height: 0.6,
    weight: 15.0
  },
  {
    name: "Seaking",
    types: ["Water", "None"],
    height: 1.3,
    weight: 39.0
  },
  {
    name: "Staryu",
    types: ["Water", "None"],
    height: 0.8,
    weight: 34.5
  },
  {
    name: "Starmie",
    types: ["Water", "Psychic"],
    height: 1.1,
    weight: 80.0
  },
  {
    name: "Mr Mime",
    types: ["Psychic", "Fairy"],
    height: 1.3,
    weight: 54.5
  },
  {
    name: "Scyther",
    types: ["Bug", "Flying"],
    height: 1.5,
    weight: 56.0
  },
  {
    name: "Jynx",
    types: ["Ice", "Psychic"],
    height: 1.4,
    weight: 40.6
  },
  {
    name: "Electabuzz",
    types: ["Electric", "None"],
    height: 1.1,
    weight: 30.0
  },
  {
    name: "Magmar",
    types: ["Fire", "None"],
    height: 1.3,
    weight: 44.5
  },
  {
    name: "Pinsir",
    types: ["Bug", "None"],
    height: 1.5,
    weight: 55.0
  },
  {
    name: "Tauros",
    types: ["Normal", "None"],
    height: 1.4,
    weight: 88.4
  },
  {
    name: "Magikarp",
    types: ["Water", "None"],
    height: 0.9,
    weight: 10.0
  },
  {
    name: "Gyarados",
    types: ["Water", "Flying"],
    height: 6.5,
    weight: 235.0
  },
  {
    name: "Lapras",
    types: ["Water", "Ice"],
    height: 2.5,
    weight: 220.0
  },
  {
    name: "Ditto",
    types: ["Normal", "None"],
    height: 0.3,
    weight: 4.0
  },
  {
    name: "Eevee",
    types: ["Normal", "None"],
    height: 0.3,
    weight: 6.5
  },
  {
    name: "Vaporeon",
    types: ["Water", "None"],
    height: 1.0,
    weight: 29.0
  },
  {
    name: "Jolteon",
    types: ["Electric", "None"],
    height: 0.8,
    weight: 24.5
  },
  {
    name: "Flareon",
    types: ["Fire", "None"],
    height: 0.9,
    weight: 25.0
  },
  {
    name: "Porygon",
    types: ["Normal", "None"],
    height: 0.8,
    weight: 36.5
  },
  {
    name: "Omanyte",
    types: ["Rock", "Water"],
    height: 0.4,
    weight: 7.5
  },
  {
    name: "Omastar",
    types: ["Rock", "Water"],
    height: 1.0,
    weight: 35.0
  },
  {
    name: "Kabuto",
    types: ["Rock", "Water"],
    height: 0.5,
    weight: 11.5
  },
  {
    name: "Kabutops",
    types: ["Rock", "Water"],
    height: 1.3,
    weight: 40.5
  },
  {
    name: "Aerodactyl",
    types: ["Rock", "Flying"],
    height: 1.8,
    weight: 59.0
  },
  {
    name: "Snorlax",
    types: ["Normal", "None"],
    height: 2.1,
    weight: 460.0
  },
  {
    name: "Articuno",
    types: ["Ice", "Flying"],
    height: 1.7,
    weight: 55.4
  },
  {
    name: "Zapdos",
    types: ["Electric", "Flying"],
    height: 1.6,
    weight: 52.6
  },
  {
    name: "Moltres",
    types: ["Fire", "Flying"],
    height: 2.0,
    weight: 60.0
  },
  {
    name: "Dratini",
    types: ["Dragon", "None"],
    height: 1.8,
    weight: 3.3
  },
  {
    name: "Dragonair",
    types: ["Dragon", "None"],
    height: 4.0,
    weight: 16.5
  },
  {
    name: "Dragonite",
    types: ["Dragon", "Flying"],
    height: 2.2,
    weight: 210.0
  },
  {
    name: "Mewtwo",
    types: ["Psychic", "None"],
    height: 2.0,
    weight: 122.0
  },
  {
    name: "Mew",
    types: ["Psychic", "None"],
    height: 0.4,
    weight: 4.0
  }];
const typeOneImg = document.getElementById("type-1");

/*names let allows names only to be pulled from the options list and compressed into their own names array to be used in the predict text box as well as the input.value answer check.*/

let names = [...new Set(options.flatMap((o) => [o.name]))]
let pType1 = [...new Set(options.flatMap((o) => [o.types[0]]))]
let pType2 = [...new Set(options.flatMap((o) => [o.types[1]]))]
//flatMap takes the array object, in this case options.value and puts all the name information and puts it into a singular array. This then allows me to pull from particular sections for ease.

function getRandomResult() {
  let poke = options[Math.floor(Math.random() * options.length)];
    return poke;
}

function newPoke() {
  return getRandomResult().name;
}


/*seperated the randomResult from a function to allow for stats to be pulled at any time, such as height, types etc...*/
let currentPokemon = getRandomResult();
let currentPokemonName = currentPokemon.name;
let activeType1 = currentPokemon.types[0];
let activeType2 = currentPokemon.types[1];
let activeHeight = currentPokemon.height;
let activeWeight = currentPokemon.weight;
let currentType1 = document.getElementById("type-1");
let currentType2 = document.getElementById("type-2");
let currentHeight = document.getElementById("height");
let currentWeight = document.getElementById("weight");
let currentGuessName = `${textInput.value}`;


checkButton.addEventListener("click",() => {
  const regex = /[!@#$%^&*()',.?":{}|<>0-9\s]/ig;
  let textArray = textInput.value.replace(regex,"");
  let textArr = textArray.charAt(0).toUpperCase() + textArray.slice(1);
  
   if (textArr === "") {
      alert("Please input a value")  //stops null values
       } else if (textArr === currentPokemonName) {
          result.innerText = `${textArr} is correct! You win!`;
//win condition met
     currentType1.innerText += currentPokemon.types[0] + " " + "(✓)";
     currentType2.innerText += currentPokemon.types[1] + " " + "(✓)";
     currentHeight.innerText += currentPokemon.height + `m`;
     currentWeight.innerText += currentPokemon.weight + `kg`;
     for (let i = 0; i < iconsList.length; i++) {
      if (activeType1 !== iconsList[i] && activeType2 !== iconsList[i]) {
        typeIcons[i].style.backgroundColor = "Grey";
          } else if (activeType1 === iconsList[i] && activeType2 === iconsList[i]) {
            iconsList[currentPokemon.types[0]].style.backgroundColor != "Grey";
            iconsList[currentPokemon.types[1]].style.backgroundColor != "Grey";
      } 
     }
     //will display correct attributes on correct guess.
     document.getElementById("check-btn").disabled = true;
      } else if (remainGuesses === 0) {
         result.innerText = "You have no remaining guesses, you lose... The correct answer was" + " " + currentPokemonName + "!";
 //game over
    document.getElementById("maxGuesses").innerHTML = 0;
     document.getElementById("check-btn").disabled = true;
      currentType1.innerText += type1 + '\n';
        currentType2.innerText += type2 + '\n';
          currentHeight.innerText += height + '\n';
            currentWeight.innerText += weight + '\n';//stops from repeat tries

   } else if (remainGuesses > 0 && textArr !== currentPokemonName) //will update based on incorrect guess 
   { 
  for (let i = 0; i < names.length; i++) {
     if (textArr === names[i] && `${textArr}` !== currentPokemonName) {
     //checks for an incorrct guess match
      let type1 = options[i].types[0] == activeType1 ? options[i].types[0] + " " + "(✓)"
      : options[i].types[0] == activeType2 ? options[i].types[0] + " "  + "(→)"
      : options[i].types[0] !== activeType1 ? options[i].types[0] + " " + "(X)" 
      : options[i].types[0] !== activeType2 ? options[i].types[0] + " " + "(X)"
      : "(X)";
      let type2 = options[i].types[1] == activeType2 ? options[i].types[1] + " " + "(✓)"
      : options[i].types[1] == activeType1 ? options[i].types[1] + " " + "(←)"
      : options[i].types[1] !== activeType2 ? options[i].types[1] + " " + "(X)"
      : options[i].types[1] !== activeType1 ? options[i].types[1] + " " + "(X)"
      : "(X)";
      let height = options[i].height > currentPokemon.height ? options[i].height + "m " + "(↓)" 
      : options[i].height < currentPokemon.height ? options[i].height + "m " + "(↑)"
      : options[i].height === currentPokemon.height ? options[i].height + "m " + "(✓)" : options[i].height + "m " + "(X)";
      let weight = options[i].weight > currentPokemon.weight ? options[i].weight + "kg " + "(↓)"
      : options[i].weight < currentPokemon.weight ? options[i].weight + "kg " + "(↑)" : options[i].weight === currentPokemon.weight ? options[i].weight + "kg " + "(✓)" : options[i].weight  + "kg " + "(X)";
      /*dont know how to implement... maybe switch/case? *SOLVED*, i used ternary conditional operators to make conditions for each outcome.*/
       
       //will update each of the categories depending on whether or not that particular guess is right or not.
      document.getElementById("type-1").hidden = false;
      document.getElementById("type-2").hidden = false;
      document.getElementById("height").hidden = false;
      document.getElementById("weight").hidden = false;
      currentGuess.innerText += `${textInput.value}` + '\n';
      currentType1.innerText += type1 + '\n';
      currentType2.innerText += type2 + '\n';
      currentHeight.innerText += height + '\n';
      currentWeight.innerText += weight + '\n';

     
      for (let i = 0; i < iconsList.length; i++) {
        let currentPokemonGuess = options.find(({name}) => name === textArr);
        let currentPokemonGuessInfo = JSON.stringify(currentPokemonGuess);
        let currentPokemonGuessTypesInfo = JSON.parse(currentPokemonGuessInfo);
        let currentPokemonGuessType1 = currentPokemonGuessTypesInfo.types[0];
        let currentPokemonGuessType2 = currentPokemonGuessTypesInfo.types[1];

         
     
       if (currentPokemonGuessType1 == activeType2 && currentPokemonGuessType1 == iconsList[i]) {
      typeIcons[i].style.backgroundColor = "";
     }  //If the type is correct but in the wrong column, it wont be greyed out.
         else if (currentPokemonGuessType2 == activeType1 && currentPokemonGuessType2 == iconsList[i]) {
      typeIcons[i].style.backgroundColor = "";
     }  //If the type is correct but in the wrong column, it wont be greyed out.
           else if (currentPokemonGuessType1 !== activeType1 && currentPokemonGuessType1 == iconsList[i]) {
      typeIcons[i].style.backgroundColor = "Grey";
     }  //Will update the types to show that the types of an incorrect guess are not relevant, visually accessible
             else if (currentPokemonGuessType2 !== activeType2 && currentPokemonGuessType2 == iconsList[i]) {
      typeIcons[i].style.backgroundColor = "Grey";
     }  //Will update the types to show that the types of an incorrect guess are not relevant, visually accessible
   }    
             document.getElementById("maxGuesses").innerHTML = remainGuesses;
             remainGuesses -= 1; //lowers max guesses by 1
             document.getElementById("text-input").value = "";
        }
      }
    }
  });     //above code checks and updates the relevant info according to each guess
  

  function reset() {
   let currentPokemon = newPoke();
   document.querySelectorAll("iconsList").hidden = true;
   document.getElementById("maxGuesses").innerHTML = 5;
   //document.getElementById("guessTallyTotal").innerHTML = "";
   result.innerText = "";
   document.getElementById("check-btn").disabled = false;
   document.getElementById("text-input").value = "";
   document.getElementById("currentGuess").value = "";
   document.getElementById("type-1").hidden = true;
   document.getElementById("type-2").hidden = true;
   document.getElementById("height").hidden = true;
   document.getElementById("weight").hidden = true;
   currentPokemonName = currentPokemon.name;
   remainGuesses = 4;
   currentType1.innerText = "";
   currentType2.innerText = "";
   currentHeight.innerText = "";
   currentWeight.innerText = "";
   currentGuess.innerText = "";
   for (let i = 0; i < iconsList.length; i++) {
   document.querySelectorAll('.types')[i].style.backgroundColor = "";
    }
}   // resets all parameters for a fresh game. Does NOT currently re-roll the getRandomResult array yet.
