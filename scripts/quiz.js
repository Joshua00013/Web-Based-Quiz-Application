document.getElementById("quizForm").addEventListener("submit",submitAnswer);
let questions=[
    {
        "question":"What is your favorite food",
        "options":["Pizza","Graham","Burger","Hotdogs"],
        "correct": 0
    },
    {
        "question":"What is your favorite food",
        "options":["Pizza","Graham","Burger","Hotdogs"],
        "correct": 0
    }
];

let questionIndex = 0;
let score = 0;

function loadQuestion(){
    //this function iterates through the questions array one by one.
    //use DOM to manipulate the quiz.html and iterate into the contents of the questions array.
    //compare the current index to the length of the questions array. Stop when done iterating through all questions and display scores.
    if(questionIndex > questions.length){
        window.location.href="./finished.html"
    }

    const question = questions[questionIndex];

    console.log("Page Loaded!");
};

function submitAnswer(event){
    //listen for the submit button to be clicked
    //record the value of the choice into a variable
    //compare the values of the choice and the correct answer (access it using the correct: index value)
    //add a conditional that adds up the score when correct and increase the question index to let the program
    //know to move on to the next question.

    console.log("Submitted!");
    questionIndex = ++questionIndex
    loadQuestion();
};

//load the first question on page load
loadQuestion();



// Optional: Ilagay sa json file yung contents ng question array. Access gamit yung code below :)
// Load the json file into the javacript. Fetching returns a response. We need to convert
// the response into a javascript object using .json() in order to use it. Await tells the code
// to wait until the fetch request is finished.

//Async functions allows us to use await.


// async function loadQuestions(){
//     const response = await fetch('questions.json');
//     const questions = await response.json();


// }

// questions = loadQuestions();
// console.log(questions);