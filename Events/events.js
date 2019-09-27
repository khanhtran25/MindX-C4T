const startgame = document.getElementById("start");
const quiz = document.getElementById("quiz");
const footer = document.getElementById("footer");

function start() {
    wrongsound.play();
    document.body.style.backgroundImage = "none";
    menu.style.display = "none";
    quiz.style.display = "initial";
    footer.style.display = "initial";
    RunningQuestionIndex = 0;
    earlygame()
    LoopthroughQuestion();
}

var quest = document.getElementsByClassName("question")
quest.textContent = ``

function ANS(Answer) {
    console.log(Answer);
    // alert("Wronggggggg");
    // return true;    
}

function colorafter(ID) {
    document.getElementById(ID).style.backgroundColor = "orange";
}

function colorbefore(ID) {
    document.getElementById(ID).style.backgroundColor = "lightgray";
}



function skipquest() {
    if (RunningQuestionIndex === lastQuestionIndex || skips === 0) {
        alert("No more skipping meit!!")
        document.getElementById("skips").disabled = true;
    } else {
    skips-=1;
    skipEl.textContent = `SKIP: ${skips}`;
    RunningQuestionIndex++;        
    LoopthroughQuestion();
    questionnumber++;
    var number = document.getElementById("questionnumber");
    number.textContent = `${questionnumber}.`;}
}

