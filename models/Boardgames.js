const mongoose = require('mongoose');
const { Schema } = mongoose;

const BoardgameSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please write the game's title"]
    },
  players: {
    type: Number,
    required: [true, 'Please add a number of players']
    },
  releaseYear: {
    type: String
  },
  avgTime: {
    type: Number
  },
  minAge: {
    type: Number
   },
  image: {
    type: String,
    default: "https://st2.depositphotos.com/17287688/42645/v/450/depositphotos_426450622-stock-illustration-doodle-seamless-pattern-with-dice.jpg"
  },
  description: {
    type: String
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
},
  {
    timestamps: true
  });

const Boardgame = mongoose.model('Boardgame', BoardgameSchema);

module.exports = Boardgame;