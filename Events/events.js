const startgame = document.getElementById("start");
const quiz = document.getElementById("quiz");
const footer = document.getElementById("footer");
document.body.style.backgroundImage = "url('start.jpg')";
var point = 0;

var quest = document.getElementsByClassName("question")
quest.textContent = ``

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
    wrongsound.play();
    skips-=1;
    skipEl.textContent = `SKIPS: ${skips}`;
    RunningQuestionIndex++;         
    LoopthroughQuestion();
    questionnumber++;
    var number = document.getElementById("questionnumber");
    number.textContent = `${questionnumber}.`;}
}

