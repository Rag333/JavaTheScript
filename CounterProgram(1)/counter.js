let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let countLabel = document.getElementById('countLabel');
count = 0;



increase.onclick = function(){
    count++;
    countLabel.textContent = count ;
}

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count ;
}


decrease.onclick = function(){
    count--;
    countLabel.textContent = count ;
}