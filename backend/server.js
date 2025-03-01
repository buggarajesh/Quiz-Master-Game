const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoute = require('./routes/User')
const examQuestionsRoute = require('./routes/ExamQuestions')
const userExamsRoute = require('./routes/UserExams')
const examRoute = require('./routes/Exam')
const router = require('./routes/User')
require('dotenv').config()



app.use(cors())
app.use('/api', router)
app.use(bodyParser.json())

mongoose.connect(process.env.DATABASE_ACCESS).then(data => {
    console.log("connected to DB")
}).catch(error => {
    console.log(error)
})

app.get("/", (req,res) => {
    res.json("hello");
})

app.use('/users', userRoute)
app.use('/examquestions', examQuestionsRoute)
app.use('/exam', examRoute)
app.use('/userexams', userExamsRoute)

app.listen(3000, () => {
    console.log('Server started on 3000')
})



