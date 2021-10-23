let dice = ["", "./dice/dice-1.png", "./dice/dice-2.png", "./dice/dice-3.png", "./dice/dice-4.png", "./dice/dice-5.png", "./dice/dice-6.png"];


var btn = document.querySelector('.row');
var scoretxt = document.querySelector('#score');
var txt = document.querySelector('#txt');
var time = document.querySelector('#time');
var img = document.querySelector('#dice img');

var timer = 4;
var score = 0;
var random;

setInterval(function () {
    random = Math.floor(Math.random() * 6 + 1);
    console.log(random);
}, 5000);

btn.addEventListener('click', function (dets) {
    var btnVal = Number(dets.target.value);
    if (random === btnVal) {
        score += 10;
        scoretxt.textContent = score;
        console.log('score ' + score);
        txt.textContent = 'your are right';
    } else {
        txt.textContent = 'your are worng';
    }
});


function countingTimer() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            time.textContent = `The will be Changed in ${timer} seconds`;
            console.log('timer' + timer);
        } else {
            timer = 4;
            img.setAttribute('src', dice[random]);
        }
    }, 1000);
}

setTimeout(function () {
    countingTimer();
}, 4000);