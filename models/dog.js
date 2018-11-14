const mongoose = requiere('mongose');

const Schema = mongoose.Schema;

const DogSchema = new Schema({
  name:{
    type: String,
  },
  race:{
    type: String,
  },
  age:{
    type: Number
  },
  size:{
    type: String
  },
  medicalInfo:{
    type: String
  },
  dateBirth:{
    type: String
  },
  color:{
    type: String
  }
}, { timestamps: true });

// Model
const DogModel =mongoose.model('Dog', DogSchema);
module.exports = DogModel;