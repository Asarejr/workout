require ('dotenv').config()
const express = require('express');
const workoutRoutes = require("./routes/workouts");
const mongoose  = require('mongoose');


const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts/', workoutRoutes)

// connect to mongodb
mongoose.connect(process.env.MONG_URI)
    .then(() =>{
        // listen to request
        app.listen(process.env.PORT, () => {
        console.log('Connected to DB & listening on', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})
