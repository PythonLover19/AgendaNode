const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  nombre: String,
  telefono: Number,
  status: {
    type: Boolean,
    default: false
  }
 
});

module.exports = mongoose.model('users', UserSchema);
