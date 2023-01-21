const seed = [
    {
        title: "Risk",
        players: 6,
        releaseYear: "1957",
        avgTime: 5,
        minAge: 10,
        image: "https://www.ultraboardgames.com/risk/gfx/board.jpg",
        description: "In the Risk game, the goal is simple: players aim to conquer their enemies' territories by building an army, moving their troops in, and engaging in battle. Depending on the roll of the dice, a player will either defeat the enemy or be defeated.",
        owner: "63cbc48cef01ad5a7d4ce4ae"
    },
    {
        title: "Chess",
        players: 2,
        releaseYear: "200 BC",
        avgTime: 30,
        minAge: 13,
        description: "Chess is a game played between two opponents on opposite sides of a board containing 64 squares of alternating colors. Each player has 16 pieces: 1 king, 1 queen, 2 rooks, 2 bishops, 2 knights, and 8 pawns. The goal of the game is to checkmate the other king.",
        owner: "63cbc48cef01ad5a7d4ce4ae"
    },
    {
        title: "Catan",
        players: 6,
        releaseYear: "1995",
        avgTime: 60,
        minAge: 10,
        image: "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017228588-1200-face3d.jpg",
        description: "Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag (Kosmos) as Die Siedler von Catan.",
        owner: "63cbc48cef01ad5a7d4ce434f"
    },
    {
        title: "La Oca", 
        players: 2, 
        releaseYear: "2000 bC", 
        avgTime: 60, // tiempo medio de partida en minutos
        minAge: 4, // edad mínima para jugar
        image: "https://www.entreletras.eu/wp-content/uploads/2022/Temas/Juego-de-Karpa-ca.-1950.jpg",
        description: "La Oca is a board game for two or more players. Each player rolls a dice and advances his token (according to the number obtained) on a board in the shape of a snail with 63 squares (or more), with drawings. Depending on the square in which it falls, it is possible to advance or, on the contrary, to go backwards, and in some of them a punishment or a prize is indicated. On his turn, each player rolls 1 or 2 dice (depending on the different versions) that indicate the number of squares he must advance. The first player to reach square 63, 'the garden of the goose', wins the game.",
        owner: "63cbc63f17a8265752f16f90"
    },
    {
        title: "Monopoly",
        players: 8,
        releaseYear: "1903",
        avgTime: 1.5,
        minAge: 8,
        image: "https://www.hasbro.com/common/productimages/en_US/7EABAF9750569047F5778F4663C79E75/EF59533085A7483EA573ABD71A769D85.jpg",
        description: "Monopoly is a real-estate board game for two to eight players. The player's goal is to remain financially solvent while forcing opponents into bankruptcy by buying and developing pieces of property. Bankruptcy results in elimination from the game. The last player remaining on the board is the winner.",
        owner: "63cbc48cef01ad5a7d4ce4ae"
    },
    {
        title: "UNO",
        players: 10,
        releaseYear: "1971",
        avgTime: 15,
        minAge: 8,
        description: "UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.",
        owner:"63cbc48cef01ad5a7d4ce4ae"
    },
    {
        title: "Poker",
        players: 5,
        releaseYear: "1937",
        avgTime: 60,
        minAge: 15,
        image: "https://play-lh.googleusercontent.com/8FbbqSFnBmQOejVmkMU04HBGhgiesuuJI7VKSH5wHIAVyK2tSzzzagAawWm-PzpggeX7",
        description: "Poker is a family of comparing card games in which players wager over which hand is best according to that specific game's rules. It is played worldwide, however in some places the rules may vary.",
        owner: "63cbc48cef01ad5a7d4ce4574f"
    },
    {
        title: "Parchis",
        players: 4,
        releaseYear: "1950",
        avgTime: 60,
        minAge: 10,
        image: "https://www.65ymas.com/uploads/s1/15/68/71/el-parchis-tambien-se-juega-en-app-sabes-como.jpeg",
        description: "Parchís is a Spanish board game of the Cross and Circle family.[1] It is an adaptation of the Indian game Pachisi. Parchís was a very popular game in Spain at one point as well as in Europe and north Morocco - specifically Tangiers and Tetouan, and it is still popular especially among adults and seniors",
        owner: "63cbc48cef01ad5a7d4ce4574f"
    },
    {
        title: "The Mind", 
        players: 4, 
        releaseYear: "2018", 
        avgTime: 20,
        minAge: 8,
        description: "A game of cards numbered 1-100, and during the game you try to complete 12, 10, or 8 levels of play with 2, 3, or 4 players. In a level, each player receives a hand of cards equal to the number of the level: one card in level 1, two cards in level 2, etc. Collectively you must play these cards into the center of the table on a single discard pile in ascending order but you cannot communicate with one another in any way as to which cards you hold.",
        owner:  "63cbc48cef01ad5a7d4ce4ae",
    },
    {
        title: "Scrabble",
        players: 4,
        releaseYear: "1938",
        avgTime: 60,
        minAge: 10,
        image: "https://img.freepik.com/fotos-premium/scrabble-board-game-word-scrabble-mosaicos-letras-estante-mosaicos-tablero-juego_121826-714.jpg?w=2000",
        description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board; words spelled out by letters on the tiles interlock like words in a crossword puzzle.",
        owner: "63cbc48cef01ad5a7d4ce434f"
    }
]

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const MONGO_URI = process.env.MONGODB_URI || "mongodb+srv://admin:admin@nakurudb.mxestn8.mongodb.net/nakuruDB";
const Boardgame = require("../models/Boardgames");

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo for seeding! Database name: "${x.connections[0].name}"`);
  })
  .then(() => 
    Boardgame.deleteMany({})
  )
  .then(() => 
    Boardgame.create(seed)
  )
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });