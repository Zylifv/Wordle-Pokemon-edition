const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const startBtn = document.getElementById("start-btn");
const result = document.getElementById("result");
const pokemonList = document.querySelectorAll(".poke_choices");
const guessTally = document.getElementById("guessTally");
const datalist = document.getElementById("myList");
const resetButton = document.getElementById("reset-btn");
let currentGuess = document.getElementById("currentGuess");
let currentGenCheck = document.getElementById("gen_check");
let maxGuesses = 4;
let remainGuesses = maxGuesses;
let guessTallyTotal = document.getElementById("guessTallyTotal");
const typeIcons = document.querySelectorAll('.types');
const iconsList = ["Normal", "Fire", "Fighting", "Water", "Flying", "Grass", "Poison", "Electric", "Ground", "Dark", "Psychic", "Rock", "Ice", "Bug", "Dragon", "Ghost", "None", "Steel", "Fairy"];
const gen1Array = [
  {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    height: 0.7,
    weight: 6.9,
    generation: 1
    },
  {
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    height: 1.0,
    weight: 13.0,
    generation: 1
  },
  {
    name: "Venusaur",
    types: ["Grass", "Poison"],
    height: 2.0,
    weight: 100.0,
    generation: 1
  },
  {
    name: "Charmander",
    types: ["Fire", "None"],
    height: 0.6,
    weight: 8.5,
    generation: 1
  },
  {
    name: "Charmeleon",
    types: ["Fire", "None"],
    height: 1.1,
    weight: 19.0,
    generation: 1
  },
  {
    name: "Charizard",
    types: ["Fire", "Flying"],
    height: 1.7,
    weight: 90.5,
    generation: 1
  },
  {
    name: "Squirtle",
    types: ["Water", "None"],
    height: 0.5,
    weight: 9.0,
    generation: 1
  },
  {
    name: "Wartortle",
    types: ["Water", "None"],
    height: 1.0,
    weight: 22.5,
    generation: 1
  },
  {
    name: "Blastoise",
    types: ["Water", "None"],
    height: 1.6,
    weight: 85.5,
    generation: 1
  },
  {
    name: "Caterpie",
    types: ["Bug", "None"],
    height: 0.3,
    weight: 2.9,
    generation: 1
  },
  {
    name: "Metapod",
    types: ["Bug", "None"],
    height: 0.7,
    weight: 9.9,
    generation: 1
  },
  {
    name: "Butterfree",
    types: ["Bug", "Flying"],
    height: 1.1,
    weight: 32.0,
    generation: 1
  },
  {
    name: "Weedle",
    types: ["Bug", "Poison"],
    height: 0.3,
    weight: 3.2,
    generation: 1
  },
  {
    name: "Kakuna",
    types: ["Bug", "Poison"],
    height: 0.6,
    weight: 10.0,
    generation: 1
  },
  {
    name: "Beedrill",
    types: ["Bug", "Poison"],
    height: 1.0,
    weight: 29.5,
    generation: 1
  },
  {
    name: "Pidgey",
    types: ["Normal", "Flying"],
    height: 0.3,
    weight: 1.8,
    generation: 1
    },
  {
    name: "Pidgeotto",
    types: ["Normal", "Flying"],
    height: 1.1,
    weight: 30.0,
    generation: 1
    },
  {
    name: "Pidgeot",
    types: ["Normal", "Flying"],
    height: 1.5,
    weight: 39.5,
    generation: 1
    },
  {
    name: "Rattata",
    types: ["Normal", "None"],
    height: 0.3,
    weight: 3.5,
    generation: 1
  },
  {
    name: "Raticate",
    types: ["Normal", "None"],
    height: 0.7,
    weight: 18.5,
    generation: 1
  },
  {
    name: "Spearow",
    types: ["Normal", "Flying"],
    height: 0.3,
    weight: 2.0,
    generation: 1
  },
  {
    name: "Fearow",
    types: ["Normal", "Flying"],
    height: 1.2,
    weight: 38.0,
    generation: 1
  },
  {
    name: "Ekans",
    types: ["Poison", "None"],
    height: 2.0,
    weight: 6.9,
    generation: 1
  },
  {
    name: "Arbok",
    types: ["Poison", "None"],
    height: 3.5,
    weight: 65.0,
    generation: 1
  },
  {
    name: "Pikachu",
    types: ["Electric", "None"],
    height: 0.4,
    weight: 6.0,
    generation: 1
  },
  {
    name: "Raichu",
    types: ["Electric", "None"],
    height: 0.8,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Sandshrew",
    types: ["Ground", "None"],
    height: 0.6,
    weight: 12.0,
    generation: 1
  },
  {
    name: "Sandslash",
    types: ["Ground", "None"],
    height: 1.0,
    weight: 29.5,
    generation: 1
  },
  {
    name: "Nidoran♀",
    types: ["Poison", "None"],
    height: 0.4,
    weight: 7.0,
    generation: 1
  },
  {
    name: "Nidorina",
    types: ["Poison", "None"],
    height: 0.8,
    weight: 20.0,
    generation: 1
  },
  {
    name: "Nidoqueen",
    types: ["Poison", "Ground"],
    height: 1.3,
    weight: 60.0,
    generation: 1
  },
  {
    name: "Nidoran♂",
    types: ["Poison", "None"],
    height: 0.5,
    weight: 9.0,
    generation: 1
  },
  {
    name: "Nidorino",
    types: ["Poison", "None"],
    height: 0.9,
    weight: 19.5,
    generation: 1
  },
  {
    name: "Nidoking",
    types: ["Poison", "Ground"],
    height: 1.4,
    weight: 62.0,
    generation: 1
  },
  {
    name: "Clefairy",
    types: ["Fairy", "None"],
    height: 0.6,
    weight: 7.5,
    generation: 1
  },
  {
    name: "Clefable",
    types: ["Fairy", "None"],
    height: 1.3,
    weight: 40.0,
    generation: 1
  },
  {
    name: "Vulpix",
    types: ["Fire", "None"],
    height: 0.6,
    weight: 9.9,
    generation: 1
  },
  {
    name: "Ninetales",
    types: ["Fire", "None"],
    height: 1.1,
    weight: 19.9,
    generation: 1
  },
  {
    name: "Jigglypuff",
    types: ["Normal", "Fairy"],
    height: 0.5,
    weight: 5.5,
    generation: 1
  },
  {
    name: "Wigglytuff",
    types: ["Normal", "Fairy"],
    height: 1.0,
    weight: 12.0,
    generation: 1
  }, 
  {
    name: "Zubat",
    types: ["Poison", "Flying"],
    height: 0.8,
    weight: 7.5,
    generation: 1
  },
  {
    name: "Golbat",
    types: ["Poison", "Flying"],
    height: 1.6,
    weight: 55.0,
    generation: 1
  },
  {
    name: "Oddish",
    types: ["Grass", "Poison"],
    height: 0.5,
    weight: 5.4,
    generation: 1
  },
  {
    name: "Gloom",
    types: ["Grass", "Poison"],
    height: 0.8,
    weight: 8.6,
    generation: 1
  },
  {
    name: "Vileplume",
    types: ["Grass", "Poison"],
    height: 1.2,
    weight: 18.6,
    generation: 1
  },
  {
    name: "Paras",
    types: ["Bug", "Grass"],
    height: 0.3,
    weight: 5.4,
    generation: 1
  },
  {
    name: "Parasect",
    types: ["Bug", "Grass"],
    height: 1.0,
    weight: 29.5,
    generation: 1
  },
  {
    name: "Venonat",
    types: ["Bug", "Poison"],
    height: 1.0,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Venomoth",
    types: ["Bug", "Poison"],
    height: 1.5,
    weight: 12.5,
    generation: 1
  },
  {
    name: "Diglett",
    types: ["Ground", "None"],
    height: 0.2,
    weight: 0.8,
    generation: 1
  },
  {
    name: "Dugtrio",
    types: ["Ground", "None"],
    height: 0.7,
    weight: 33.3,
    generation: 1
  },
  {
    name: "Meowth",
    types: ["Normal", "None"],
    height: 0.4,
    weight: 4.2,
    generation: 1
  },
  {
    name: "Persian",
    types: ["Normal", "None"],
    height: 1.0,
    weight: 32.0,
    generation: 1
  },
  {
    name: "Psyduck",
    types: ["Water", "None"],
    height: 0.8,
    weight: 19.6,
    generation: 1
  },
  {
    name: "Golduck",
    types: ["Water", "None"],
    height: 1.7,
    weight: 76.6,
    generation: 1
  },
  {
    name: "Mankey",
    types: ["Fighting", "None"],
    height: 0.5,
    weight: 28.0,
    generation: 1
  },
  {
    name: "Primeape",
    types: ["Fighting", "None"],
    height: 1.0,
    weight: 32.0,
    generation: 1
  },
  {
    name: "Growlithe",
    types: ["Fire", "None"],
    height: 0.7,
    weight: 19.0,
    generation: 1
  },
  {
    name: "Arcanine",
    types: ["Fire", "None"],
    height: 1.9,
    weight: 155.0,
    generation: 1
  },
  {
    name: "Poliwag",
    types: ["Water", "none"],
    height: 0.6,
    weight: 12.4,
    generation: 1
  },
  {
    name: "Poliwhirl",
    types: ["Water", "None"],
    height: 1.0,
    weight: 20.0,
    generation: 1
  },
  {
    name: "Poliwrath",
    types: ["Water", "Fighting"],
    height: 1.3,
    weight: 54.0,
    generation: 1
  },
  
 {
    name: "Abra",
    types: ["Psychic", "None"],
    height: 0.9,
    weight: 19.5,
    generation: 1
  },
  {
    name: "Kadabra",
    types: ["Psychic", "None"],
    height: 1.3,
    weight: 56.5,
    generation: 1
  },
  {
    name: "Alakazam",
    types: ["Psychic", "None"],
    height: 1.5,
    weight: 48.0,
    generation: 1
  },
  {
    name: "Machop",
    types: ["Fighting", "None"],
    height: 0.8,
    weight: 19.5,
    generation: 1
  },
  {
    name: "Machoke",
    types: ["Fighting", "None"],
    height: 1.5,
    weight: 70.5,
    generation: 1
  },
  {
    name: "Machamp",
    types: ["Fighting", "None"],
    height: 1.6,
    weight: 130.0,
    generation: 1
  },
  {
    name: "Bellsprout",
    types: ["Grass", "Poison"],
    height: 0.7,
    weight: 4.0,
    generation: 1
  },
  {
    name: "Weepinbell",
    types: ["Grass", "Poison"],
    height: 1.0,
    weight: 6.4,
    generation: 1
  },
  {
    name: "Victreebel",
    types: ["Grass", "Poison"],
    height: 1.7,
    weight: 15.5,
    generation: 1
  },
  {
    name: "Tentacool",
    types: ["Water", "Poison"],
    height: 0.9,
    weight: 45.5,
    generation: 1
  },
  {
    name: "Tentacruel",
    types: ["Water", "Poison"],
    height: 1.6,
    weight: 55.0,
    generation: 1
  },
  {
    name: "Geodude",
    types: ["Rock", "Ground"],
    height: 0.4,
    weight: 20.0,
    generation: 1
  },
  {
    name: "Graveler",
    types: ["Rock", "Ground"],
    height: 1.0,
    weight: 105.0,
    generation: 1
  },
  {
    name: "Golem",
    types: ["Rock", "Ground"],
    height: 1.4,
    weight: 300.0,
    generation: 1
  },
  {
    name: "Ponyta",
    types: ["Fire", "None"],
    height: 1.0,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Rapidash",
    types: ["Fire", "None"],
    height: 1.7,
    weight: 95.0,
    generation: 1
  },
  {
    name: "Slowpoke",
    types: ["Water", "Psychic"],
    height: 1.2,
    weight: 36.0,
    generation: 1
  },
  {
    name: "Slowbro",
    types: ["Water", "Psychic"],
    height: 1.6,
    weight: 78.5,
    generation: 1
  },
  {
    name: "Magnemite",
    types: ["Electric", "Steel"],
    height: 0.3,
    weight: 6.0,
    generation: 1
  },
  {
    name: "Magneton",
    types: ["Electric", "Steel"],
    height: 1.0,
    weight: 60.0,
    generation: 1
  },
  {
    name: "Farfetch'd",
    types: ["Normal", "Flying"],
    height: 0.8,
    weight: 15.0,
    generation: 1
  },
  {
    name: "Doduo",
    types: ["Normal", "Flying"],
    height: 1.4,
    weight: 39.2,
    generation: 1
  },
  {
    name: "Dodrio",
    types: ["Normal", "Flying"],
    height: 1.8,
    weight: 85.2,
    generation: 1
  },
  {
    name: "Seel",
    types: ["Water", "None"],
    height: 1.1,
    weight: 90.0,
    generation: 1
  },
  {
    name: "Dewgong",
    types: ["Water", "Ice"],
    height: 1.7,
    weight: 120.0,
    generation: 1
  },
  {
    name: "Grimer",
    types: ["Poison", "None"],
    height: 0.9,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Muk",
    types: ["Poison", "None"],
    height: 1.2,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Shellder",
    types: ["Water", "None"],
    height: 0.3,
    weight: 4.0,
    generation: 1
  },
  {
    name: "Cloyster",
    types: ["Water", "Ice"],
    height: 1.5,
    weight: 132.5,
    generation: 1
  },
  {
    name: "Gastly",
    types: ["Ghost", "Poison"],
    height: 1.3,
    weight: 0.1,
    generation: 1
  },
  {
    name: "Haunter",
    types: ["Ghost", "Poison"],
    height: 1.6,
    weight: 0.1,
    generation: 1
  },
  {
    name: "Gengar",
    types: ["Ghost", "Poison"],
    height: 1.5,
    weight: 40.5,
    generation: 1
  },
  {
    name: "Onix",
    types: ["Rock", "Ground"],
    height: 8.8,
    weight: 210.0,
    generation: 1
  },
  {
    name: "Drowzee",
    types: ["Psychic", "None"],
    height: 1.0,
    weight: 32.4,
    generation: 1
  },
  {
    name: "Hypno",
    types: ["Psychic", "None"],
    height: 1.6,
    weight: 75.6,
    generation: 1
  },
  {
    name: "Krabby",
    types: ["Water", "None"],
    height: 0.4,
    weight: 6.5,
    generation: 1
  },
  {
    name: "Kingler",
    types: ["Water", "None"],
    height: 1.3,
    weight: 60.0,
    generation: 1
  },
  {
    name: "Voltorb",
    types: ["Electric", "None"],
    height: 0.5,
    weight: 10.4,
    generation: 1
  },
  {
    name: "Electrode",
    types: ["Electric", "None"],
    height: 1.2,
    weight: 66.6,
    generation: 1
  },
  {
    name: "Exeggcute",
    types: ["Grass", "Psychic"],
    height: 0.4,
    weight: 2.5,
    generation: 1
  },
  {
    name: "Exeggutor",
    types: ["Grass", "Psychic"],
    height: 2.0,
    weight: 120.0,
    generation: 1
  },
  {
    name: "Cubone",
    types: ["Ground", "None"],
    height: 0.4,
    weight: 6.5,
    generation: 1
  },
  {
    name: "Marowak",
    types: ["Ground", "None"],
    height: 1.0,
    weight: 45.0,
    generation: 1
  },
  {
    name: "Hitmonlee",
    types: ["Fighting", "None"],
    height: 1.5,
    weight: 49.8,
    generation: 1
  },
  {
    name: "Hitmonchan",
    types: ["Fighting", "None"],
    height: 1.4,
    weight: 50.2,
    generation: 1
  },
  {
    name: "Lickitung",
    types: ["Normal", "None"],
    height: 1.2,
    weight: 65.5,
    generation: 1
  },
  {
    name: "Koffing",
    types: ["Poison", "None"],
    height: 0.6,
    weight: 1.0,
    generation: 1
  },
  {
    name: "Weezing",
    types: ["Poison", "None"],
    height: 1.2,
    weight: 9.5,
    generation: 1
  },
  {
    name: "Rhyhorn",
    types: ["Ground", "Rock"],
    height: 1.0,
    weight: 115.0,
    generation: 1
  },
  {
    name: "Rhydon",
    types: ["Ground", "Rock"],
    height: 1.9,
    weight: 120.0,
    generation: 1
  },
  {
    name: "Chansey",
    types: ["Normal", "None"],
    height: 1.1,
    weight: 34.6,
    generation: 1
  },
  {
    name: "Tangela",
    types: ["Grass", "None"],
    height: 1.0,
    weight: 35.0,
    generation: 1
  },
  {
    name: "Kangaskhan",
    types: ["Normal", "None"],
    height: 2.2,
    weight: 80.0,
    generation: 1
  },
  {
    name: "Horsea",
    types: ["Water", "None"],
    height: 0.4,
    weight: 8.0,
    generation: 1
  },{
    name: "Seadra",
    types: ["Water", "None"],
    height: 1.2,
    weight: 25.0,
    generation: 1
  },
  {
    name: "Goldeen",
    types: ["Water", "None"],
    height: 0.6,
    weight: 15.0,
    generation: 1
  },
  {
    name: "Seaking",
    types: ["Water", "None"],
    height: 1.3,
    weight: 39.0,
    generation: 1
  },
  {
    name: "Staryu",
    types: ["Water", "None"],
    height: 0.8,
    weight: 34.5,
    generation: 1
  },
  {
    name: "Starmie",
    types: ["Water", "Psychic"],
    height: 1.1,
    weight: 80.0,
    generation: 1
  },
  {
    name: "Mr mime",
    types: ["Psychic", "Fairy"],
    height: 1.3,
    weight: 54.5,
    generation: 1
  },
  {
    name: "Scyther",
    types: ["Bug", "Flying"],
    height: 1.5,
    weight: 56.0,
    generation: 1
  },
  {
    name: "Jynx",
    types: ["Ice", "Psychic"],
    height: 1.4,
    weight: 40.6,
    generation: 1
  },
  {
    name: "Electabuzz",
    types: ["Electric", "None"],
    height: 1.1,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Magmar",
    types: ["Fire", "None"],
    height: 1.3,
    weight: 44.5,
    generation: 1
  },
  {
    name: "Pinsir",
    types: ["Bug", "None"],
    height: 1.5,
    weight: 55.0,
    generation: 1
  },
  {
    name: "Tauros",
    types: ["Normal", "None"],
    height: 1.4,
    weight: 88.4,
    generation: 1
  },
  {
    name: "Magikarp",
    types: ["Water", "None"],
    height: 0.9,
    weight: 10.0,
    generation: 1
  },
  {
    name: "Gyarados",
    types: ["Water", "Flying"],
    height: 6.5,
    weight: 235.0,
    generation: 1
  },
  {
    name: "Lapras",
    types: ["Water", "Ice"],
    height: 2.5,
    weight: 220.0,
    generation: 1
  },
  {
    name: "Ditto",
    types: ["Normal", "None"],
    height: 0.3,
    weight: 4.0,
    generation: 1
  },
  {
    name: "Eevee",
    types: ["Normal", "None"],
    height: 0.3,
    weight: 6.5,
    generation: 1
  },
  {
    name: "Vaporeon",
    types: ["Water", "None"],
    height: 1.0,
    weight: 29.0,
    generation: 1
  },
  {
    name: "Jolteon",
    types: ["Electric", "None"],
    height: 0.8,
    weight: 24.5,
    generation: 1
  },
  {
    name: "Flareon",
    types: ["Fire", "None"],
    height: 0.9,
    weight: 25.0,
    generation: 1
  },
  {
    name: "Porygon",
    types: ["Normal", "None"],
    height: 0.8,
    weight: 36.5,
    generation: 1
  },
  {
    name: "Omanyte",
    types: ["Rock", "Water"],
    height: 0.4,
    weight: 7.5,
    generation: 1
  },
  {
    name: "Omastar",
    types: ["Rock", "Water"],
    height: 1.0,
    weight: 35.0,
    generation: 1
  },
  {
    name: "Kabuto",
    types: ["Rock", "Water"],
    height: 0.5,
    weight: 11.5,
    generation: 1
  },
  {
    name: "Kabutops",
    types: ["Rock", "Water"],
    height: 1.3,
    weight: 40.5,
    generation: 1
  },
  {
    name: "Aerodactyl",
    types: ["Rock", "Flying"],
    height: 1.8,
    weight: 59.0,
    generation: 1
  },
  {
    name: "Snorlax",
    types: ["Normal", "None"],
    height: 2.1,
    weight: 460.0,
    generation: 1
  },
  {
    name: "Articuno",
    types: ["Ice", "Flying"],
    height: 1.7,
    weight: 55.4,
    generation: 1
  },
  {
    name: "Zapdos",
    types: ["Electric", "Flying"],
    height: 1.6,
    weight: 52.6,
    generation: 1
  },
  {
    name: "Moltres",
    types: ["Fire", "Flying"],
    height: 2.0,
    weight: 60.0,
    generation: 1
  },
  {
    name: "Dratini",
    types: ["Dragon", "None"],
    height: 1.8,
    weight: 3.3,
    generation: 1
  },
  {
    name: "Dragonair",
    types: ["Dragon", "None"],
    height: 4.0,
    weight: 16.5,
    generation: 1
  },
  {
    name: "Dragonite",
    types: ["Dragon", "Flying"],
    height: 2.2,
    weight: 210.0,
    generation: 1
  },
  {
    name: "Mewtwo",
    types: ["Psychic", "None"],
    height: 2.0,
    weight: 122.0,
    generation: 1
  },
  {
    name: "Mew",
    types: ["Psychic", "None"],
    height: 0.4,
    weight: 4.0,
    generation: 1
  }];
