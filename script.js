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
    };
  }
};

function showScores() {
  var scoreString = "<div class='pontos'><h1>Sua pontuação é...</h1>";
  scoreString += "<h3>" + quiz.score + "0</h3>";
 if (quiz.score < 3) { 
  scoreString += "<p>É melhor você avisar aos familiares que precisa maratonar no fim de semana para saber mais sobre esses filmes! </p><div class='amazon'><p>E você sabe quais são as semelhanças de todas essas obras? Todas abordam este tema tão importante! <br />E para facilitar sua vida, vai aí uma dica: Todos estão listados lá na Amazon Prime Video, onde super indicamos!</p></div></div>";
 } else if (quiz.score < 6) {
  scoreString += "<p>Você mostrou que sabe do assunto, mas ainda pode melhorar!</p><div class='amazon'><p>E você sabe quais são as semelhanças de todas essas obras? Todas abordam este tema tão importante! <br />E para facilitar sua vida, vai aí uma dica: Todos estão listados lá na Amazon Prime Video, onde super indicamos!</p></div></div>";
 } else if (quiz.score < 9) {
  scoreString += "<p>Sabe muito! Você é definitivamente engajado e quase gabaritou nosso teste.</p><div class='amazon'><p>E você sabe quais são as semelhanças de todas essas obras? Todas abordam este tema tão importante! <br />E para facilitar sua vida, vai aí uma dica: Todos estão listados lá na Amazon Prime Video, onde super indicamos!</p></div></div>";
 } else {
  scoreString += "<p>Nota 100! Você é incrível! Uma mistura de maratoneiro com Spike Lee!</p><div class='amazon'><p>E você sabe quais são as semelhanças de todas essas obras? Todas abordam este tema tão importante! <br />E para facilitar sua vida, vai aí uma dica: Todos estão listados lá na Amazon Prime Video, onde super indicamos!</p></div></div>";
 }
 
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


var questions = [
  new Question("<img src='images/filme0.jpg' />","Qual é o filme em que as mulheres de Chicago fizeram greve de sexo até que as gangues largassem suas armas? ", ["Lisístrata", "Irmãs de Sangue", "Black Legion", "CHI-RAQ", "Não sei"], "CHI-RAQ"),
  new Question("<img src='images/filme1.jpg' />","Qual é o filme que foi indicado ao Oscar em quatro categorias e retrata a vida em uma das favelas mais perigosas do Rio de Janeiro?", ["Tropa de Elite", "Cidade de Deus", "Pixote", "Cidade dos Homens", "Não sei"], "Cidade de Deus"),
  new Question("<img src='images/filme2.jpg' />","Qual é o filme que conta a história de Oscar Grant, jovem de 22 anos, morto por policiais no último dia do ano de 2008 em Oakland?", ["Fruitvale Station", "Freedom Song", "Luta por Justiça", "Os últimos passos de um Homem", "Não sei"], "Fruitvale Station"),
  new Question("<img src='images/filme3.jpg' />","Qual é o filme em que dois homens desenvolvem uma ligação inesperada ao enfrentar o racismo e os perigos de uma era de segregação racial?", ["Amigos para Sempre", "Moonlight", "O Reencontro", "Green Book", "Não sei"], "Green Book"),
  new Question("<img src='images/filme4.jpg' />","Qual é o filme, que tem a cantora Rihanna no elenco e traz uma crítica ao sistema que julga a arte como inimiga?", ["Whiplash", "Guava Island", "Music of the Sun", "La La Land", "Não sei"], "Guava Island"),
  new Question("<img src='images/filme5.jpg' />","Qual é o filme que conta como Paul Rusesabagina conseguiu manter à salvo 1268 pessoas dentro de um hotel?", ["O Grande Hotel Budapeste", "Hotel Artemis", "Hotel Rwanda", "Hotel Marigold", "Não sei"], "Hotel Rwanda"),
  new Question("<img src='images/filme6.jpg' />","Qual é o filme que conta a história de Cassius Clay, personalidade do boxe nos anos 60?", ["ALI", "Touro Indomável", "A Maior Luta de Muhammad Ali", "Eu Sou Ali: A História de Muhammad Ali", "Não sei"], "ALI"),
  new Question("<img src='images/filme7.jpg' />","Qual é o filme que escancara a realidade de povoados da África, onde os habitantes precisam percorrer grandes distâncias para vender seus produtos?", ["Timbuktu", "Virunga", "Zaatari", "Makala", "Não sei"], "Makala"),
  new Question("<img src='images/filme8.jpg' />","Qual é o filme que traz a biografia de um dos principais ativistas pela luta dos afro-americanos por direitos civis?", ["Um Sonho de Liberdade", "Malcom X", "Hurricane - O Furacão", "Um Ato de Coragem", "Não sei"], "Malcom X"),
  new Question("<img src='images/filme9.jpg' />","Qual é o filme que fez com que o presidente Kennedy se posicionasse quanto à segregação racial nos Estado Unidos?", ["Entrevista com Dr. Martin Luther King Jr.", "Selma: Uma Luta pela Igualdade", "Eu Não Sou Seu Negro", "O Ódio que Você Semeia"], "Entrevista com Dr. Martin Luther King Jr.")

]

 var quiz = new Quiz(questions);

populate();

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks on submit, close the modal
function endModal() {
modal.style.display = "none";
}
