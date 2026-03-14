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
<input type="checkbox" onclick="updateProgress()"> ${cleanSubject}
</li>`;

});

document.getElementById("result").innerHTML = result;

document.getElementById("progressList").innerHTML = list;

localStorage.setItem("studyPlan", result);

}

function generateWeekly(){

let subjects = document.getElementById("subjects").value.split(",");

let hours = document.getElementById("hours").value;

let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

let plan = "";

days.forEach(day => {

plan += "<h3>" + day + "</h3>";

subjects.forEach(subject => {

let clean = subject.trim();

let time = (hours/subjects.length).toFixed(1);

plan += clean + " - " + time + " hours <br>";

});

});

document.getElementById("weeklyPlan").innerHTML = plan;

localStorage.setItem("weeklyPlan",plan);

}

function updateProgress(){

let checkboxes = document.querySelectorAll("#progressList input");

let total = checkboxes.length;

let completed = 0;

checkboxes.forEach(box => {

if(box.checked){

completed++;

}

});

let percent = Math.round((completed/total)*100);

document.getElementById("progressPercent").innerText = percent + "% Completed";

}

function toggleDark(){

document.body.classList.toggle("dark");

}

function downloadPlan(){

let element = document.getElementById("result");

html2pdf().from(element).save("study_plan.pdf");

}

document.getElementById("subjects").addEventListener("input", function(){

localStorage.setItem("subjects", this.value);

});

document.getElementById("hours").addEventListener("input", function(){

localStorage.setItem("hours", this.value);

});

window.onload = function(){

document.getElementById("subjects").value =
localStorage.getItem("subjects") || "";

document.getElementById("hours").value =
localStorage.getItem("hours") || "";

let savedPlan = localStorage.getItem("studyPlan");

if(savedPlan){

document.getElementById("result").innerHTML = savedPlan;

}

};

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

alert("Study Session Completed!");

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
