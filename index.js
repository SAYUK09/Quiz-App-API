const express = require('express');
const app = express();

const mongoose = require("mongoose")
require("dotenv")

const bodyParser = require('body-parser')
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())


const quiz1route = require("./Routes/quiz1.route")

const quiz2route = require("./Routes/quiz2.route")

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

app.use("/quiz1", quiz1route)
app.use("/quiz2", quiz2route)
