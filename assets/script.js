document.getElementById('btn-start').addEventListener('click', ()=>{
    //document.getElementById('timer');
    var counterVal = 30;
    timer=setInterval(function() {
        counterVal=counterVal-1;
        console.log(counterVal)
        if(counterVal==0) {
            clearInterval(timer);
        }
    }, 1000)
})

var myQuestions = [
    {
        question: "What language primary customizes webpage's?",
        answers: {
            A: 'CSS ',
            B: 'HTML ',
            C: 'JavaScript '
        },
        correctAnswer: 'A'
    },

    {
        question: "Which language let's you interact with webpage's?",
        answers: {
            A: 'HTML ',
            B: 'JavaScript ',
            C: 'CSS '
        },
        correctAnswer: 'B'
    },

    {
        question: "How do you create files on git?",
        answers: {
            A: 'git commit -m ',
            B: 'git add ',
            C: 'touch '
        },
        correctAnswer: 'C'
    },

    {
        question: "Commonly referred to as a collection of items stored at contigous memory locations is an example of?",
        answers: {
            A: 'Array ',
            B: 'Boolean ',
            C: 'Function '
        },
        correctAnswer: 'A'
    },

    {
        question: "how do you create a variable using JavaScript?",
        answers: {
            A: 'If ',
            B: 'Var ',
            C: 'For '
        },
        correctAnswer: 'B'
    }
];

  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      var output = [];
      var answers;
  
     for(var i=0; i<questions.length; i++){
        
        answers = [];
  
        for(letter in questions[i].answers){
  
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }