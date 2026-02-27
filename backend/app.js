const express = require('express')
const dotenv = require('dotenv')
dotenv.config();

const app = express()
app.use(express.json())

const port = process.env.PORT;

const projects = [{title:"Stock price predictions using Sentiment Analysis", domain:"Machine Learning"}, {title:"Smart Attendance Dashboard", domain:"Data Science"}, {title:"Geo-Aware Remote Sensing Image Captioning", domain:"Machine Learning"}]

app.get('/', (req, res) => {
    res.send('Backend is running ✅')
})

app.get('/projects', (req, res) => {
    res.json(projects)
    //res.send('Projects ✅')
})

app.listen(port, (req, res) => {
    console.log(`Server online ✅ on port ${port}`)
});