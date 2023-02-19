let row1 = document.getElementById('row1');
let row2 = document.getElementById('row2');
let row3 = document.getElementById('row3');
let clicks = 0;

document.addEventListener('DOMContentLoaded', function (){
    spin ()
    removeClass();
})

function removeClass() {
    row1.classList.remove('row1');
    row2.classList.remove('row2');
    row3.classList.remove('row3');
}


function spin (){
    let spin = document.getElementById('spin');
    spin.onclick = function () {
        randomSpinIcons ();
        row1.classList.add('row1');
        row2.classList.add('row2');
        row3.classList.add('row3');
        
    }
    
}
   

function randomSpinIcons () {
    for ( let i=0;i<40;i++){
        let img = document.createElement('img');
        img.src=`assets/images/picture${Math.floor(Math.random()*7)+1}.jpg`;
        row1.appendChild(img);    
    }
    for ( let i=0;i<40;i++){
        let img = document.createElement('img');
        img.src=`assets/images/picture${Math.floor(Math.random()*7)+1}.jpg`;
        row2.appendChild(img);    
    }
    for ( let i=0;i<40;i++){
        let img = document.createElement('img');
        img.src=`assets/images/picture${Math.floor(Math.random()*7)+1}.jpg`;
        row3.appendChild(img);    
    }
}

document.getElementById('row1').setAttribute('class', 'Hide')
console.log(row1.className)


