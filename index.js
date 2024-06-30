const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())


app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
// const mongoose=require('mongoose')
const DB='mongodb+srv://Jeevitha:jeevitha@cluster0.0rkh96c.mongodb.net/'  
mongoose.connect(DB,{
    useNewUrlParser:true,
    
}).then(() =>{
    console.log('Database connected..')
})