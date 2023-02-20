let row1 = document.getElementById('row1');
let row2 = document.getElementById('row2');
let row3 = document.getElementById('row3');
let credit = document.getElementById('credit');
let bet = document.getElementById('bet');
let spin = document.getElementById('spin');
let win = 0;

document.addEventListener("DOMContentLoaded", function(){
    bet.value='10';
    giveSomeCredit();
    spinWheel();
    
})

function giveSomeCredit(){
    let pay = document.getElementById('pay')
pay.addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
        credit.innerHTML = pay.value;
    }
})
}

for (var a=[],i=0;i<100;++i) 
a[i]=Math.floor(Math.random()*7+1);

document.addEventListener('DOMContentLoaded', function (){
        for ( let i=0;i<43;i++){
            let img = document.createElement('img');
            img.src=`assets/images/picture${a[i]}.jpg`;
            row1.appendChild(img);    
        }
        for ( let i=0;i<43;i++){
            let img = document.createElement('img');
            img.src=`assets/images/picture${a[i+15]}.jpg`;
            row2.appendChild(img);    
        }
        for ( let i=0;i<43;i++){
            let img = document.createElement('img');
            img.src=`assets/images/picture${a[i+30]}.jpg`;
            row3.appendChild(img);    
        }
    })

    



function spinWheel() {    
spin.addEventListener('click', function() {
    row1.style.transform = `translateY(-8000px)`;
    row2.style.transform = `translateY(-8000px)`;
    row3.style.transform = `translateY(-8000px)`;
    row1.style.transition = 'all 1s ease';
    row2.style.transition = 'all 1.3s ease';
    row3.style.transition = 'all 1.6s ease';
    setTimeout(function() {
        for ( let i=0;i<40;i++){
            let chil = document.getElementById('row1').children;
            let chil2 = document.getElementById('row2').children;
            let chil3 = document.getElementById('row3').children;
            chil[0].remove(); 
            chil2[0].remove(); 
            chil3[0].remove();           
        }
        row1.style.transform = `translateY(0)`;
        row2.style.transform = `translateY(0)`;
        row3.style.transform = `translateY(0)`;
        row1.style.transition = 'all 0s linear';
        row2.style.transition = 'all 0s linear';
        row3.style.transition = 'all 0s linear';
        for ( let i=0;i<40;i++){
            let img = document.createElement('img');
            let img2 = document.createElement('img');
            let img3 = document.createElement('img');
            img.src=`assets/images/picture${a[i+Math.floor(Math.random()*7)]}.jpg`;
            img2.src=`assets/images/picture${a[i+Math.floor(Math.random()*7)]}.jpg`;
            img3.src=`assets/images/picture${a[i+Math.floor(Math.random()*7)]}.jpg`;
            row1.appendChild(img);
            row2.appendChild(img2);
            row3.appendChild(img3);     
        }
        win=0;
        gameWin();
        
    }, 2000)
    yourCredit ()
});

}



function  gameWin() {
    let r1c1 = row1.children[0].getAttribute('src');
    let r1c2 = row1.children[1].getAttribute('src');
    let r1c3 = row1.children[2].getAttribute('src');
    let r2c1 = row2.children[0].getAttribute('src');
    let r2c2 = row2.children[1].getAttribute('src');
    let r2c3 = row2.children[2].getAttribute('src');
    let r3c1 = row3.children[0].getAttribute('src');
    let r3c2 = row3.children[1].getAttribute('src');
    let r3c3 = row3.children[2].getAttribute('src');
    if (r3c2 == r2c2 && r2c2== r1c2 && r3c2 == r1c2) {
        r1c2 = row1.children[1].style.outline = '7px solid rgba(62, 243, 17, 0.85)';   
        r2c2 = row2.children[1].style.outline = '7px solid rgba(62, 243, 17, 0.85)';
        r3c2 = row3.children[1].style.outline = '7px solid rgba(62, 243, 17, 0.85)';
        win += 50; 
       // var audio = new Audio('/assets/audio/mixkit-service-bell-double-ding-588.wav')
       // audio.play()
    } 
    if(r1c1 == r2c1 && r2c1== r3c1 && r3c1 == r1c1) {
        r1c1 = row1.children[0].style.outline = '7px solid rgba(99, 38, 240, 0.85)';   
        r2c1 = row2.children[0].style.outline = '7px solid rgba(99, 38, 240, 0.85)';
        r3c1 = row3.children[0].style.outline = '7px solid rgba(99, 38, 240, 0.85)';   
        win += 50;
        //var audio = new Audio('/assets/audio/mixkit-service-bell-double-ding-588.wav')
        //audio.play()
    }
    if(r1c3 == r2c3 && r2c3== r3c3 && r3c3 == r1c3) {
        r1c3 = row1.children[2].style.outline = '7px solid rgba(240, 38, 38, 0.85)';   
        r2c3 = row2.children[2].style.outline = '7px solid rgba(240, 38, 38, 0.85)';
        r3c3 = row3.children[2].style.outline = '7px solid rgba(240, 38, 38, 0.85)'; 
        win += 50; 
        //var audio = new Audio('/assets/audio/mixkit-service-bell-double-ding-588.wav')
        //audio.play()
    }
    if(r1c1 == r2c2 && r2c2== r3c3 && r3c3 == r1c1) {
        r1c1 = row1.children[0].style.outline = '7px solid rgba(255, 36, 182, 0.85)';   
        r2c2 = row2.children[1].style.outline = '7px solid rgba(255, 36, 182, 0.85)';
        r3c3 = row3.children[2].style.outline = '7px solid rgba(255, 36, 182, 0.85)';
        win += 50;
        //var audio = new Audio('/assets/audio/mixkit-service-bell-double-ding-588.wav')
        //audio.play()
    }
    if(r1c3 == r2c2 && r2c2== r3c1 && r3c1 == r1c3) {
        r1c3 = row1.children[2].style.outline = '7px solid rgba(255, 36, 182, 0.85)';   
        r2c2 = row2.children[1].style.outline = '7px solid rgba(255, 36, 182, 0.85)';
        r3c1 = row3.children[0].style.outline = '7px solid rgba(255, 36, 182, 0.85)';  
        win += 50;
        //var audio = new Audio('/assets/audio/mixkit-service-bell-double-ding-588.wav')
        //audio.play()
    }
    
}


function yourCredit () {
    let playAmount = Math.floor(credit.textContent)-bet.value +win;
    credit.innerHTML=playAmount;
    
}


