const { v4: uuidv4 } = require('uuid');

const podcastQuiz2Data = {
    quizName:"Get Started with Podcast",
    quizDetails: {
    noOfQuestions: 9,
    difficulty: "Easy",
    timeForEachQues: 15,
    totalPoints: 45,
    },

   questions: [
     {
      id:uuidv4(),
      points: 5,
      negativePoints:2,
      question: "In 2005 Apple introduced Podcasts into which version of iTunes?",

      options: [
        {
          answer:
            "4.9",
          isRight: true
        },
        {
          answer: "4.8",
          isRight: false
        },
        {
          answer: "5.0",
          isRight: false
        },
        {
          answer: "5.3",
          isRight: false
        }
      ]
    },

    {
      id:uuidv4(),
      points: 5,
      negativePoints:2,
      question: "Podsafe music means?",

      options: [
        {
          answer:
            "Any work which, through its licensing allows its usage",
          isRight: true
        },
        {
          answer: "Audio which contains no malware",
          isRight: false
        },
        {
          answer: "Contains no foul language",
          isRight: false
        },
        {
          answer: "All of above",
          isRight: false
        }
      ]
    },


     {
      id:uuidv4(),
      points: 5,
      negativePoints:2,
      question: "What company invented the mp3 technology?",

      options: [
        {
          answer:
            "Google",
          isRight: false
        },
        {
          answer: "Fraunhofer-Gesellshaft",
          isRight: true
        },
        {
          answer: "Apple",
          isRight: false
        },
        {
          answer: "Bose",
          isRight: false
        }
      ]
    },


    {
      id:uuidv4(),
      points: 5,
      negativePoints:2,
      question: "In what year did the first portable MP3 players appear?",

      options: [
        {
          answer:
            "2000",
          isRight: false
        },
        {
          answer: "1999",
          isRight: true
        },
        {
          answer: "1998",
          isRight: false
        },
        {
          answer: "2002",
          isRight: false
        }
      ]
    },

    {
      id:uuidv4(),
      points: 5,
      negativePoints:2,
      question: "The term Podcasting was first mentioned by who?",

      options: [
        {
          answer:
            "Leo Laporte",
          isRight: false
        },
        {
          answer: "Jake Butterfield",
          isRight: false
        },
        {
          answer: "Ben Hammersley",
          isRight: true
        },
        {
          answer: "Fraunhofer",
          isRight: false
        }
      ]
    },

    {
      id:uuidv4(),
      points: 5,
      negativePoints:2,
      question: "What is an ID3 tag?",

      options: [
        {
          answer:
            "Meta data container",
          isRight: true
        },
        {
          answer: "Used in enhacning sound",
          isRight: false
        },
        {
          answer: "Unique Id",
          isRight: false
        },
        {
          answer: "None of these",
          isRight: false
        }
      ]
    },


    {
      id:uuidv4(),
      points: 5,
      negativePoints:2,
      question: "Who is the author of the RSS format ?",

      options: [
        {
          answer:
            "Dave Winer",
          isRight: true
        },
        {
          answer: "Adam Carolla",
          isRight: false
        },
        {
          answer: "Douglas Engelbart",
          isRight: false
        },
        {
          answer: "Leo Laporte",
          isRight: false
        }
      ]
    },

    {
      id:uuidv4(),
      points: 5,
      negativePoints:2,
      question: "What was the first ever podcast?",

      options: [
        {
          answer:
            "A daily podcast about life and ethics",
          isRight: false
        },
        {
          answer: "A series of interviews on blogging and politics.",
          isRight: true
        },
        {
          answer: "A series of interviews on blogging and politics.",
          isRight: true
        },
        {
          answer: "A daily podcast on coding",
          isRight: false
        }
      ]
    },




    
   ]



}

module.exports = podcastQuiz2Data;
