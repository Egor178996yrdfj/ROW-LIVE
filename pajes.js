document.ondragstart = noselect;
document.onselectstart = noselect;
function noselect() {return false;}

let tg = window.Telegram.WebApp;

let champrangt = document.getElementById('heder_acc_age');
let accountage = document.getElementById('account_age').style.display = 'none';
let buttonbackage_btn = document.getElementById('buttonbackage_btn');

champrangt.addEventListener('click', () => {
    document.getElementById('main').style.display = 'none';
    document.getElementById('account_age').style.display = 'block';
})

buttonbackage_btn.addEventListener('click', () => {
    document.getElementById('main').style.display = 'block';
    document.getElementById('account_age').style.display = 'none';
})

var id = setInterval(score, 1000);

var rowscore = 0;

var score = document.getElementById('rowscore');

setInterval(function() {
    rowscore ++;
    score.innerHTML=(rowscore);
}, 1000);
