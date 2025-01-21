// function addToCart(){
//     alert("Item added to cart");
// }

// function add(a,b){
//     console.log(a+b);
// }

// add(10,20);
// add(100,31);
// add(50,120);
// userDetails("Mahesh",23,"Pune");
// userDetails("Ramesh",25,"Mumbai");
// userDetails("Rajesh",29,"Delhi");

// //! anonymous function
// var add = function(a,b){
//     console.log(a+b);
// }
// add(10,20);
// add(100,31);
// add(50,12);

// //! IIFE -
// (function(){
//     console.log("IIFE");
// })();

function userDetail(name, age, city){
    console.log(name);
    console.log(age);
    console.log(city);
}
userDetail("Dimple" ,20,"hyderabad");

//anonymus function

(function (){
    console.log("Anonymus function")//anonymus function cannot executed by itself
})();   

//arrow function

//let x = ()=> console.log("Arrow function");
//x();

let x =a=>console.log(a);
x(5);

let y =(a,b)=>console.log(a+b);
y(10,5);

let z = ()=>{console.log("Hi");
          console.log("Hello");
          console.log("Bye");
}
z();

let rows = 5;
let columns = 5;
for(let i=1;i<=rows;i++){
  for(let j=1;j<=columns;j++){
     console.log("*");
  }
console.log("");
}



