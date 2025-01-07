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


var rowscore = 0;

var score = document.getElementById('rowscore');


//daily reward

var DayNumb0 = 400;
var DayNumb1 = 520;
var DayNumb2 = 640;
var DayNumb3 = 760;
var DayNumb4 = 880;
var DayNumb5andBiger = 1100;

var day_number = document.getElementById('day_number');
var rowdayly_text_id = document.getElementById('rowdayly_text_id');

//receiving an award

let daily_claim_btn = document.getElementById('daily_claim_btn_img');
let id_dark_back = document.getElementById('id_dark_back');

daily_claim_btn.addEventListener('click', () => {
    document.getElementById('daily_reward').style.display = 'none';
})

id_dark_back.addEventListener('click', () => {
    document.getElementById('daily_reward').style.display = 'none';
})

var day_numberNumb = 0;
day_number.innerHTML = day_numberNumb;

var heventPressed = setInterval(function() {
    var heventPressedDate = new Date();
    day_numberNumb.innerHTML = (heventPressedDate.getHours());
}, 60000);

if (day_numberNumb == "0") {
    day_numberNumb == 0;
}

rowdayly_text_id.innerHTML = ("+" + DayNumb0 + "ROW");
score.innerHTML = '0';

const dayly_reward_con = () => {
    day_numberNumb ++ ;
    day_number.innerHTML = day_numberNumb;
    if (day_numberNumb == 0) {
        rowdayly_text_id.innerHTML = ("+" + DayNumb0 + "ROW");
        score.innerHTML = (rowscore + DayNumb0);
    } else if (day_numberNumb == 1) {
        rowdayly_text_id.innerHTML = ("+" + DayNumb1 + "ROW");
        score.innerHTML = (rowscore += DayNumb0);
    } else if (day_numberNumb == 2) {
        rowdayly_text_id.innerHTML = ("+" + DayNumb2 + "ROW");
        score.innerHTML = (rowscore += DayNumb1);
    } else if (day_numberNumb == 3) {
        rowdayly_text_id.innerHTML = ("+" + DayNumb3 + "ROW");
        score.innerHTML = (rowscore += DayNumb2);
    } else if (day_numberNumb == 4) {
        rowdayly_text_id.innerHTML = ("+" + DayNumb4 + "ROW");
        score.innerHTML = (rowscore += DayNumb3);
    } else if (day_numberNumb == 5) {
        rowdayly_text_id.innerHTML = ("+" + DayNumb5andBiger + "ROW");
        score.innerHTML = (rowscore += DayNumb4);
    } else if (day_numberNumb >= 6) {
        rowdayly_text_id.innerHTML = ("+" + DayNumb5andBiger + "ROW");
        score.innerHTML = (rowscore += DayNumb5andBiger);
    }
};

daily_claim_btn.addEventListener('click', dayly_reward_con);
id_dark_back.addEventListener('click', dayly_reward_con);

setInterval(function() {
    document.getElementById('daily_reward').style.display = 'block';
}, 60000);

// task

let TaskBtnMain = document.getElementById('TaskBtnMain');
let HomeBtnGray = document.getElementById('HomeBtnGray').style.display = 'none';
let taskMain = document.getElementById('taskMain').style.display = 'none';
let TaskBtnTask = document.getElementById('TaskBtnTask').style.display = 'none';
let mainmenu = document.getElementById('mainmenu').style.display = 'block';

let topTaskText = document.getElementById('topTaskText').style.display = 'none';    //top text on task

let HomeBtnID = document.getElementById('HomeBtnID');


TaskBtnMain.addEventListener('click', () => {
    document.getElementById('mainmenu').style.display = 'none';
    document.getElementById('topTaskText').style.display = 'block';
    document.getElementById('HomeBtnID').style.display = 'none';
    document.getElementById('HomeBtnGray').style.display = 'block';
    document.getElementById('taskMain').style.display = 'block';
    document.getElementById('TaskBtnTask').style.display = 'block';
    document.getElementById('TaskBtnMain').style.display = 'none';
});

window.onload = function() {
    const HomeBtnGray = document.getElementById('HomeBtnGray');

    if (HomeBtnGray) {
        HomeBtnGray.addEventListener('click', () => {
            document.getElementById('mainmenu').style.display = 'block';
            document.getElementById('taskMain').style.display = 'none';
            HomeBtnGray.style.display = 'none';
            document.getElementById('HomeBtnID').style.display = 'block';
            document.getElementById('TaskBtnTask').style.display = 'none';
            document.getElementById('TaskBtnMain').style.display = 'block';
        });
    } else {
        console.error('Элемент HomeBtnGray не найден на странице.');
    }
};

// completed task1

let BtnOverTask1 = document.getElementById('BtnOverTask1');

BtnOverTask1.addEventListener('click', () => {
    BtnOverTask1.style.display = 'none';
    rowscore += 20
});
