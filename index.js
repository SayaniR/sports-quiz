var readlineSync=require('readline-sync');
var chalk=require('chalk');

var userName=readlineSync.question("Hello! What is your name? ");
console.log("Welcome to the game ", chalk.red.underline(userName));

var score=0;

var highScore={
  name:"Sayani ",
  score: "10"
}

function play(question, answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.green.bold("Correct Answer! "));
    score=score+1;
  }
  else
  {
    console.log(chalk.red.bold("Incorrect Answer! "));
  }
  console.log("-----------------");
}

var questions=[{
  question:"How many medals did India win at the Tokyo Paralympics 2020? ",
  answer:"19"
},
{
  question:"Which individual has the maximum number of Olympic medals? ",
  answer:"Michael phelps"
},  
{
  question:"How many medals has the above person won? ",
  answer:"28"
},
{
  question:"Are Olympic gold medals actually made of gold? ",
  answer:"no"
},
{
  question:"How many gold medals has India won in the Olympics? ",
  answer:"10"
},
{
  question:"Which sport does P.V. Sindhu play? ",
  answer:"Badminton"
},
{
  question:"Is Mirabai Chanu a wrestler or weightlifter? ",
  answer:"Weightlifter"
},
{
  question:"Where will the 2024 Olympics be held? ",
  answer:"paris"
},
{
  question:"Which country hoested the first ever Olympic games? ",
  answer:"Greece"
},
{
  question:"Which sport does Dipa Karmakar play? ",
  answer:"Gymnastics"
}
];


for(var i=0; i<questions.length;i++)
{
  play(questions[i].question, questions[i].answer);
}


console.log(chalk.magenta("The highest score is ", highScore.name, "-",highScore.score));
console.log("Your score is ", score);
if(score>=highScore.score)
{
  console.log(chalk.cyan("Yay! You have set a new high score!"));
  console.log("Send a screenshot and I'll update your name");
}