const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a username'],
    },
  lastName: {
    type: String,
    required: [true, 'Please add a username'],
    },
  phone: {
    type: Number
  },
  city: {
    type: String
  },
   age: {
    type: Number
   },
  username: {
    type: String,
    required: [true, 'Please add a username'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please add a valid email'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  hashedPassword: {
    type: String,
    required: [true, 'Please add a password']
  }
},
  {
    timestamps: true
  });

const User = mongoose.model('User', userSchema);

module.exports = User;