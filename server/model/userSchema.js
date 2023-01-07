const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required:true
  },
  work: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return value === this.password;
      },
      message: 'Passwords do not match'
    }
  }
},{collection:'users'});

const User=mongoose.model('User', userSchema);
module.exports = User
