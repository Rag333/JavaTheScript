let popup = document.getElementById('popup');
let mytext = document.getElementById('mytext');
let mybtn = document.getElementById('mybtn');
let age ;
mybtn.onclick = function(){
     age = mytext.value;
    age = Number(age);
    if(age>=18){
        popup.textContent = "YOU ARE ELIGIBLE" ;
    }
    else{
        popup.textContent = "YOU ARE NOT ELIGIBLE" ;
    }
}