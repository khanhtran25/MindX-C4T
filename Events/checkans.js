let questionnumber = 1;
var number = document.getElementById("questionnumber");
let lives = 3;
var livesEl = document.getElementById("lives");
var skips = 3;
var skipEl = document.getElementById("skips");
var rightsound = document.getElementById("rightsound");
var wrongsound = document.getElementById("wrongsound");
var oversound = document.getElementById("oversound");
let pop = document.querySelector(".hidden");

function earlygame() {
    questionnumber = 1;
    number.textContent = `${questionnumber}.`;
    lives = 3;
    livesEl.textContent = `LIVES: ${lives}`;
    skip = 3;
    skipEl.textContent = `SKIPS: ${skips}`;
}

earlygame()

function start() {
    wrongsound.play();
    document.body.style.backgroundImage = "url('123origin.jpg')";
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
    };
    if(RunningQuestionIndex===15) {
        quest16();};
        // Anscheck()
    // } else {
    //     LoopthroughQuestion();
    // };
}

LoopthroughQuestion();
console.log(RunningQuestionIndex);

function Anscheck(AnsID) {
    if (questions[RunningQuestionIndex].a !== AnsID) {
        wrongsound.play();
        lives-=1;
        var livesEl = document.getElementById("lives");
        livesEl.textContent = `LIVES: ${lives}`;
        minuslive()
        if (lives === 0) {
            oversound.play();
            alert("you lost");
            alert(point);
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
        point++;
        questionnumber++;
        var number = document.getElementById("questionnumber");
        number.textContent = `${questionnumber}.`;
        console.log(RunningQuestionIndex);
        console.log(AnsID);
        RunningQuestionIndex++;
        LoopthroughQuestion();}
    // if(RunningQuestionIndex===12) {
    //     quest13();
    //     LoopthroughQuestion();
    //     A.addEventListener("click",function() {
    //         questionnumber = 9;
    //         number.textContent = `${questionnumber}.`;
    //         RunningQuestionIndex = 8;
    //         LoopthroughQuestion();
    //         Anscheck();
    //     });
    //     // B.addEventListener("click",function() {
    //     //     questionnumber = 11;
    //     //     number.textContent = `${questionnumber}.`;
    //     //     RunningQuestionIndex = 10;
    //     //     LoopthroughQuestion();
    //     //     // Anscheck();
    //     // })
    // } else {
    //         LoopthroughQuestion();}
    
    if (RunningQuestionIndex > lastQuestionIndex) {
        alert("nice job!!!");
        RunningQuestionIndex = 0;
        document.body.style.backgroundImage = "url('start.jpg')";
        menu.style.display = "flex";
        quiz.style.display = "none";
        footer.style.display = "none";
        earlygame()
        LoopthroughQuestion();
    }
}
function quest13() {
    questionnumber = '?';
    number.textContent = `${questionnumber}.`;
}


function minuslive() {
    setTimeout(function(){
        pop.classList.remove("hidden");
        pop.classList.add("show");
    },0);
    setTimeout(function(){
        pop.classList.remove("show");
        pop.classList.add("hidden");
    },1250);
}



function quest16() {
    document.getElementById("questionnumber").addEventListener("mouseover",mouseOver);
    function mouseOver(){
        document.getElementById("questionnumber").style.color = "lawngreen";
        console.log("in");
    }
    document.getElementById("questionnumber").addEventListener("mouseout",mouseOut);
    function mouseOut(){
        document.getElementById("questionnumber").style.color = "lawngreen";
        console.log("out");
    }
    document.getElementById("questionnumber").addEventListener("click",numclick);
    function numclick() {   
        rightsound.play();
        questionnumber++;
        var number = document.getElementById("questionnumber");
        number.textContent = `${questionnumber}.`;
        console.log(RunningQuestionIndex);
        RunningQuestionIndex++;
        LoopthroughQuestion();
    };
}