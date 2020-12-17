// LOAD QUIZ FROM .JSON FILE USING PARCEL
import quizContent from "../../quizes_json/carbs.json";

//  GET HTML ELEMENTS
const main = document.querySelector("main");
const form = document.querySelector("form");
const checkBtn = document.querySelector("button[type=submit]");
const restartBtn = document.querySelector("button.restart-quiz");
const body = document.querySelector("body");

//DISABLE QUIZ RESTARTING BUTTON
restartBtn.disabled = true;

let outputQ = "";

//CREATE QUIZBOX WITH ANSWERS INSIDE IT
quizContent.forEach(function (questions, qNumber) {
  outputQ += `<div class="question-box">
  <h6> ${questions.questionName} </h6>
  `;

  //GET ANSWERS IDs
  let outputA = "";
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
checkBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let countTrue = 0;
  let countFalse = 0;

  let availableAnswers = document.querySelectorAll("div.question-box");
  let selectedAnswers = document.querySelectorAll("input[type=radio]:checked");

  //CHECK IF ALL QUESTIONS ARE ANSWERED
  if (availableAnswers.length !== selectedAnswers.length) {
    alertOnOff('<p class="info-box-text"> Пожалуйста, ответьте на все вопросы. </p>');
  } else {
    //CREATE RESULTBOX CONTAINER
    const resultBox = document.createElement("div");
    resultBox.className = "result";
    main.appendChild(resultBox);

    //LOOP THROUGH THIS CHOICES
    for (let i = 0; i < selectedAnswers.length; i++) {
      if (selectedAnswers[i].value === quizContent[i].correct) {
        countTrue += 1;
        availableAnswers[i].style.borderLeft = "3px solid #136F63";
      } else {
        countFalse += 1;
        availableAnswers[i].style.borderLeft = "3px solid #A22C29";
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

restartBtn.addEventListener("click", function (e) {
  //REMOVE RESULT CONTAINER
  const resultBox = document.querySelector(".result");
  resultBox.remove();

  // MAKING CHECK BUTTON AVAILABLE
  checkBtn.disabled = false;

  // RESESTING RESULTING
  const choicesRadio = document.querySelectorAll("input[type=radio]");
  choicesRadio.forEach(function (input, index) {
    input.checked = false;
  });

  //DISABLE RESULT BUTTON
  restartBtn.disabled = true;

  //REMOVING WRONG/CORRECT LEFT BORDER OF QUESTION-BOXES
  const availableAnswers = document.querySelectorAll("div.question-box");
  availableAnswers.forEach(function (question, index) {
    question.style.borderLeft = "0px ";
  });
});

// ALERT BUTTONS

function alertOnOff(txt) {
    // ELEMENT CREATING
    let divHoverMain = document.createElement('div');
    divHoverMain.className = 'info-main';

    let divHover = document.createElement('div');
    divHover.className = 'hover';

    let infoBox = document.createElement('div');
    infoBox.className = 'info-box';

    infoBox.innerHTML = txt;

    let buttonInfoBox = document.createElement('button');
    buttonInfoBox.className = 'info-box-button';
    buttonInfoBox.textContent = 'OK!';
    
    // CREATED ELEMENTS APPENDING
    body.appendChild(divHoverMain);
    divHoverMain.appendChild(divHover);
    divHoverMain.appendChild(infoBox);
    infoBox.appendChild(buttonInfoBox);

    //MAIN ACTIONS
    divHover.addEventListener('click', function(){
        body.removeChild(divHoverMain);
    });
    buttonInfoBox.addEventListener('click', function(){
        body.removeChild(divHoverMain);
    });
    
    // SOME STYLING
    divHover.addEventListener('mouseover', function(e) {
        divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.3)';
        divHover.style.cursor = 'pointer';
    });
    divHover.addEventListener('mouseout', function(e) {
        divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.9)';
    });

    buttonInfoBox.addEventListener('mouseover', function(e) {
        divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.3)';

    });
    buttonInfoBox.addEventListener('mouseout', function(e) {
        divHover.style.backgroundColor = 'rgba(237, 237, 237, 0.9)';
    });
};
