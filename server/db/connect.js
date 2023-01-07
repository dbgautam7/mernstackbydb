const mongoose=require('mongoose')

require('dotenv').config({path:"./config.env"})
const dbUrl=process.env.DB

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connection successful")
  })
    .catch((error) => {
      console.log(error)
    })