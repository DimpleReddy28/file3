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