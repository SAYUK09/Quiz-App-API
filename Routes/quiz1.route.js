const express = require("express");
const router = express.Router();

const quizData = require("../QuizData/quiz1.data");

router.route("/").get(async(req,res)=>{
  res.send(quizData)
});

module.exports = router