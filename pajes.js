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

let daily_claim_btn = document.getElementById('daily_claim_btn_img');
let id_dark_back = document.getElementById('id_dark_back');

daily_claim_btn.addEventListener('click', () => {
    document.getElementById('daily_reward').style.display = 'none';
})

id_dark_back.addEventListener('click', () => {
    document.getElementById('daily_reward').style.display = 'none';
})


var id = setInterval(score, 1000);

var rowscore = 1075;

var score = document.getElementById('rowscore');

setInterval(function() {
    rowscore ++;
    score.innerHTML=(rowscore);
}, 1000);