const gen2Array = [
   {
    name: "Chikorita",
    types: ["Grass", "None"],
    height: 0.9,
    weight: 6.4,
    generation: 2
  },
  {
    name: "Bayleef",
    types: ["Grass", "None"],
    height: 1.2,
    weight: 15.8,
    generation: 2
  },
  {
    name: "Meganium",
    types: ["Grass", "None"],
    height: 1.8,
    weight: 100.5,
    generation: 2
  },
  {
    name: "Cyndaquil",
    types: ["Fire", "None"],
    height: 0.5,
    weight: 7.9,
    generation: 2
  },
  {
    name: "Quilava",
    types: ["Fire", "None"],
    height: 0.9,
    weight: 19,
    generation: 2
  },
  {
    name: "Typhlosion",
    types: ["Fire", "None"],
    height: 1.7,
    weight: 79.5,
    generation: 2
  },
  {
    name: "Totodile",
    types: ["Water", "None"],
    height: 0.6,
    weight: 9.5,
    generation: 2
  },
  {
    name: "Croconaw",
    types: ["Water", "None"],
    height: 1.1,
    weight: 25.0,
    generation: 2
  },
  {
    name: "Feraligatr",
    types: ["Water", "None"],
    height: 2.3,
    weight: 88.8,
    generation: 2
  },
  {
    name: "Sentret",
    types: ["Normal", "None"],
    height: 0.8,
    weight: 6.0,
    generation: 2
  },
  {
    name: "Furret",
    types: ["Normal", "None"],
    height: 1.8,
    weight: 32.5,
    generation: 2
  },
  {
    name: "Hoothoot",
    types: ["Normal", "Flying"],
    height: 0.7,
    weight: 21.2,
    generation: 2
  },
  {
    name: "Noctowl",
    types: ["Normal", "Flying"],
    height: 1.6,
    weight: 40.8,
    generation: 2
  },
  {
    name: "Ledyba",
    types: ["Bug", "Flying"],
    height: 1.0,
    weight: 10.8,
    generation: 2
  },
  {
    name: "Ledian",
    types: ["Bug", "Flying"],
    height: 1.4,
    weight: 35.6,
    generation: 2
  },
  {
    name: "Spinarak",
    types: ["Bug", "Poison"],
    height: 0.5,
    weight: 8.5,
    generation: 2
  },
  {
    name: "Ariados",
    types: ["Bug", "Poison"],
    height: 1.1,
    weight: 33.5,
    generation: 2
  },
  {
    name: "Crobat",
    types: ["Poison", "Flying"],
    height: 1.8,
    weight: 75.0,
    generation: 2
  },
  {
    name: "Chinchou",
    types: ["Water", "Electric"],
    height: 0.5,
    weight: 12.0,
    generation: 2
  },
  {
    name: "Lanturn",
    types: ["Water", "Electric"],
    height: 1.2,
    weight: 22.5,
    generation: 2
  },
  {
    name: "Pichu",
    types: ["Electric", "None"],
    height: 0.3,
    weight: 2.0,
    generation: 2
  },
  {
    name: "Cleffa",
    types: ["Fairy", "None"],
    height: 0.3,
    weight: 3.0,
    generation: 2
  },
  {
    name: "Igglybuff",
    types: ["Normal", "Fairy"],
    height: 0.3,
    weight: 1.0,
    generation: 2
  },
  {
    name: "Togepi",
    types: ["Fairy", "None"],
    height: 0.3,
    weight: 1.5,
    generation: 2
  },
  {
    name: "Togetic",
    types: ["Fairy", "Flying"],
    height: 0.6,
    weight: 3.2,
    generation: 2
  },
  {
    name: "Natu",
    types: ["Psychic", "Flying"],
    height: 0.2,
    weight: 2.0,
    generation: 2
  },
  {
    name: "Xatu",
    types: ["Psychic", "Flying"],
    height: 1.5,
    weight: 15.0,
    generation: 2
  },
  {
    name: "Mareep",
    types: ["Electric", "None"],
    height: 0.6,
    weight: 7.8,
    generation: 2
  },
  {
    name: "Flaffy",
    types: ["Electric", "None"],
    height: 0.8,
    weight: 13.3,
    generation: 2
  },
  {
    name: "Ampharos",
    types: ["Electric", "None"],
    height: 1.4,
    weight: 61.5,
    generation: 2
  },
  {
    name: "Bellossom",
    types: ["Grass", "None"],
    height: 0.4,
    weight: 5.8,
    generation: 2
  },
  {
    name: "Marill",
    types: ["Water", "Fairy"],
    height: 0.4,
    weight: 8.5,
    generation: 2
  },
  {
    name: "Azumarill",
    types: ["Water", "Fairy"],
    height: 0.8,
    weight: 28.5,
    generation: 2
  },
  {
    name: "Sudowoodo",
    types: ["Rock", "None"],
    height: 1.2,
    weight: 38.0,
    generation: 2
  },
  {
    name: "Politoed",
    types: ["Water", "None"],
    height: 1.1,
    weight: 33.9,
    generation: 2
  },
  {
    name: "Hoppip",
    types: ["Grass", "Flying"],
    height: 0.4,
    weight: 0.5,
    generation: 2
  },
  {
    name: "Skiploom",
    types: ["Grass", "Flying"],
    height: 0.6,
    weight: 1.0,
    generation: 2
  },
  {
    name: "Jumpluff",
    types: ["Grass", "Flying"],
    height: 0.8,
    weight: 3.0,
    generation: 2
  },
  {
    name: "Aipom",
    types: ["Normal", "None"],
    height: 0.8,
    weight: 11.5,
    generation: 2
  },
  {
    name: "Sunkern",
    types: ["Grass", "None"],
    height: 0.3,
    weight: 1.8,
    generation: 2
  },
  {
    name: "Sunflora",
    types: ["Grass", "None"],
    height: 0.8,
    weight: 8.5,
    generation: 2
  },
  {
    name: "Yanma",
    types: ["Bug", "Flying"],
    height: 1.2,
    weight: 38.0,
    generation: 2
  },
  {
    name: "Wooper",
    types: ["Water", "Ground"],
    height: 0.4,
    weight: 8.5,
    generation: 2
  },
  {
    name: "Quagsire",
    types: ["Water", "Ground"],
    height: 1.4,
    weight: 75.0,
    generation: 2
  },
  {
    name: "Espeon",
    types: ["Psychic", "None"],
    height: 0.9,
    weight: 26.5,
    generation: 2
  },
  {
    name: "Umbreon",
    types: ["Dark", "None"],
    height: 1.0,
    weight: 27.0,
    generation: 2
  },
  {
    name: "Murkrow",
    types: ["Dark", "Flying"],
    height: 0.5,
    weight: 2.1,
    generation: 2
  },
  {
    name: "Slowking",
    types: ["Water", "Psychic"],
    height: 2.0,
    weight: 79.5,
    generation: 2
  },
  {
    name: "Misdreavus",
    types: ["Ghost", "None"],
    height: 0.7,
    weight: 1.0,
    generation: 2
  },
  {
    name: "Unown",
    types: ["Psychic", "None"],
    height: 0.5,
    weight: 5.0,
    generation: 2
  },
  {
    name: "Wobbuffet",
    types: ["Psychic", "None"],
    height: 1.3,
    weight: 28.5,
    generation: 2
  },
  {
    name: "Girafarig",
    types: ["Normal", "Psychic"],
    height: 1.5,
    weight: 41.5,
    generation: 2
  },
  {
    name: "Pineco",
    types: ["Bug", "None"],
    height: 0.6,
    weight: 7.2,
    generation: 2
  },
  {
    name: "Forretress",
    types: ["Bug", "Steel"],
    height: 1.2,
    weight: 125.8,
    generation: 2
  },
  {
    name: "Dunsparce",
    types: ["Normal", "None"],
    height: 1.5,
    weight: 14.0,
    generation: 2
  },
  {
    name: "Gligar",
    types: ["Ground", "Flying"],
    height: 1.1,
    weight: 64.8,
    generation: 2
  },
  {
    name: "Steelix",
    types: ["Steel", "Ground"],
    height: 9.2,
    weight: 400.0,
    generation: 2
  },
  {
    name: "Snubbull",
    types: ["Fairy", "None"],
    height: 0.6,
    weight: 7.8,
    generation: 2
  },
  {
    name: "Granbull",
    types: ["Fairy", "None"],
    height: 1.4,
    weight: 48.7,
    generation: 2
  },
  {
    name: "Qwilfish",
    types: ["Water", "Poison"],
    height: 0.5,
    weight: 3.9,
    generation: 2
  },
  {
    name: "Scizor",
    types: ["Bug", "Steel"],
    height: 1.8,
    weight: 118.0,
    generation: 2
  },
  {
    name: "Shuckle",
    types: ["Bug", "Rock"],
    height: 0.6,
    weight: 20.5,
    generation: 2
  },
  {
    name: "Heracross",
    types: ["Bug", "Fighting"],
    height: 1.5,
    weight: 54.0,
    generation: 2
  },
  {
    name: "Sneasel",
    types: ["Dark", "Ice"],
    height: 0.9,
    weight: 28.0,
    generation: 2
  },
  {
    name: "Teddiursa",
    types: ["Normal", "None"],
    height: 0.6,
    weight: 8.8,
    generation: 2
  },
  {
    name: "Ursaring",
    types: ["Normal", "None"],
    height: 1.8,
    weight: 125.8,
    generation: 2
  },
  {
    name: "Slugma",
    types: ["Fire", "None"],
    height: 0.7,
    weight: 35.0,
    generation: 2
  },
  {
    name: "Magcargo",
    types: ["Fire", "Rock"],
    height: 0.8,
    weight: 55.0,
    generation: 2
  },
  {
    name: "Swinub",
    types: ["Ice", "Ground"],
    height: 0.4,
    weight: 6.5,
    generation: 2
  },
  {
    name: "Piloswine",
    types: ["Ice", "Ground"],
    height: 1.1,
    weight: 55.8,
    generation: 2
  },
  {
    name: "Corsola",
    types: ["Water", "Rock"],
    height: 0.6,
    weight: 5.0,
    generation: 2
  },
  {
    name: "Remoraid",
    types: ["Water", "None"],
    height: 0.6,
    weight: 12.0,
    generation: 2
  },
  {
    name: "Octillery",
    types: ["Water", "None"],
    height: 0.9,
    weight: 28.5,
    generation: 2
  },
  {
    name: "Delibird",
    types: ["Ice", "Flying"],
    height: 0.9,
    weight: 16.0,
    generation: 2
  },
  {
    name: "Mantine",
    types: ["Water", "Flying"],
    height: 2.1,
    weight: 220.0,
    generation: 2
  },
  {
    name: "Skarmory",
    types: ["Steel", "Flying"],
    height: 1.7,
    weight: 50.5,
    generation: 2
  },
  {
    name: "Houndour",
    types: ["Dark", "Fire"],
    height: 0.6,
    weight: 10.8,
    generation: 2
  },
  {
    name: "Houndoom",
    types: ["Dark", "Fire"],
    height: 1.4,
    weight: 35.0,
    generation: 2
  },
  {
    name: "Kingdra",
    types: ["Water", "Dragon"],
    height: 1.8,
    weight: 152.0,
    generation: 2
  },
  {
    name: "Phanpy",
    types: ["Ground", "None"],
    height: 0.5,
    weight: 33.5,
    generation: 2
  },
  {
    name: "Donphan",
    types: ["Ground", "None"],
    height: 1.1,
    weight: 120.0,
    generation: 2
  },
  {
    name: "Porygon two",
    types: ["Normal", "None"],
    height: 0.6,
    weight: 32.5,
    generation: 2
  },
  {
    name: "Stantler",
    types: ["Normal", "None"],
    height: 1.4,
    weight: 71.2,
    generation: 2
  },
  {
    name: "Smeargle",
    types: ["Normal", "None"],
    height: 1.2,
    weight: 58.0,
    generation: 2
  },
  {
    name: "Tyrogue",
    types: ["Fighting", "None"],
    height: 0.7,
    weight: 21.0,
    generation: 2
  },
  {
    name: "Hitmontop",
    types: ["Fighting", "None"],
    height: 1.4,
    weight: 48.0,
    generation: 2
  },
  {
    name: "Smoochum",
    types: ["Ice", "Psychic"],
    height: 0.4,
    weight: 6.0,
    generation: 2
  },
  {
    name: "Elekid",
    types: ["Electric", "None"],
    height: 0.6,
    weight: 23.5,
    generation: 2
  },
  {
    name: "Magby",
    types: ["Fire", "None"],
    height: 0.7,
    weight: 21.4,
    generation: 2
  },
  {
    name: "Miltank",
    types: ["Normal", "None"],
    height: 1.2,
    weight: 75.5,
    generation: 2
  },
  {
    name: "Blissey",
    types: ["Normal", "None"],
    height: 1.5,
    weight: 46.8,
    generation: 2
  },
  {
    name: "Raikou",
    types: ["Electric", "None"],
    height: 1.9,
    weight: 178.0,
    generation: 2
  },
  {
    name: "Entei",
    types: ["Fire", "None"],
    height: 2.1,
    weight: 198.0,
    generation: 2
  },
  {
    name: "Suicune",
    types: ["Water", "None"],
    height: 2.0,
    weight: 187.0,
    generation: 2
  },
  {
    name: "Larvitar",
    types: ["Rock", "Ground"],
    height: 0.6,
    weight: 72.0,
    generation: 2
  },
  {
    name: "Pupitar",
    types: ["Rock", "Ground"],
    height: 1.2,
    weight: 152.0,
    generation: 2
  },
  {
    name: "Tyranitar",
    types: ["Rock", "Ground"],
    height: 2.0,
    weight: 202.0,
    generation: 2
  },
  {
    name: "Lugia",
    types: ["Psychic", "Flying"],
    height: 5.2,
    weight: 216.0,
    generation: 2
  },
  {
    name: "Ho oh",
    types: ["Fire", "Flying"],
    height: 3.8,
    weight: 199.0,
    generation: 2
  },
  {
    name: "Celebi",
    types: ["Psychic", "Grass"],
    height: 0.6,
    weight: 5.0,
    generation: 2
  }
 ];
