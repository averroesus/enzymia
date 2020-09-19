var box = document.getElementsByClassName('question-box');

const reqQuiz = new XMLHttpRequest();
reqQuiz.open('GET', '/quizes(json)/quiz1.json');
reqQuiz.onload = function () {
  const quizContent = JSON.parse(reqQuiz.responseText);
  console.log(quizContent);
};

reqQuiz.send();

console.log('hello');
