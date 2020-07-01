 // Model
 function Question(imagem,stem, choices, answer) {
  this.imagem = imagem;
  this.stem = stem;
  this.choices = choices;
  this.answer = answer
}

Question.prototype.checkAnswer = function(choice) {
  return (choice === this.answer);
}

// Controller

function Quiz(questionList) {
  this.score = 0;
  this.questionList = questionList;
  this.questionNo = 0;
};

Quiz.prototype.getCurrentQuestion = function() {
  return this.questionList[this.questionNo];
};

Quiz.prototype.isEnded = function() {
  return this.questionNo == this.questionList.length;
};

Quiz.prototype.evaluateAnswer = function(answer) {
  if (this.getCurrentQuestion().checkAnswer(answer)) {
    this.score++;
  };
  this.questionNo++;
}

// View

function populate() {
  if (quiz.isEnded()) {
      modal.style.display = "block";
  } else {
    var element = document.getElementById('imagem');
    element.innerHTML = quiz.getCurrentQuestion().imagem;

    var element = document.getElementById('stem');
    element.innerHTML = quiz.getCurrentQuestion().stem;

    
    for (i = 0; i < quiz.getCurrentQuestion().choices.length; i++) {
      var element = document.getElementById('option' + i);
      element.innerHTML = quiz.getCurrentQuestion().choices[i];
      checkAnswer('option' + i, quiz.getCurrentQuestion().choices[i]);
      recordProgress();
    };
  }
};

function showScores() {
  var scoreString = "<div class='pontos'><h1>Sua pontuação é...</h1>";
  scoreString += "<h3>" + quiz.score + "0</h3>";
  scoreString += "<p>0 a 30 - É melhor você avisar aos familiares que precisa maratonar no fim de semana para saber mais sobre esses filmes! <br />30 a 60 - Você mostrou que sabe do assunto, mas ainda pode melhorar!<br />70 a 90 - Sabe muito! Você é definitivamente engajado e quase gabaritou nosso teste.<br />100 - Nota 100! Você é incrível! Uma mistura de maratoneiro com Spike Lee!<br /><br />E você sabe quais são as semelhanças de todas essas obras?<br />Todas estão disponíveis no Amazon Prime Video!<br />Por R$9,90, você tem acesso a todos esses conteúdos! <br />E também frete grátis em compras pela Amazon, outros benefícios como músicas, e-books, revistas, jogos e muito mais!</p></div>"
  var element = document.getElementById('quiz-area');
  element.innerHTML = scoreString;

};

function checkAnswer(htmlId, answer) {
  var element = document.getElementById(htmlId);
  element.onclick = function() {
    quiz.evaluateAnswer(answer);
    populate();
  };
};

function setProgressBar() {
  var element = document.getElementById('progress');
  element.setAttribute('max', quiz.questionList.length);
};

function recordProgress() {
  var element = document.getElementById('progress');
  element.setAttribute('value', quiz.questionNo);
}

var questions = [
  new Question("<img src='images/filme0.jpg' />","Esse cartaz é de qual filme?", ["Lisístrata", "Irmãs de Sangue", "Black Legion", "CHI-RAQ", "Não sei"], "CHI-RAQ"),
  new Question("<img src='images/filme1.jpg' />","Esse cartaz é de qual filme?", ["Tropa de Elite", "Cidade de Deus", "Pixote", "Cidade dos Homens", "Não sei"], "Cidade de Deus"),
  new Question("<img src='images/filme2.jpg' />","Esse cartaz é de qual filme?", ["Fruitvale Station", "Freedom Song", "Luta por Justiça", "Os últimos passos de um Homem", "Não sei"], "Fruitvale Station"),
  new Question("<img src='images/filme3.jpg' />","Esse cartaz é de qual filme?", ["Amigos para Sempre", "Moonlight", "O Reencontro", "Green Book", "Não sei"], "Green Book"),
  new Question("<img src='images/filme4.jpg' />","Esse cartaz é de qual filme?", ["Whiplash", "Guava Island", "Music of the Sun", "La La Land", "Não sei"], "Guava Island"),
  new Question("<img src='images/filme5.jpg' />","Esse cartaz é de qual filme?", ["O Grande Hotel Budapeste", "Hotel Artemis", "Hotel Rwanda", "Hotel Marigold", "Não sei"], "Hotel Rwanda"),
  new Question("<img src='images/filme6.jpg' />","Esse cartaz é de qual filme?", ["ALI", "Touro Indomável", "A Maior Luta de Muhammad Ali", "Eu Sou Ali: A História de Muhammad Ali", "Não sei"], "ALI"),
  new Question("<img src='images/filme7.jpg' />","Esse cartaz é de qual filme?", ["Timbuktu", "Virunga", "Zaatari", "Makala", "Não sei"], "Makala"),
  new Question("<img src='images/filme8.jpg' />","Esse cartaz é de qual filme?", ["Um Sonho de Liberdade", "Malcom X", "Hurricane - O Furacão", "Um Ato de Coragem", "Não sei"], "Malcom X"),
  new Question("<img src='images/filme9.jpg' />","Esse cartaz é de qual filme?", ["Entrevista com Dr. Martin Luther King Jr.", "Selma: Uma Luta pela Igualdade", "Eu Não Sou Seu Negro", "O Ódio que Você Semeia"], "Entrevista com Dr. Martin Luther King Jr.")

]

 var quiz = new Quiz(questions);

populate();
setProgressBar();

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks on submit, close the modal
function endModal() {
modal.style.display = "none";
}
