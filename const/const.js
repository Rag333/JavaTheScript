const pi = 3.14 ;
document.getElementById('btn').onclick=function(){

    let radius = document.getElementById('radius').value;
    radius = Number(radius);
    let circumference = 2*pi*radius;    
    document.getElementById('myh1').textContent = `circumference is ${circumference}`
}