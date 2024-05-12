const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const h4 = document.getElementById("h4");
const h5 = document.getElementById("h5");
const start = document.getElementById("start");
const submit = document.getElementById("submit");
const userAnswer = document.getElementById("userAnswer");
var score = 0;
var min = 3;
var max = 4;
h2.innerHTML = "Score: " + score;


function startGame() {

    start.disabled = true;
    submit.disabled = true;
    userAnswer.disabled = true;
    userAnswer.value = "";

    countDown();

}


function countDown() {

    counter = 3;

    const interval = setInterval(() => {
        h1.innerHTML = counter;
        counter--;
        if (counter < 0) {
            h1.innerHTML = "GO!";
        }
        if (counter < -1) { 
            clearInterval(interval);
            h1.innerHTML = " ";
            
            contGame();
        }
    },1000);
    console.log('countdown done!');
}

function apiInfo(min,max) {
    apiURL = `https://cors-anywhere.herokuapp.com/http://www.randomnumberapi.com/api/v1.0/randomstring?min=${min}&max=${max}&count=1`;
    return apiURL;
}

// function fetchLetters() {
//     return fetch(apiInfo(2, 3))
//         .then(response => {
//             return response.json();
//         })
// }


function contGame() {
    h3.innerHTML = "Remember as much as you can about these random letters!";

    // fetchLetters()
    //     .then(data => {
    //         const letters = JSON.stringify(data);
    //         h4.innerHTML = timer(h4, letters);
    //         h5.innerHTML = "type out the letters in order! dont forget to capitalize!";
    //     })

    h4.innerHTML = timer(h4, "ABC");
    h5.innerHTML = "type out the letters in order! dont forget to capitalize!";

}

function timer(h, letters) {
    counter = 10;
    const interval = setInterval(() => {
        h1.innerHTML = counter;
        counter--;
        h.innerHTML = letters;
        userAnswer.disabled = true;
        submit.disabled = true;

        if (counter < -1) { 
            clearInterval(interval);
            h.innerHTML = " ";
            h1.innerHTML = " ";
            userAnswer.disabled = false;
            submit.disabled = false;
        }
    },1000);
}

function checkAnswer() {
    const userInput = document.getElementById("userAnswer");
    const userGuess = userInput.value;
    
    console.log(userGuess);
    if (userGuess === "ABC") {
        score += 1;
        h2.innerHTML = "Score: " + (score);
        userAnswer.value = "";
        min += 1;
        max += 1;
        contGame();
    }
    else {
        h2.innerHTML = "Score: " + score;
        h3.innerHTML = "Game Over!";
        h4.innerHTML = " ";
        h5.innerHTML = " ";
        start.disabled = false;
        submit.disabled = true;
        userAnswer.disabled = true;
    }
}