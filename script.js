document.getElementById('showAnswers').addEventListener('click', function () {
  const answers = document.querySelectorAll('.answer');
  answers.forEach(function (answer) {
    answer.classList.toggle('visible');
  });
});