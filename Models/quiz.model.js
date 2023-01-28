const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
    category:{type:String,required:true},
    type:{type:String,required: true},
    question: {type:String, required: true},
    correct_answer: {type:String,required: true},
    incorrect_answers: [{type:String}]
})

const quizModel = mongoose.model("quiz",quizSchema)

module.exports= quizModel

// "category": "Entertainment: Film",
//       "type": "multiple",
//       "difficulty": "easy",
//       "question": "In &quot;ALF&quot;, what was ALF&#039;s real name?",
//       "correct_answer": "Gordon Shumway",
//       "incorrect_answers": [
//         "Gordon Milipp",
//         "Gordon Foster",
//         "Gordon von Gam"
//       ]