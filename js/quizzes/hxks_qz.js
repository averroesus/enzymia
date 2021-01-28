// LOAD QUIZ FROM .JSON FILE USING PARCEL
import quizContent from '../../quizes_json/hxks.json';
import { alertOnOff } from '../index/index.js';
import images from '../../img/*.svg';

//  GET HTML ELEMENTS
const main = document.querySelector('main');
const form = document.querySelector('form');
const checkBtn = document.querySelector('button[type=submit]');
const restartBtn = document.querySelector('button.restart-quiz');
const body = document.querySelector('body');

//DISABLE QUIZ RESTARTING BUTTON
restartBtn.disabled = true;

let outputQ = '';

//CREATE QUIZBOX WITH ANSWERS INSIDE IT
quizContent.forEach(function (questions, qNumber) {
  outputQ += `<div class="question-box">
      <div class='question-name-box'> 
        <h6> ${questions.questionName} </h6>
      </div>
  `;

  //GET ANSWERS IDs
  let outputA = '';
  for (let letter in questions.answers) {
    outputA += `<label>
                  <div class='single-choice-box'>
                    <input type='radio' name='${
                      qNumber + 1
                    }' value='${letter}' id='${letter}'>
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

  let countTrue = 0;
  let countFalse = 0;

  let availableAnswers = document.querySelectorAll('div.question-box');
  let selectedAnswers = document.querySelectorAll('input[type=radio]:checked');

  // selectedAnswers.forEach((answer) => {
  //   const someSpan = document.createElement('span');
  //   someSpan.textContent = 'Ваш выбор';
  //   answer.parentNode.appendChild(someSpan);
  // });

  //CHECK IF ALL QUESTIONS ARE ANSWERED
  if (availableAnswers.length == selectedAnswers.length) {
    alertOnOff(
      '<p class="info-box-text"> Пожалуйста, ответьте на все вопросы. </p>'
    );
  } else {
    //CREATE RESULTBOX CONTAINER
    const resultBox = document.createElement('div');
    resultBox.className = 'result';
    main.appendChild(resultBox);

    // LOOP THROUGH ALL OF THE QUESTION NAMES TO APPEND EXPLAIN BTN
    const allQuestions = document.querySelectorAll('.question-name-box');
    allQuestions.forEach(function (exactQuestion, index) {
      //CREATE EXPALAIN CONTAINTER AND BUTTON FOR CHECKING THE EXPALNATION
      const explainBtn = document.createElement('button');
      explainBtn.type = 'button';
      explainBtn.className = `button-explain`;
      explainBtn.id = `${index}`;
      const infoImg = document.createElement('img');
      infoImg.src = images['info-square'];

      //CHILDREN NESTING CREATED ELEMENTS
      explainBtn.appendChild(infoImg);

      //APPENDING CREATED EXPLANATION BTN INTO DOM
      exactQuestion.appendChild(explainBtn);
    });

    // SELECTING CREATED BUTTONS AND QUESTION BOXES
    const allExplainBtns = document.querySelectorAll('.button-explain');
    const allExplainBtnsArray = Array.from(allExplainBtns);
    const allQuestionBoxes = document.querySelectorAll('.question-box');
    const allQuestionBoxesArray = Array.from(allQuestionBoxes);

    // LOOPING THROUGH ALL OF THE QUESTIONS
    for (let i = 0; i < allExplainBtns.length; i++) {
      let clickCount = true;
      function appendExplanation() {
        if (clickCount) {
          //SET CLICKCOUNT TO CONTROL ON/OFF DISPLAYING
          clickCount = false;
          // explainCont.style.display === 'block';
          const explainCont = document.createElement('div');
          explainCont.className = 'explain-cont';
          const explainP = document.createElement('p');
          explainP.innerText = quizContent[i].explanation;
          explainCont.appendChild(explainP);
          allQuestionBoxesArray[i].appendChild(explainCont);
          console.log(clickCount);
        } else {
          clickCount = true;
          //THE FOLLOWING ONE DOESN'T WORK CAUSE NO ELEMENT DELETING INSIDE DOM
          // document.querySelector('.explain-cont').style.display = 'none';

          //THIS DOES WORK CAUSE HERE WE DELETE ELEMENT IN THE DOM
          allQuestionBoxes[i].removeChild(
            document.querySelector('.explain-cont')
          );
          console.log(clickCount);
        }
        // console.log(clickCount);
      }

      allExplainBtns[i].addEventListener('click', appendExplanation);
    }

    //LOOP THROUGH THIS CHOICES
    for (let i = 0; i < selectedAnswers.length; i++) {
      if (selectedAnswers[i].value === quizContent[i].correct) {
        countTrue += 1;
        availableAnswers[i].style.border = '4px solid rgba(19, 111, 99, 0.3)';
      } else {
        countFalse += 1;
        availableAnswers[i].style.border = '4px solid rgba(162, 44, 41, 0.3)';
      }

      //SHOW FINAL RESULT --- CORRECT AND INCORRECT ANSWERS INCLUDED
      let output = `Ваш результат ${countTrue} из ${availableAnswers.length}.`;
      resultBox.innerHTML = output;

      restartBtn.disabled = false;
      checkBtn.disabled = true;
    }
  }
});

// RESTARTING THE QUIZ
restartBtn.addEventListener('click', function (e) {
  //REMOVE RESULT CONTAINER
  const resultBox = document.querySelector('.result');
  resultBox.remove();

  // MAKING CHECK BUTTON AVAILABLE
  checkBtn.disabled = false;

  // RESESTING RESULTING
  const choicesRadio = document.querySelectorAll('input[type=radio]');
  choicesRadio.forEach(function (input, index) {
    input.checked = false;
  });

  //DISABLE RESULT BUTTON
  restartBtn.disabled = true;

  //REMOVING WRONG/CORRECT LEFT BORDER OF QUESTION-BOXES
  const availableAnswers = document.querySelectorAll('div.question-box');
  availableAnswers.forEach(function (question, index) {
    question.style.borderLeft = '0px ';
  });
});
