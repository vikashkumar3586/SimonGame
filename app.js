let gameSeq=[];
let userSeq=[];
let btns=["green", "red", "yellow", "purple"];
let level = 0;
let started = false;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = "Level " + level;

    let randIndex = Math.floor(Math.random()*3);
    let randColor = btns[randIndex];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIndex);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    //console.log("curr level", level)
    
    if (userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
           setTimeout(levelUp, 1000);
        } 
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press Any Key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }

}
function btnPress(){
    
    let btn=this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    console.log(userSeq);

    
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}
function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}