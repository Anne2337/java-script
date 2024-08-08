//window.alert('hello world')
//document.getElementById("myh1").textContent="Anne";
//document.getElementById("myP").textContent="is the biggest girl in the class";
//let fullname= 'TUYISHIME Anne';
//let age = 24; // Example declaration of age
//console.log(`You are ${age} years old`);
//document.getElementById("p1").textContent=fullname;
//document.getElementById("p2").textContent=age;



//how to accept user input
//1.Easy way = window prompt
//2. professional way = HTML textbox
//let username;
//username=window.prompt('what is your username ?');
//let username;

//document.getElementById("submit").onclick=function(){
 //username=document.getElementById("myText").value;
 //document.getElementById("myh1").textContent= `hello ${username}`;
//}


//changing datatype
//let age=window.prompt(`how old are you `);
//age=Number(age);
//age+=1;
//console.log(age);


//const PI=3.14;
//let radius;
//let circumfrence;


//console.log(circumfrence);
//document.getElementById("submit").onclick=function(){
    //radius=document.getElementById("mytext").value;
    //circumfrence=radius*radius*PI;
    //document.getElementById("myh3").textContent=circumfrence+`cm`;

//}


const decreasebtn=document.getElementById("decreasebtn");
const increasebtn=document.getElementById("increasebtn");
const resetbt=document.getElementById("resetbt");
const count=document.getElementById("count");
let count1=0;
increasebtn.onclick=function(){
    count1++;
    count.textContent=count1;
}
decreasebtn.onclick=function(){
    count1--;
    count.textContent=count1;
}
resetbt.onclick=function(){
    count1=0;
    count.textContent=count1;
}


// math= built -in objects
//let x=81;
//let z;
//z=Math.sqrt(x);
//console.log(z);