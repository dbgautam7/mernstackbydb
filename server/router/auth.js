const express = require('express')
const router = express.Router();
const connect = require('../db/connect')
const User = require('../model/userSchema')
const bcrypt=require("bcryptjs")

router.get('/', (req, res) => {
    res.send("Server router is done")
})

//using async await promises
//for register
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, confirmPassword } = req.body

    if (!name || !email || !phone || !password || !confirmPassword) {
        return res.status(400).json({ Error: "Please fill the form properly" })
    }  //work is optional here

    try {
        
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.status(406).json("Email already existed")
        }else if(password!==confirmPassword){
            return res.status(406).json("Password and Confirm Password are not matched")
        }else{
            const userDetails = new User({ name, email, phone, work, password, confirmPassword })
            await userDetails.save()//this code save the userdetails in db
            res.status(200).json({ message: "User is registered successfully" })
        }
        }
        
    catch (error) {
        console.log(error)
    }
})

//using .then promises
// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, confirmPassword } = req.body

//     if (!name || !email || !phone || !password || !confirmPassword) {
//         return res.status(400).json({ Error: "Please fill the form properly" })
//     }  //work is optional here
//     User.findOne({ email: email })
//         .then((userExists) => {
//             if (userExists) {
//                 return res.status(406).json("User already exists")
//             }
//         })

//     const user = new User({ name, email, phone, work, password, confirmPassword })
//     user.save().then(() => {
//         res.status(200).json({ message: "User is registered successfully" })
//     }).catch((error) => {
//         res.status(400).json({ error: "Failed to register" })
//     }).catch(error=>console.log(error))

//     // console.log(password)
//     // res.send("Data sent successfully")
//     // res.json({message:req.body})
// })


//for signin

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if email or password is missing
      if (!email || !password) {
        res.status(400).json("Both email and password must be filled");
        return;
      }
  
      // Find user with the given email
      const user = await User.findOne({ email });
  
      // If no user was found, return an error
      if (!user) {
        res.status(406).json("Invalid email");
      }
  
      // Check if the passwords match
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (isMatch) {
        res.status(200).json({ message: "User signin successfully" });
      } else {
        res.status(406).json("Invalid password");
      }
    } catch (error) {
      console.log(error);
    }
  });
  
module.exports = router;