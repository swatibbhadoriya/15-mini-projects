const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High-level Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a programming language?",
        options: ["HTML", "CSS", "JavaScript", "XML"],
        correctAnswer: 2,
      },
      {
        question: "What is the purpose of CSS?",
        options: ["To provide structure to web documents", "To define the layout and style of web documents", "To handle server-side logic", "To store data on the client-side"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'HTTP' acronym stand for in website addresses?",
        options: ["HyperText Transfer Protocol", "HyperText Text Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol"],
        correctAnswer: 0,
      },
      {
        question: "Which JavaScript keyword is used to declare a variable?",
        options: ["var", "let", "const", "variable"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following tags is used to link an external CSS file to an HTML document?",
        options: ["<style>", "<link>", "<css>", "<script>"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'alt' attribute in an HTML image tag?",
        options: ["To provide alternative text for browsers that cannot display the image", "To define the image source", "To set the alignment of the image", "To create a tooltip for the image"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, what is the purpose of the 'typeof' operator?",
        options: ["To check if a variable is defined", "To determine the type of a variable", "To convert a variable to a string", "To compare two variables"],
        correctAnswer: 1,
      },
      {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["color", "text-color", "font-color", "foreground-color"],
        correctAnswer: 0,
      },
      {
        question: "What does the acronym 'AJAX' stand for?",
        options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Asynchronous JSON and XML", "All JavaScript and XML"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'DOM' stand for in web development?",
        options: ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Document Order Model"],
        correctAnswer: 0,
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<hlink>", "<url>"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the 'box-sizing' property in CSS?",
        options: ["To set the size of the container box", "To define the margin of the box", "To include/exclude padding and border in the total width/height of an element", "To add a shadow around the box"],
        correctAnswer: 2,
      },
      {
        question: "What is a 'callback function' in JavaScript?",
        options: ["A function that is called automatically", "A function passed as an argument to another function and executed later", "A function that returns another function", "A function that is defined inside another function"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a CSS preprocessor?",
        options: ["Sass", "Java", "Python", "C++"],
        correctAnswer: 0,
      },
      {
        question: "What does the acronym 'API' stand for in web development?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Programming Interface", "Application Process Integration"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the 'localStorage' in JavaScript?",
        options: ["To store data in the server", "To store data on the client-side that persists even after the browser is closed", "To store temporary variables", "To store data in the cloud"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a front-end JavaScript framework?",
        options: ["React", "Node.js", "Express.js", "Django"],
        correctAnswer: 0,
      },
      {
        question: "What is the role of the 'viewport' meta tag in HTML?",
        options: ["To set the background color of the webpage", "To define the width and initial scale of the viewport", "To include external scripts in the HTML file", "To create responsive layouts"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'git' version control system?",
        options: ["To format web pages", "To manage and track changes in source code", "To create databases", "To design user interfaces"],
        correctAnswer: 1,
      },
      {
        question: "What does the acronym 'CSS' stand for?",
        options: ["Counter Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 2,
      },
      {
        question: "In JavaScript, what is a 'closure'?",
        options: ["A function that closes the program", "A way to prevent code execution", "A combination of a function and the lexical environment within which that function was declared", "A method to hide variables"],
        correctAnswer: 2,
      },
      {
        question: "Which HTML5 element is used for drawing graphics?",
        options: ["<draw>", "<graphic>", "<canvas>", "<paint>"],
        correctAnswer: 2,
      },
      {
        question: "What does 'AJAX' enable in web development?",
        options: ["Asynchronous file transfer", "Asynchronous JavaScript execution", "Asynchronous communication with the server", "Asynchronous page rendering"],
        correctAnswer: 2,
      },
      {
        question: "What is the purpose of the 'float' property in CSS?",
        options: ["To make an element float to the top of the page", "To move an element to the right or left, allowing text to flow around it", "To set the transparency of an element", "To control the font size of an element"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'box-shadow' property in CSS?",
        options: ["To add a shadow to text", "To create a shadow beneath an element", "To create a border around an element", "To change the color of an element"],
        correctAnswer: 1,
      },
      {
        question: "Which event is triggered when a user clicks on an HTML element?",
        options: ["onmouseover", "onclick", "onchange", "onsubmit"],
        correctAnswer: 1,
      },
      {
        question: "What is the significance of the 'async' attribute in script tags in HTML?",
        options: ["To indicate that the script should be executed asynchronously", "To indicate that the script is written in asynchronous JavaScript", "To create an asynchronous function in the script", "To include external stylesheets asynchronously"],
        correctAnswer: 0,
      },
      {
        question: "What does the term 'HTTP cookies' refer to in web development?",
        options: ["Small text files stored on the client's computer by the browser", "Server-side scripts written in HyperText Protocol", "A type of HTML element", "A method for compressing images in web pages"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is not a valid position value in CSS?",
        options: ["static", "relative", "absolute", "center"],
        correctAnswer: 3,
      },
      {
        question: "What is the purpose of the 'localStorage' in JavaScript?",
        options: [
          "To store data on the server",
          "To store data on the client-side that persists even after the browser is closed",
          "To store temporary variables",
          "To manage server-side sessions"
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the term 'Responsive Web Design' mean?",
        options: [
          "Designing websites that respond to voice commands",
          "Designing websites that respond to user interactions",
          "Designing websites that work well on a variety of devices and window or screen sizes",
          "Designing websites that respond to server requests"
        ],
        correctAnswer: 2,
      },
      {
        question: "In CSS, what does the 'z-index' property control?",
        options: [
          "The opacity of an element",
          "The stacking order of elements along the z-axis",
          "The rotation of an element",
          "The width of an element"
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the term 'AJAX' stand for in web development?",
        options: [
          "Asynchronous JavaScript and XML",
          "Advanced JavaScript and XML",
          "Asynchronous JSON and XML",
          "All JavaScript and XML"
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the 'DOCTYPE' declaration in HTML?",
        options: [
          "To define the document type and version of HTML",
          "To create a hyperlink to an external document",
          "To declare a variable in JavaScript",
          "To specify the background color of the webpage"
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the 'npm' command in Node.js?",
        options: [
          "To create a new project",
          "To install and manage project dependencies",
          "To execute JavaScript code in the browser",
          "To define the structure of an HTML document"
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the role of 'git' in version control?",
        options: [
          "To format web pages",
          "To manage and track changes in source code",
          "To create databases",
          "To design user interfaces"
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the acronym 'SPA' stand for in web development?",
        options: [
          "Single Page Application",
          "Server-side Processing Application",
          "Structured Programming Architecture",
          "Simple Programming Algorithm"
        ],
        correctAnswer: 0,
      },
      {
        question: "Which HTML tag is used to create a form in a webpage?",
        options: ["<form>", "<input>", "<button>", "<select>"],
        correctAnswer: 0,
      },
      {
        question: "What does the term 'Cross-Origin Resource Sharing (CORS)' refer to?",
        options: [
          "A method for compressing images in web pages",
          "A security feature that restricts webpages from making requests to a different domain",
          "A technique for creating responsive designs",
          "A type of database for web applications"
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'fetch' API in JavaScript?",
        options: [
          "To fetch data from a database",
          "To make asynchronous HTTP requests and handle responses",
          "To create animations on a webpage",
          "To define the font style in CSS"
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the term 'SEO' stand for in web development?",
        options: [
          "Simple Extension Optimization",
          "Search Engine Optimization",
          "Site Element Orientation",
          "Secure Endpoint Operation"
        ],
        correctAnswer: 1,
      },
      {
        question: "In CSS, what is the 'box model'?",
        options: [
          "A model for designing 3D graphics",
          "A model for managing file storage",
          "A layout model for block-level elements",
          "A model for handling user input"
        ],
        correctAnswer: 2,
      },
      {
        question: "What does the term 'MVC' stand for in web development architecture?",
        options: [
          "Model View Component",
          "Multi-Version Control",
          "Main View Controller",
          "Minimal Viable Code"
        ],
        correctAnswer: 0,
      },
      {
        question: "Which CSS property is used to control the spacing between lines of text?",
        options: ["text-spacing", "line-height", "letter-spacing", "word-spacing"],
        correctAnswer: 1,
      },
  ];

let currentQuestionIndex = 0;
let userSelectedOption = null;
let correctAnswers = 0;
let attempts = 0;
let askedQuestions = [];

function startQuiz() {
    document.getElementById("message-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function getRandomQuestionIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (askedQuestions.includes(randomIndex));
    askedQuestions.push(randomIndex);
    return randomIndex;
}

function loadQuestion() {
    if (askedQuestions.length === questions.length) {
        showScore();
        return;
    }

    const randomIndex = getRandomQuestionIndex();
    currentQuestionIndex = randomIndex;

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = currentQuestion.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option");
        optionDiv.innerText = option;
        optionDiv.setAttribute("data-index", index);
        optionDiv.onclick = checkAnswer;
        optionsContainer.appendChild(optionDiv);
    });

    resetUI();
}

function checkAnswer(event) {
    if (userSelectedOption !== null) {
        return;
    }

    const selectedOptionIndex = event.target.getAttribute("data-index");
    userSelectedOption = parseInt(selectedOptionIndex);

    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        if (index === userSelectedOption) {
            if (userSelectedOption === questions[currentQuestionIndex].correctAnswer) {
                option.style.backgroundColor = "#4caf50";
                correctAnswers++;
            } else {
                option.style.backgroundColor = "#ff5733";
                const correctOptionIndex = questions[currentQuestionIndex].correctAnswer;
                options[correctOptionIndex].style.backgroundColor = "#4caf50";
            }
            option.style.pointerEvents = "none";
        }
    });

    attempts++;

    if (attempts === 10) {
        showScore();
    } else {
        document.getElementById("next-button").style.display = "block";
    }
}

function loadNextQuestion() {
    currentQuestionIndex++;
    userSelectedOption = null;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        showScore();
    }
}

function showScore() {
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.innerHTML = `Your Score: ${correctAnswers} out of 10`;

    const playAgainButton = document.getElementById("play-again-button");
    playAgainButton.style.display = "block";

    hideQuestionContainer();
}

function hideQuestionContainer() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.style.display = "none";
}

function playAgain() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    attempts = 0;
    askedQuestions = [];
    userSelectedOption = null;

    loadQuestion();
}

function resetUI() {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
        option.style.backgroundColor = "";
        option.style.pointerEvents = "auto";
    });

    document.getElementById("next-button").style.display = "none";
    document.getElementById("score-container").innerHTML = "";
    document.getElementById("play-again-button").style.display = "none";
    const questionContainer = document.getElementById("question-container");
    questionContainer.style.display = "block";
    document.getElementById("next-button").style.display = "none";
}
