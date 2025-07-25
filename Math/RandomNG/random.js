let mylabel = document.getElementById('mylabel');
let mybtn = document.getElementById('mybtn');
let randomNum;
let min = 1 ;
let max = 6 ;


mybtn.onclick=function(){
    randomNum = Math.floor(Math.random()*(max))+min ;
    mylabel.textContent = randomNum;
}