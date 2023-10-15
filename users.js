const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})
mongoose.connection.on("connected",()=>{
  console.log("connected sucessfully");
})
module.exports = mongoose.model('User', userSchema)