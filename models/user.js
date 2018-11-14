const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  dateBirth: {
    type: String,
  },
  address: {
    street: {
      type: String
    },
    number: {
      type: Number,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
  }
}, { timestamps: true });

// Model
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;