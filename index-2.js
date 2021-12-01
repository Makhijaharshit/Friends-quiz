
var readlineSync = require('readline-sync')
var userName= readlineSync.question('may i have your name ?')
console.log(userName);
var welcomeMessage = "Welcome "+ userName;
console.log(welcomeMessage)
var score=0
function play(question,answer){
var userAnswer=readlineSync.question(question)
if (userAnswer===answer){
console.log("you are correct")
score=score+1
console.log("your score is: "+score)
}else{
  console.log("you are wrong")
  console.log("your score is: "+score)
}
}
var questions=[{
question:"Where do i live",
answer:"indore"
},{
  question:"what is my age",
  answer:"15"
},{
question:"my favorite sport",
answer:"Cricket"
},{
  question:"my favorite games",
  answer:"BGMI and minecraft"
},{
  question:"my favorite ipl team is?",
  answer:"Mumbai indians"
}]
for(var i=0;i<questions.length;i++){
  currentQuestion=questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("your final score is "+ score)