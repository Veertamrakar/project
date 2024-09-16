// script.js
document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');
    const resultsDisplay = document.getElementById('resultsDisplay');

    if (quizForm) {
        quizForm.addEventListener('submit', function (e) {
            console.log('Submit event triggered!');
            e.preventDefault();

            let score = 0;
            const correctAnswers = ['B', 'C', 'A', 'A', 'C', 'B', 'B', 'A', 'A', 'B'];

            // Check for unanswered questions
            const unanswered = [...Array(10).keys()].some(i => !document.querySelector(`input[name="q${i + 1}"]:checked`));
            if (unanswered) {
                alert('Please answer all questions before submitting.');
                return;
            }

            // Calculate score
            for (let i = 1; i <= 10; i++) {
                const answer = document.querySelector(`input[name="q${i}"]:checked`);
                if (answer && answer.value === correctAnswers[i - 1]) {
                    score++;
                }
            }

            console.log('Before setting local storage');
            localStorage.setItem('quizScore', score);
            console.log('Before redirecting to results page');
            window.location.href = "results.html";
        });
    }

    if (resultsDisplay) {
        const score = localStorage.getItem('quizScore');
        if (score) {
            if(score<4)
            {
                let img=document.createElement('img');
                img.src="try.png";
                document.getElementById("im").appendChild(img);
                img.style.borderRadius="3em";
                img.style.border="solid black 3px";
                img.style.width="60%%";
                img.style.padding="auto";
                img.style.display="block";
            }
            else if(score>=4 && score<=6)
            {
                let img=document.createElement('img');
                img.src="better.jpg";
                document.getElementById("im").appendChild(img);
                img.style.borderRadius="3em";
                img.style.border="solid black 3px";
                img.style.width="40%%";
                img.style.padding="auto";
                img.style.display="block";
            }
            else if(score>=7 && score<=9)
            {
                let img=document.createElement('img');
                img.src="per.png";
                document.getElementById("im").appendChild(img);
                img.style.borderRadius="3em";
                img.style.border="solid black 3px";
                img.style.width="39%%";
                img.style.padding="auto";
                img.style.display="block";
            }
            else{
                let img=document.createElement('img');
                img.src="excel.jpg";
                document.getElementById("im").appendChild(img);
                img.style.borderRadius="3em";
                img.style.border="solid black 3px";
                img.style.width="40%%";
                img.style.padding="auto";
                img.style.display="block";
            }
            resultsDisplay.textContent = `You scored ${score} out of 10.`;
        } 
        else {
            resultsDisplay.textContent = "No score available.";
        }
    }
});
