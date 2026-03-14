function generatePlan(){

let subjects = document.getElementById("subjects").value.split(",");
let hours = document.getElementById("hours").value;

let result = "";
let list = "";

let timePerSubject = Math.floor(hours / subjects.length);

subjects.forEach(function(subject){

let cleanSubject = subject.trim();

result += cleanSubject + " : " + timePerSubject + " hours <br>";

list += `<li>
<input type="checkbox"> ${cleanSubject}
</li>`;

});

document.getElementById("result").innerHTML = result;
document.getElementById("progressList").innerHTML = list;

localStorage.setItem("studyPlan", result);

}

window.onload = function(){

let savedPlan = localStorage.getItem("studyPlan");

if(savedPlan){
document.getElementById("result").innerHTML = savedPlan;
}

}

function toggleDark(){
document.body.classList.toggle("dark");
}


let time = 1500;
let timer;

function startTimer(){

timer = setInterval(function(){

let minutes = Math.floor(time/60);
let seconds = time % 60;

if(seconds < 10){
seconds = "0" + seconds;
}

document.getElementById("timer").innerHTML =
minutes + ":" + seconds;

time--;

if(time <= 0){
clearInterval(timer);
alert("Study session completed!");
}

},1000);

}

function pauseTimer(){
clearInterval(timer);
}

function resetTimer(){
clearInterval(timer);
time = 1500;
document.getElementById("timer").innerHTML = "25:00";
}
