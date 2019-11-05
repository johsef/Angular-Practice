const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
 
  name :{
    type: String
  },
  age :{
    type: Number
  },
  phonenumber: {
    type:Number
  },
  level: {
    type: Number
  },
  Degree_Programme: {
    type: String
  },
  e_mail: {
    type: String
  },
  gender: {
    type: String
  },
  location: {
    address:{type: String},
    town:{type: String},
    state:{type: String}
  },
  website: {
    type: String
  }
},
  {
    collection: 'students'
  }
)

schema.set('toJSON', {virtuals: true})

module.exports = mongoose.model('DB', schema)
