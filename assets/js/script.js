let row1 = document.getElementById('row1');
let row2 = document.getElementById('row2');
let row3 = document.getElementById('row3');
let credit = document.getElementById('credit');
let bet = document.getElementById('bet');
let spin = document.getElementById('spin');
let win = 0;

/**
 * popup where you have to add credit
 */
function giveSomeCredit() {
    spin.disabled = true;
    let pay = document.getElementById('pay');
    pay.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            credit.innerHTML = pay.value;
            document.getElementById('popup').style.display = 'none';
            bet.value = '10';
            spin.disabled = false;
        }

    });
}



for (var a = [], i = 0; i < 100; ++i)
    a[i] = Math.floor(Math.random() * 7 + 1);


/**
 * Code that loads images on page load and bcalls initial functions 
 */

document.addEventListener('DOMContentLoaded', function () {
    
    for (let i = 0; i < 43; i++) {
        makePictures(a[i], row1);
    }
    for (let i = 0; i < 43; i++) {
        makePictures(a[i + 15], row2);
    }
    for (let i = 0; i < 43; i++) {
        makePictures(a[i + 30], row3);
    }
    bet.value = '10';
    giveSomeCredit();
    spinWheel();
    picalt();
});
/**
 * crates ne images for next spin
 */
function makePictures(imagename, rownum) {
    let img = document.createElement('img');
    img.src = `assets/images/picture${imagename}.jpg`;
    rownum.appendChild(img);
}
/** 
 * function to roll images
*/
function rolling(rownr, sec) {
    rownr.style.transform = `translateY(1333.33%)`;
    rownr.style.transition = `all ${sec}s ease`;
}
/**
 * translate back after overflown pictures are deleted and sets last picture as first
 */
function rolling0(rownr, sec) {
    rownr.style.transform = `translateY(0px)`;
    rownr.style.transition = `all ${sec}s linear`;
}
/**
 * delete overflown images
 */
function deleteRows(first, second, third) {
    let chil = document.getElementById(first).children;
    let chil2 = document.getElementById(second).children;
    let chil3 = document.getElementById(third).children;
    chil[0].remove();
    chil2[0].remove();
    chil3[0].remove();
}
/**
 * function ro roll, calls 3 previous functions, and creates new images for next spin
 */
function spinWheel() {
    spin.addEventListener('click', function () {
        spin.disabled = true;
        rolling(row1, 1);
        rolling(row2, 1.3);
        rolling(row3, 1.6);
        setTimeout(function () {
            for (let i = 0; i < 40; i++) {
                deleteRows('row1', 'row2', 'row3')
            }
            rolling0(row1, 0);
            rolling0(row2, 0);
            rolling0(row3, 0);
            for (let i = 0; i < 40; i++) {
                let img = document.createElement('img');
                let img2 = document.createElement('img');
                let img3 = document.createElement('img');
                img.src = `assets/images/picture${a[i+Math.floor(Math.random()*7)]}.jpg`;
                img2.src = `assets/images/picture${a[i+Math.floor(Math.random()*7)]}.jpg`;
                img3.src = `assets/images/picture${a[i+Math.floor(Math.random()*7)]}.jpg`;
                row1.appendChild(img);
                row2.appendChild(img2);
                row3.appendChild(img3);
            }
            win = 0;
            gameWin();
            yourLastWin();
        }, 1601)
    });
}
/**
 * mark winning lines
 */
function winningPairs(cil1, cil2, cil3, color) {
    row1.children[cil1].style.outline = `7px solid ${color}`;
    row2.children[cil2].style.outline = `7px solid ${color}`;
    row3.children[cil3].style.outline = `7px solid ${color}`;
}
/**
 * function to add alternatives to pictures
 */
function picalt(){
    for (let i=0;i<row1.children.length;i++){
    row1.children[i].setAttribute('alt', 'fruit-pic');
    row2.children[i].setAttribute('alt', 'fruit-pic');
    row3.children[i].setAttribute('alt', 'fruit-pic');
}
}
/**
 * identefies images in main container and compares if their the same
 */
