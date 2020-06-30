            // Model
            function Question(stem, choices, answer) {
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
                var scoreString = "<h1>Sua pontuação é...</h1>";
                scoreString += "<h3>" + quiz.score + "0</h3>";
                scoreString += "<p>0 a 30 - É melhor você avisar aos familiares que precisa maratonar no fim de semana para saber mais sobre esses filmes! <br />30 a 60 - Você mostrou que sabe do assunto, mas ainda pode melhorar!<br />70 a 90 - Sabe muito! Você é definitivamente engajado e quase gabaritou nosso teste.<br />100 - Nota 100! Você é incrível! Uma mistura de maratoneiro com Spike Lee!<br /><br />E você sabe quais são as semelhanças de todas essas obras?<br />Todas estão disponíveis no Amazon Prime Video!<br />Por R$9,90, você tem acesso a todos esses conteúdos! <br />E também frete grátis em compras pela Amazon, outros benefícios como músicas, e-books, revistas, jogos e muito mais!</p>"
//                scoreString += "<div id='refresh' class='refresh'>Re-take Quiz</div>"
                var element = document.getElementById('quiz-area');
                element.innerHTML = scoreString;

//               var reTake = document.getElementById('refresh');
//                reTake.onclick = function() {
//                  refresh()
//                }
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

              function refresh() {
                var renewHTML = '<div class="quiz" id="quiz-area"><div class="stem" id="stem"></div><div class="choice-flexbox"><div class="options" id="option0"></div><div class="options" id="option1"></div><div class="options" id="option2"></div><div class="options" id="option3"></div><div class="options" id="option4"></div></div>	<div class="progress"><div><progress id="progress" max="100" value="0"></progress></div><div>Your progress</div></div></div>'
                var element = document.getElementById('wrap');
                element.innerHTML = renewHTML

                quiz.score = 0;
                quiz.questionNo = 0;
                populate();
                setProgressBar();
              }

              var questions = [
                new Question("Which of the following pumps blood?", ["Spleen", "Lung", "Bone", "Heart", "Kidney"], "Heart"),
                new Question("Which of the following has four legs?", ["Man", "Goat", "Fish", "Spider", "Pumpkin"], "Goat"),
                new Question("Which is the least populated country in the world?", ["Italy", "Greece", "Ecuador", "Vatican City", "Ethiopia"], "Vatican City"),
                new Question("Which planet is closest to the sun?", ["Venus", "Mars", "Mercury", "Jupiter", "Saturn"], "Mercury"),
                new Question("Which is the fastest animal on the land?", ["Mouse", "Lion", "Cheetah", "Road Runner", "Wolf"], "Cheetah")
              

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
