const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  age: {
    type: Number
  }
})

module.exports = userSchema