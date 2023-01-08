const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

userSchema.pre('save', async function(next) { //this is middleware that is executed before save method
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  if (this.isModified('confirmPassword')) {
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
  }
  next();
});

const User=mongoose.model('User', userSchema);
module.exports = User
