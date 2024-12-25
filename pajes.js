document.ondragstart = noselect;
document.onselectstart = noselect;
function noselect() {return false;}

let tg = window.Telegram.WebApp;

let champrangt = document.getElementById('hedercontantconteiner');
let accountage = document.getElementById('account_age_text').style.display = 'none';

champrangt.addEventListener('click', () => {
    document.getElementById('main').style.display = 'none';
    document.getElementById('account_age_text').style.display = 'block'
})

