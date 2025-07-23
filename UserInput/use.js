document.getElementById("button").onclick=function(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let school = document.getElementById("school").value;


    console.log(`my name is ${name} , age ${age}  studying in ${school}`);
    document.getElementById("myh2").textContent = `my name is ${name} , age ${age}  studying in ${school}`
}