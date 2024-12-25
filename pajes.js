document.ondragstart = noselect;
document.onselectstart = noselect;
function noselect() {return false;}

let tg = window.Telegram.WebApp;
let champ = document.getElementById('champrang');

champ.getElementById('click', () => {
    tg.close();
});
