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


//const decreasebtn=document.getElementById("decreasebtn");
//const increasebtn=document.getElementById("increasebtn");
//const resetbt=document.getElementById("resetbt");
//const count=document.getElementById("count");
//let count1=0;
//increasebtn.onclick=function(){
    //count1++;
    //count.textContent=count1;
//}
//decreasebtn.onclick=function(){
   // count1--;
    //count.textContent=count1;
//}
//resetbt.onclick=function(){
   // count1=0;
   // count.textContent=count1;
//}


// math= built -in objects
//let x=81;
//let z;
//z=Math.sqrt(x);
//console.log(z);

//const mastercard=document.getElementById("masterbtn");
//const paypal=document.getElementById("paypal");
//const mycheck=document.getElementById("check");
//const submit=document.getElementById("sumit");
//const result=document.getElementById("subresult");
//const payment=document.getElementById("paymentresult");

//submit.onclick=function(){
    //if(mycheck.checked){
       // result.textContent='you are subcribed!..';

    //}
    //else{
       // result.textContent="you are not subcribed";
    //}
    //if(paypal.checked){
       // payment.textContent="you are paying with paypal!...";
    //}
    //else if(mastercard.checked){
        //payment.textContent="you are paying with mastercard!...";


    //}
    //else{
       // payment.textContent="you must select payment method";
    //}
//}


//switch case
 //let day=9;
 //switch(day){
   // case 1:
        //console.log("monday");
       // break;

    //case 2:
       // console.log("Tuesday");
       // break;

   // case 3:
       // console.log("wensday");
       // break;

   // case 4:
       // console.log("thusday");
       // break;

   // case 5:
       // console.log("friday");
       // break;

   // case 6:
       // console.log("sartudY");
       // break;

   // case 7:
       // console.log("sunday");
       // break;
        //default:
       // console.log(`${day} this day is not exist`);
    //}

    //const textbox=document.getElementById("textbox");
    //const fargheigt=document.getElementById("fargheigt");
    //const celsius=document.getElementById("celsius");
    //const result=document.getElementById("result");
     //let temp;


    

 //function convert(){
   // if(fargheigt.checked){
      // temp= Number(textbox.value);
      // temp= temp * 9 / 5 + 32;
      // result.textContent= temp + "°F";
   // }
    //else if (celsius.checked){
       // temp= Number(textbox.value);
      // temp= (temp-32)*(5/9);
      // result.textContent= temp + "°c";
        
         // }
         // else{
           // result.textContent="you select unit";
          //}

 //}


 // .filter
 //let numbers=[1,2,3,4,5,6,7]
 //let evenNumbs= numbers.filter(isEven);
 //console.log(evenNumbs)
 //function isEven(Element){
   //return  Element%2 ===0;
 //}

 //function isOdd(Element){
   // return Element%2 !==0;
 //}


 // object in javascripts and the use this 

 //const person1 ={
    //firstname:"Anne",
    //lastname: "TUYISHIME",
    //age:24,
    //isEmployed:true,
 
 //sayHello: function(){console.log(`hi !I am ${this.firstname}` )}
 //}
 //person1.sayHello();

 // constructors

// function Car(make, model,year,color){
    //this.make=make,
    //this.model=model,
    //this.year=year,
    //this.color=color
   // this.drive= function(){console.log(`you drive ${model}`)}
 //}
 //const car1=new Car("make","toyota","2024","black");
 //car1.drive();

 //class

 //class product{
    //constructor(name,price){
        //this.name=name,
       // this.price=price
    //}
    //displayproduct(){
        //console.log(`product'name: ${this.name}`);
        //console.log(`product'price: ${this.price}`)
    //}
    //calculateTotal(salestax){
       // return this.price + (this.price *salestax);
   // }

 //}

 //const salestax = 0.05;
 //const product1= new product("shoes",20000);
 //product1.displayproduct();
 //product1.calculateTotal();

 //const total=product1.calculateTotal(salestax);
 //console.log(`the total is (with tax): $${total.toFixed(2)}`)



 // JavaScript code in index.js

// JavaScript code in index.js

document.getElementById("button1").addEventListener("click", function() {
    // Show the delete section
    document.querySelector(".delete-section").style.display = "block";
    
    // You can also disable the ADD button to prevent multiple clicks if needed
    document.getElementById("button1").disabled = true;
});

