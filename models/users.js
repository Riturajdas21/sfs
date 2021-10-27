const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    phone: Number

})

module.exports = mongoose.model('users',userSchema)