const form = document.querySelector('form');
const checkBtn = document.querySelector('button[type=submit]');
const restartBtn = document.querySelector('button.restart-quiz');
const resultBox = document.querySelector('.result');

console.log(resultBox);

// LOAD QUIZ FOROM .JSON FILE
const reqQuiz = new XMLHttpRequest();

reqQuiz.open('GET', '/quizes(json)/iodine.json');

reqQuiz.onload = function () {
  const quizContent = JSON.parse(reqQuiz.responseText);
  // console.log(quizContent);

  //DISABLE QUIZ RESTARTING BUTTON
  restartBtn.disabled = true;

  let outputQ = '';

  //CREATE QUIZBOX WITH ANSWERS INSIDE IT
  quizContent.forEach(function (questions, qNumber) {
    // console.log(questions.answers);

    outputQ += `<div class="question-box">
    <h6> ${questions.questionName} </h6>
    `;

    //GET ANSWERS IDs
    let outputA = '';
    for (letter in questions.answers) {
      outputA += `<label>
                    <div class='single-choice-box'>
                      <input type='radio' name='${qNumber + 1}' value='${letter}' id='${letter}'>
                        <p> ${questions.answers[letter]} </p>
                      <span class="input-box"> </span>
                    </div>
                  </label>
                  `;
    }

    outputQ += `<div class='choices-box'> ${outputA} </div>`;
    outputQ += `</div>`;
    form.innerHTML = outputQ;
  });

  //COUNT THE AMOUNT OF CORRECT ANSWERS
  checkBtn.addEventListener('click', function (e) {
    e.preventDefault();

    countTrue = 0;
    countFalse = 0;

    let availableAnswers = document.querySelectorAll('div.question-box');
    let selectedAnswers = document.querySelectorAll('input[type=radio]:checked');

    //CHECK IF ALL QUESTIONS ARE ANSWERED
    if ((availableAnswers.length !== selectedAnswers.length)) {
      window.alert('Пожалуйста, ответьте на все вопросы');
    } else {

      //LOOP THROUGH THIS CHOICES
      for (let i = 0; i < selectedAnswers.length; i++) {
        if ((selectedAnswers[i].value === quizContent[i].correct)) {
          countTrue += 1;
        } else {
          countFalse += 1;
        };

        //SHOW FINAL RESULT --- CORRECT AND INCORRECT ANSWERS INCLUDED
        let output = `Ваш результат ${countTrue} из ${availableAnswers.length}.`;
        resultBox.innerHTML = output;

        restartBtn.disabled = false;
        checkBtn.disabled = true;
      }

    }

  });

};

reqQuiz.send();
