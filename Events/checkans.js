let questionnumber = 1;
var number = document.getElementById("questionnumber");
let lives = 3;
var livesEl = document.getElementById("lives");
var skips = 3;
var skipEl = document.getElementById("skips");
var rightsound = document.getElementById("rightsound");
var wrongsound = document.getElementById("wrongsound");
var oversound = document.getElementById("oversound");
var popup = $('#popup');
popup.hide();

function earlygame() {
    questionnumber = 1;
    number.textContent = `${questionnumber}.`;
    lives = 3;
    livesEl.textContent = `LIVES: ${lives}`;
    skip = 3;
    skipEl.textContent = `SKIP: ${skips}`;
}

earlygame()

function start() {
    wrongsound.play();
    document.body.style.backgroundImage = "url('123.jpg')";
    menu.style.display = "none";
    quiz.style.display = "initial";
    footer.style.display = "initial";
    RunningQuestionIndex = 0;
    earlygame()
    LoopthroughQuestion();
}

const Q = document.getElementById("question")
const A = document.getElementById("A")
const B = document.getElementById("B")
const C = document.getElementById("C")
const D = document.getElementById("D")


let lastQuestionIndex = questions.length - 1;
let RunningQuestionIndex = 0;


function LoopthroughQuestion() {
    if (RunningQuestionIndex === questions.length) {
        let q = questions[RunningQuestionIndex - 1];
        question.innerHTML = "<p>" + q.quiz + "</p>";
        A.innerHTML = q.choiceA;
        B.innerHTML = q.choiceB;
        C.innerHTML = q.choiceC;
        D.innerHTML = q.choiceD;
       
    } else {
        let q = questions[RunningQuestionIndex];
        question.innerHTML = "<p>" + q.quiz + "</p>";
        A.innerHTML = q.choiceA;
        B.innerHTML = q.choiceB;
        C.innerHTML = q.choiceC;
        D.innerHTML = q.choiceD;
    }
}

LoopthroughQuestion();

function Anscheck(AnsID) {
    if (questions[RunningQuestionIndex].a !== AnsID) {
        wrongsound.play();
        lives-=1;
        var livesEl = document.getElementById("lives");
        livesEl.textContent = `LIVES: ${lives}`;
        popitup();
        if (lives === 0) {
            oversound.play();
            alert("you loseeeee!")
            RunningQuestionIndex = 0;
            document.body.style.backgroundImage = "url('start.jpg')";
            menu.style.display = "flex";
            quiz.style.display = "none";
            footer.style.display = "none";
            earlygame()
            LoopthroughQuestion();
        }
    } else {
        rightsound.play();
        questionnumber++;
        var number = document.getElementById("questionnumber");
        number.textContent = `${questionnumber}.`;
        console.log(RunningQuestionIndex);
        RunningQuestionIndex++;
        LoopthroughQuestion();}
    if (RunningQuestionIndex > lastQuestionIndex) {
        alert("nice job!!!");
        RunningQuestionIndex = 0;
        menu.style.display = "flex";
        quiz.style.display = "none";
        footer.style.display = "none";
        earlygame()
        LoopthroughQuestion();
    }
}
if(RunningQuestionIndex===12) {
    quest13();
    LoopthroughQuestion();
    // Anscheck();
    if (AnsID === "A") {
        RunningQuestionIndex = 8;
        LoopthroughQuestion()
    } if (AnsID === "B") {
        RunningQuestionIndex = 10;
        LoopthroughQuestion()
    } if (AnsID === "C") {
        RunningQuestionIndex = 13;
        LoopthroughQuestion()
    } if (AnsID === "D") {
        RunningQuestionIndex = 6;
        LoopthroughQuestion() }
} else {
        LoopthroughQuestion();}
        
function quest13() {
    questionnumber = '?';
    number.textContent = `${questionnumber}.`;
}


        
    
// function popitup() {
//     popup.show(); 
//     var popper = new Popper(ref,popup,{
//         placement: 'top',
//         onCreate: function(data){
//                 // console.log(data);
//         setTimeout(function(){popup.hide();}, 1000);
//         },
//     });
// };