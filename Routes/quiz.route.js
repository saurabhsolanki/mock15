const { Router } = require("express");
const quizModel = require("../Models/quiz.model");
const app = Router();

app.get("/", async (req, res) => {
  const{page=1,limit=1,orderBy="id",order="asc"}=req.query
  try {
    let quizdata = await quizModel.find().skip((page-1)*limit)
    .limit(limit);
    res.send({ message: "signups", data: quizdata });
  } catch (e) {
    console.log(e);
  }
});
app.post("/", async (req, res) => {
  try {
    let quizdata = await quizModel.create(req.body);
    res.send({ message: "signups", data: quizdata });
  } catch (e) {
    console.log(e);
  }
});


module.exports=app
