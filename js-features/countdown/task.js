
const initial = document.getElementById("timer");

const addText = function(){
    initial.textContent -= 1;
    if (initial.textContent === '-1') {
        alert("«Вы победили в конкурсе!»")
    }
}

setInterval (addText, 1000);