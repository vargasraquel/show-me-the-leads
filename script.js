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
  new Question("<img src='images/filme0.jpg' />","Qual o filme e o Diretor deste filme, onde as mulheres de Chicago fizeram greve de sexo até que as gangues larguem suas armas?", ["Filme Lisístrata e Diretor Spike Lee", "Filme Irmãs de Sangre e Diretor Barry Jenkins", "Filme Black Legion e Diretor Jordan Peele", "Filme CHI-RAQ e Diretor Spike Lee"], "Filme CHI-RAQ e Diretor Spike Lee"),
  new Question("<img src='images/filme1.jpg' />","Qual o filme e o Diretor deste filme, que conta a história do personagem Buscapé?", ["Filme Tropa de Elite e Diretor José Padilha", "Filme Cidade de Deus e Diretor Fernando Meireles", "Filme Pixote e Diretor Héctor Babenco", "Filme Cidade dos Homens e Diretor Jorge Furtado"], "Filme Cidade de Deus e Diretor Fernando Meireles"),
  new Question("<img src='images/filme2.jpg' />","Qual o filme e o Ator principal, que interpreta Oscar Grant, jovem de 22 anos, morto por policiais no último dia do ano de 2008 em Oakland? ", ["Filme Fruitvale Station e Ator Michael B. Jordan", "Filme Freedom Song Ator Danny Glover", "Filme Luta por Justiça e Ator Jamie Foxx", "Filme Os últimos passos de um Homem e Ator Laurence Fishbourne"], "Filme Fruitvale Station e Ator Michael B. Jordan"),
  new Question("<img src='images/filme3.jpg' />","Qual o filme e o Ator coadjuvante que ganhou dois Óscares, em 2017 e 2019? ", ["Filme Amigos para Sempre e ator coadjuvante Kevin Hart", "Filme Moonlight e ator coadjuvante Maheshala Ali", "Filme O Reencontro e ator coadjuvante Morgan Freeman", "Filme Green Book e ator coadjuvante Mahershala Ali"], "Filme Green Book e ator coadjuvante Mahershala Ali "),
  new Question("<img src='images/filme4.jpg' />","Qual o filme e a atriz principal, que traz uma crítica ao sistema que vê a arte como um inimigo?", ["Filme Whiplash e Atriz Principal Danai Gurira", "Filme Guava Island e Atriz Principal Rihanna", "Filme Music of the Sun e Atriz Principal Letitia Wright", "Filme La La Land e Atriz Principal Lupita Nyong’o"], "Filme Guava Island e Atriz Principal Rihanna"),
  new Question("<img src='images/filme5.jpg' />","Qual o título e o Diretor deste filme que conta como Paul Rusesabagina conseguiu manter a salvo 1268 pessoas dentro de um hotel.", ["Filme O Grande Hotel Budapeste e Diretor Wes Anderson", "Filme Hotel Artemis e Direção Drew Pearce", "Filme Hotel Rwanda e Diretor Terry George", "Filme Hotel Marigold e Diretor John Madden"], "Filme Hotel Rwanda e Diretor Terry George"),
  new Question("<img src='images/filme6.jpg' />","Qual o título e o Diretor deste filme que conta a história de Cassius Clay, personalidade do boxe nos anos 60.", ["Filme ALI e Diretor Michael Mann", "Filme Touro Indomável e Diretor Martin Scorsese", "A Maior Luta de Muhammad Ali e Diretor Stephen Frears", "Eu Sou Ali: A História de Muhammad Ali e Diretor Clare Lewins"], "Filme ALI e Diretor Michael Mann"),
  new Question("<img src='images/filme7.jpg' />","Qual o título e o Diretor deste filme que escancara a realidade dos habitantes de povoados da África, que precisam percorrer grandes distâncias para vender seus produtos. ", ["Filme Timbuktu e Diretor Abderrahmane Sissako", "Filme Virunga e Diretor Orlando von Einsiedel", "Filme Zaatari e Diretor Paschoal Samora", "Filme Makala e Diretor Emmanuel Gras"], "Filme Makala e Diretor Emmanuel Gras"),
  new Question("<img src='images/filme8.jpg' />","Qual o título e o diretor deste filme que traz a biografia de um dos principais ativistas pela luta dos afro-americanos por direitos civis?", ["Filme Um Sonho de Liberdade e Diretor Frank Darabont", "Filme Malcom X e Diretor Spike Lee", "Filme Hurricane - O Furacão e diretor Norman Jewison", "Filme Um Ato de Coragem e Diretor Nick Cassavetes"], "Filme Malcom X e Diretor Spike Lee"),
  new Question("<img src='images/filme9.jpg' />","Qual o título do filme?", ["Filme Entrevista com Dr. Martin Luther King Jr.", "Filme Selma: Uma Luta pela Igualdade", "Filme Eu Não Sou Seu Negro", "Filme O Ódio que Você Semeia"], "Filme Entrevista com Dr. Martin Luther King Jr.")

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