function gameWin() {
    spin.disabled = false;
    let r1c1 = row1.children[2].getAttribute('src');
    let r1c2 = row1.children[1].getAttribute('src');
    let r1c3 = row1.children[0].getAttribute('src');
    let r2c1 = row2.children[2].getAttribute('src');
    let r2c2 = row2.children[1].getAttribute('src');
    let r2c3 = row2.children[0].getAttribute('src');
    let r3c1 = row3.children[2].getAttribute('src');
    let r3c2 = row3.children[1].getAttribute('src');
    let r3c3 = row3.children[0].getAttribute('src');
    if (r3c2 == r2c2 && r2c2 == r1c2 && r3c2 == r1c2) {
        winningPairs(1, 1, 1, 'rgba(62, 243, 17, 0.85)');
        wiingCombis(1);
    }
    if (r1c1 == r2c1 && r2c1 == r3c1 && r3c1 == r1c1) {
        winningPairs(2, 2, 2, 'rgba(99, 38, 240, 0.85)');
        wiingCombis(2);
    }
    if (r1c3 == r2c3 && r2c3 == r3c3 && r3c3 == r1c3) {
        winningPairs(0, 0, 0, 'rgba(240, 38, 38, 0.85)');
        wiingCombis(0);
    }
    if (r1c1 == r2c2 && r2c2 == r3c3 && r3c3 == r1c1) {
        winningPairs(2, 1, 0, 'rgba(255, 36, 182, 0.85)');
        wiingCombis(2);
    }
    if (r1c3 == r2c2 && r2c2 == r3c1 && r3c1 == r1c3) {
        winningPairs(0, 1, 2, 'rgba(255, 36, 182, 0.85)');
        wiingCombis(2);
    }
    yourCredit();
}
/**
 * sound for winning lines and pay-out
 */
function wiingCombis(num) {
    winValue(num);
    var audio = new Audio('/assets/audio/mixkit-service-bell-double-ding-588.wav');
    audio.play();
}
/**
 * reduces credit, allerts if you have no credit and adjusts bett if its less than credit
 */
function yourCredit() {
    bigWin();
    let playAmount = Math.floor(credit.textContent) - bet.value + win;
    credit.innerHTML = playAmount;
    if (credit.textContent < bet.value && win == 0) {
        bet.value = bet.value - (bet.value - Math.floor(credit.textContent));
    }
    if (credit.textContent == 0) {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popup-title').innerHTML = 'Ups...';
        document.getElementById('text').innerHTML = 'Add some credit to keep playing';
        giveSomeCredit();
    }
}
/** 
 * small span over spin button showing our winnings
*/
function yourLastWin() {
    if (win > 0) {
        let fruitCont = document.getElementById('fruit-container');
        let lastWin = document.createElement('span');
        lastWin.textContent = `Last win: ${win}$`;
        lastWin.style.fontFamily='Rye';
        fruitCont.appendChild(lastWin);
        lastWin.setAttribute('class', 'that-span');
        let thatSpan = document.getElementsByClassName('that-span');
        if (thatSpan.length > 1) {
            for (let i = 0; i < thatSpan.length - 1; i++) {
                thatSpan[i].style.display = 'none';
            }
        }
    }
}
/**
 * picture pops out for big win, click on windov closes it
 */
function bigWin() {
    if (win > 20 * bet.value) {
        let bigWinImg = document.createElement('div');
        spin.disabled = true;
        bigWinImg.classList.add('popup');
        bigWinImg.style.background = 'url("/assets/images/big-win-jackpot.png")';
        bigWinImg.style.backgroundSize = '100% 100%';
        bigWinImg.style.height = '349px';
        bigWinImg.style.width = '500px';
        document.body.appendChild(bigWinImg);
        bigWinImg.innerHTML = `<h1>${win}$</h1>`;
        bigWinImg.style.fontFamily = 'Rye';
        bigWinImg.firstElementChild.style.marginTop = '52%';
        bigWinImg.addEventListener('click', function () {
            bigWinImg.style.display = 'none';
            spin.disabled = false;
        });
    }
}
/**
 * 2 simbols are more worth, function for that
 */
function winValue(num) {
    if (row1.children[num].src === `https://8000-wulle91-lucky7-3carukec9zo.ws-eu87.gitpod.io/assets/images/picture7.jpg`) {
        win += 15 * bet.value;
    } else if (row1.children[num].src === `https://8000-wulle91-lucky7-3carukec9zo.ws-eu87.gitpod.io/assets/images/picture5.jpg`) {
        win += 10 * bet.value;
    } else {
        win += 5 * bet.value;
    }
}
/**
 * ok button for touch screens
 */
function okButton() {
    let pay = document.getElementById('pay');
    let ok = document.getElementById('ok');
    ok.addEventListener('click', function() {
        credit.innerHTML = pay.value;
            document.getElementById('popup').style.display = 'none';
            bet.value = '10';
            spin.disabled = false;
    });
}

okButton();