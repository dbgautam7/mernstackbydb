const express = require('express')
const router = express.Router();
const connect = require('../db/connect')
const User = require('../model/userSchema')

router.get('/', (req, res) => {
    res.send("Server router is done")
})

router.post('/register', (req, res) => {
    const { name, email, phone, work, password, confirmPassword } = req.body

    if (!name || !email || !phone || !work || !password || !confirmPassword) {
        return res.status(400).json({ Error: "Please fill the form properly" })
    }
    User.findOne({ email: email })
        .then((userExists) => {
            if (userExists) {
                return res.status(406).json("User already exists")
            }
        })

    const user = new User({ name, email, phone, work, password, confirmPassword })
    user.save().then(() => {
        res.status(200).json({ message: "User is registered successfully" })
    }).catch((error) => {
        res.status(400).json({ error: "Failed to register" })
    }).catch(error=>console.log(error))

    // console.log(password)
    // res.send("Data sent successfully")
    // res.json({message:req.body})
})

module.exports = router;