const pokemonTypeColors = [
  {
    name: "Normal",
    color: "#A8A77A"
  },
  {
    name: "Fire",
    color: "#EE8130"
  },
  {
    name: "Fighting",
    color: "#C22E28"
  },
  {
    name: "Water",
    color: "#6390F0"
  },
  {
    name: "Flying",
    color: "#A98FF3"
  },
  {
    name: "Grass",
    color: "#7AC74C"
  },
  {
    name: "Poison",
    color: "#A33EA1"
  },
  {
    name: "Electric",
    color: "#F7D02C"
  },
  {
    name: "Ground",
    color: "#E2BF65"
  },
  {
    name: "Psychic",
    color: "#F95587"
  },
  {
    name: "Rock",
    color: "#B6A136"
  },
  {
    name: "Ice",
    color: "#96D9D6"
  },
  {
    name: "Bug",
    color: "#A6B91A"
  },
  {
    name: "Dragon",
    color: "#6F35FC"
  },
  {
    name: "Ghost",
    color: "#735797"
  },
  {
    name: "None",
    color: "#ebe8e8"
  },
  {
    name: "Steel",
    color: "#B7B7CE"
  },
  {
    name: "Fairy",
    color: "#D685AD"
  },
  {
    name: "Dark",
    color: "#705746"
  }
];
let currentPokemon = "";
let currentPokemonName = "";
let activeType1 = "";
let activeType2 = "";
let activeHeight = "";
let activeWeight = "";
let currentType1 = "";
let currentType2 = "";
let currentHeight = "";
let currentWeight = "";
let currentGuessName = `${textInput.value}`;
let matches = "";
let option = [...gen1Array, ...gen2Array];
let options;
let names = [...new Set(option.flatMap((o) => [o.name]))];
let longestName = names.reduce((a, b) => a.length > b.length ? a : b);
//flatMap takes the array object, in this case options.value and puts all the name information and puts it into a singular array. This then allows me to pull from particular sections for ease.
const pokemonNames = option.map(o => {
      return `<div class="poke_choices" id="${o.name}"><b style="font-size: 18px;">${o.name}</b><br>${o.types[0]}, ${o.types[1]}, Height: ${o.height}m, Weight: ${o.weight}kg</div>`;
      });

