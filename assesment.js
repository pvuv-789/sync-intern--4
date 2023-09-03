document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

   
    const correctAnswers = {
        q1: 'c',
        q2: 'b',
      
    };

    
    let score = 0;
    const userAnswers = {};

    
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        const questionNumber = index + 1;
        const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            userAnswers[`q${questionNumber}`] = userAnswer;
            if (userAnswer === correctAnswers[`q${questionNumber}`]) {
                score++;
            }
        }
    });

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>You scored ${score} out of ${questions.length} questions correctly.</p>`;
});
