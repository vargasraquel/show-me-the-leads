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
  new Question("<img src='images/filme0.jpg' />","Esse cartaz é de qual filme?", ["Filme Lisístrata", "Filme Irmãs de Sangue", "Filme Black Legion", "Filme CHI-RAQ", "Não sei"], "Filme CHI-RAQ"),
  new Question("<img src='images/filme1.jpg' />","Esse cartaz é de qual filme?", ["Filme Tropa de Elite", "Filme Cidade de Deus", "Filme Pixote", "Filme Cidade dos Homens", "Não sei"], "Filme Cidade de Deus"),
  new Question("<img src='images/filme2.jpg' />","Esse cartaz é de qual filme?", ["Filme Fruitvale Station", "Filme Freedom Song", "Filme Luta por Justiça", "Filme Os últimos passos de um Homem", "Não sei"], "Filme Fruitvale Station"),
  new Question("<img src='images/filme3.jpg' />","Esse cartaz é de qual filme?", ["Filme Amigos para Sempre", "Filme Moonlight", "Filme O Reencontro", "Filme Green Book", "Não sei"], "Filme Green Book"),
  new Question("<img src='images/filme4.jpg' />","Esse cartaz é de qual filme?", ["Filme Whiplash", "Filme Guava Island", "Filme Music of the Sun", "Filme La La Land", "Não sei"], "Filme Guava Island"),
  new Question("<img src='images/filme5.jpg' />","Esse cartaz é de qual filme?", ["Filme O Grande Hotel Budapeste", "Filme Hotel Artemis", "Filme Hotel Rwanda", "Filme Hotel Marigold", "Não sei"], "Filme Hotel Rwanda"),
  new Question("<img src='images/filme6.jpg' />","Esse cartaz é de qual filme?", ["Filme ALI", "Filme Touro Indomável", "A Maior Luta de Muhammad Ali", "Eu Sou Ali: A História de Muhammad Ali", "Não sei"], "Filme ALI"),
  new Question("<img src='images/filme7.jpg' />","Esse cartaz é de qual filme?", ["Filme Timbuktu", "Filme Virunga", "Filme Zaatari", "Filme Makala", "Não sei"], "Filme Makala"),
  new Question("<img src='images/filme8.jpg' />","Esse cartaz é de qual filme?", ["Filme Um Sonho de Liberdade", "Filme Malcom X", "Filme Hurricane - O Furacão", "Filme Um Ato de Coragem", "Não sei"], "Filme Malcom X"),
  new Question("<img src='images/filme9.jpg' />","Esse cartaz é de qual filme?", ["Filme Entrevista com Dr. Martin Luther King Jr.", "Filme Selma: Uma Luta pela Igualdade", "Filme Eu Não Sou Seu Negro", "Filme O Ódio que Você Semeia"], "Filme Entrevista com Dr. Martin Luther King Jr.")

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