//small design checks to make it easier to follow which options are currently available.
checkButton.disabled = true;
checkButton.style.opacity = "0.5";
resetButton.style.opacity = "0.5";
textInput.disabled = true;

for (let el of pokemonList) el.style.display = "none";

function genChecker() {
  return Number(currentGenCheck.value);
}

function pokemonOptions() {
  options = option.filter((el) => el.generation <= genChecker());
  console.log(options.length);
}

function startNewGame() {
   resetGame();
   textInput.disabled = false;
   startBtn.style.opacity = "0.5";
   startBtn.disabled = true;
   checkButton.style.opacity = "1.0";
   checkButton.disabled = false;
   resetButton.style.opacity = "1.0";
   resetButton.disabled = false;
   result.style.backgroundColor = "";
   result.style.border = "";
   currentGenCheck.disabled = true;
   pokemonOptions(); //assigns what pokemon go into the options array based on the generation picked
 //CHEATSHEET:
 //Gen1 - 151
 //Gen1to2 - 251
 //Gen1to3 - 386
   let pType1 = [...new Set(options.flatMap((o) => [o.types[0]]))]
   let pType2 = [...new Set(options.flatMap((o) => [o.types[1]]))]
   let poke = options[Math.floor(Math.random() * options.length)]; //assigns a new pokemon to be guessed
   currentPokemon = poke;
   currentPokemonName = currentPokemon.name;
   activeType1 = currentPokemon.types[0];
   activeType2 = currentPokemon.types[1];
   activeHeight = currentPokemon.height;
   activeWeight = currentPokemon.weight;
   currentType1 = document.getElementById("type-1");
   currentType2 = document.getElementById("type-2");
   currentHeight = document.getElementById("height");
   currentWeight = document.getElementById("weight");
   console.log(currentPokemonName);
};

checkButton.addEventListener("click",() => {
  const regex = /[!@#$%^&*()',.?":{}|<>0-9]/ig;
  let textGuess = textInput.value.replace(regex,"");
  let textSort = textGuess.toLowerCase();
  let textArr = textSort.charAt(0).toUpperCase() + textSort.slice(1).trim();
  //allows for the guess to work regardless of how the guess was punctuated, as long as it is spelt correctly. 1MaChO2Ke! === Machoke, so it will work
  myList.style.display = "none";
  
  if (textArr === "") {
   alert("Please input a valid Pokémon name")  //stops null values
   } else if (textArr === currentPokemonName) {
     result.innerText = `${textArr} is correct! You win!`; //win condition met
     for (let i = 0; i < pokemonTypeColors.length; i++) {
       if (pokemonTypeColors[i].name === currentPokemon.types[0]) {
         result.style.backgroundColor = `${pokemonTypeColors[i].color}`;
         result.style.border = "2px solid #fff";
       }
     }
     document.getElementById("check-btn").disabled = true;
     startBtn.disabled = false;
     startBtn.style.opacity = "1.0";
     checkButton.style.opacity = "0.5";
     currentGenCheck.disabled = false;
     document.getElementById("type-1").hidden = false;
     document.getElementById("type-2").hidden = false;
     document.getElementById("height").hidden = false;
     document.getElementById("weight").hidden = false;
     currentGuess.innerHTML += "<div class='guess'>" + `${textArr}` + "</div>" + '\n';
     currentType1.innerHTML += "<div class='guess'>" + `${currentPokemon.types[0]}` + " " + "(✓)" + "</div>";
     currentType2.innerHTML += "<div class='guess'>" + `${currentPokemon.types[1]}` + " " + "(✓)" + "</div>";
     currentHeight.innerHTML += "<div class='guess'>" + `${currentPokemon.height}` + `m` + "</div>";
     currentWeight.innerHTML += "<div class='guess'>" + `${currentPokemon.weight}` + `kg` + "</div>";
     
   for (let i = 0; i < iconsList.length; i++) {
     if (activeType1 !== iconsList[i] && activeType2 !== iconsList[i]) {
       typeIcons[i].style.backgroundColor = "Grey";
       } else if (activeType1 === iconsList[i] && activeType2 === iconsList[i]) {
         iconsList[currentPokemon.types[0]].style.backgroundColor != "Grey";
         iconsList[currentPokemon.types[1]].style.backgroundColor != "Grey";
       } 
     }
     //will display correct attributes on correct guess.
   } else if (remainGuesses === 0) {
     result.innerText = `Game over. The correct answer was ${currentPokemonName}!`; //game over
     for (let i = 0; i < pokemonTypeColors.length; i++) {
       if (pokemonTypeColors[i].name === currentPokemon.types[0]) {
         result.style.backgroundColor = `${pokemonTypeColors[i].color}`;
         result.style.border = "2px solid #fff";
       }
     }
     document.getElementById("maxGuesses").innerHTML = 0;
     document.getElementById("check-btn").disabled = true;
     textInput.disabled = true;
     startBtn.disabled = false;
     startBtn.style.opacity = "1.0";
     checkButton.style.opacity = "0.5";
     currentGenCheck.disabled = false;
      } else if (remainGuesses > 0 && textArr !== currentPokemonName) {   //will update based on incorrect guess 
      for (let i = 0; i < options.length; i++) {
        if (textArr === options[i].name && `${textArr}` !== currentPokemonName) {    //checks for an incorrct guess match
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
        : options[i].weight < currentPokemon.weight ? options[i].weight + "kg " + "(↑)" : options[i].weight === currentPokemon.weight ? options[i].weight + "kg " + "(✓)"
        : options[i].weight  + "kg " + "(X)";
      //Using a ternary conditional operator to make conditions for each outcome.
          
       //will update each of the categories depending on whether or not that particular guess is right or not.
        document.getElementById("type-1").hidden = false;
        document.getElementById("type-2").hidden = false;
        document.getElementById("height").hidden = false;
        document.getElementById("weight").hidden = false;
        currentGuess.innerHTML += "<div class='guess'>" + `${textArr}` + "</div>" + '\n';
        currentType1.innerHTML += "<div class='guess'>" + `${type1}` + "</div>" + '\n';
        currentType2.innerHTML += "<div class='guess'>" + `${type2}` + "</div>" + '\n';
        currentHeight.innerHTML += "<div class='guess'>" + `${height}` + "</div>" + '\n';
        currentWeight.innerHTML += "<div class='guess'>" + `${weight}` + "</div>" + '\n';

        for (let i = 0; i < iconsList.length; i++) {
          let currentPokemonGuess = options.find(({name}) => name === textArr);
          let currentPokemonGuessInfo = JSON.stringify(currentPokemonGuess);
          let currentPokemonGuessTypesInfo = JSON.parse(currentPokemonGuessInfo);
          let currentPokemonGuessType1 = currentPokemonGuessTypesInfo.types[0];
          let currentPokemonGuessType2 = currentPokemonGuessTypesInfo.types[1];
//Shows Object OBJECT string info of current guess.
//JSON.stringify takes all elements and puts them into a string so the code can read it
//JSON.parse converts text into a readable JS object but using .types[x] i am able to target specific info     
     
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
  });//above code checks and updates the relevant info according to each guess
  

  function resetGame() {    // resets all parameters for a fresh game.
 
   startBtn.style.opacity = "1.0";
   startBtn.disabled = false;
   checkButton.disabled = true;
   checkButton.style.opacity = "0.5";
   resetButton.disabled = true;
   resetButton.style.opacity = "0.5";
   result.style.backgroundColor = "";
   result.style.border = "";
   currentGenCheck.disabled = false;
   document.querySelectorAll("iconsList").hidden = true;
   document.getElementById("maxGuesses").innerHTML = 5;
   result.innerText = "";
   document.getElementById("check-btn").disabled = false;
   document.getElementById("text-input").value = "";
   document.getElementById("currentGuess").value = "";
   document.getElementById("type-1").hidden = true;
   document.getElementById("type-2").hidden = true;
   document.getElementById("height").hidden = true;
   document.getElementById("weight").hidden = true;
   remainGuesses = 4;
   currentType1.innerText = "";
   currentType2.innerText = "";
   currentHeight.innerText = "";
   currentWeight.innerText = "";
   currentGuess.innerText = "";
   for (let i = 0; i < iconsList.length; i++) {
      document.querySelectorAll('.types')[i].style.backgroundColor = "";
    }
   pokemonOptions();
}   


myList.addEventListener("click", (e) => {
 if (e.target.classList.contains("poke_choices")) {
   const id = e.target.id;
   textInput.value = id;
   myList.style.display = "none";
  }   /*targets all valid items with the matching className, takes their id to apply & style them dynamically,
        this allows the user to click the box with their desired pokemon name instead of having to type the whole word out.*/
})

function datalistMatch(e) {   //This checks for any Pokemon name that matches what the user types and updates the dropdown list options in real time.
  let a = document.createElement("div");
  for (let i = 0; i < options.length; i++) {
    let dropdown = document.createElement("div");
    let val = textInput.value;
    let pkmnName = options[i].name;
    let pkmnMatches = pkmnName.substr(0, val.length).toUpperCase() == val.toUpperCase() ? 1 : 0
    let pkmnChars = pkmnName.split(" ");
      for (let j = 0; j < pkmnChars.length; j++) {
        pkmnMatches += pkmnChars[j].substr(0, val.length).toUpperCase() == val.toUpperCase() ? 1 : 0
    }
    if (textInput.value === "") {
      myList.style.display = "none";
    }
     if (pkmnMatches > 0 && textInput.value !== "") {
        myList.style.display = "block";
        dropdown.setAttribute("id", pkmnName);
        dropdown.setAttribute("class", "poke_choices");
        let index = pkmnName.toLowerCase().indexOf(val.toLowerCase())
        dropdown.innerHTML = `<b style="font-size: 16px;">${pkmnName}</b>` + "<br>" + `${options[i].types[0]}, ${options[i].types[1]}, Height: ${options[i].height}m, Weight: ${options[i].weight}kg`; 
       } else if (pkmnMatches == 0) {
         for (const m of myList.children) {
           myList.removeChild(m);
         }
      } dropdown.innerHTML += "<input type='hidden' value='pkmnName'>";
        a.appendChild(dropdown);
        myList.appendChild(a);
    } 
}
