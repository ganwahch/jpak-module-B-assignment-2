/**********Module B Assignment2 ***********/

// Q:1 write a program which shows the couter after each second.
let counter = 0;
setInterval(() => {
    counter++
    console.log(counter);
}, 1000);

//Q:2 write a function which takes your name and displays the greeting with your name
var greet =()=>{
 let userName = prompt("Enter your name");
 alert(`Welcome ${userName}`)
}
greet();

//Q:3 write a function(arrow function) which takes two values and return its sum as a result
const Number =()=>console.log(5+5);

Number();

//Q:4 write a function(arrow function) which takes a number and multiply it with 0.5 and return the new value. print the new value outside the function
const numbersOfVal = ()=>{
  let num = 2;
  return num*0.2
}
console.log(numbersOfVal);

//Q:5 print simple array of [1,2,3,4,5] with the help of array map funtion
var numArray =  [1,2,3,4,5,6]
numArray.map((num)=>{
   console.log(num);
})

// Q:6 let arr = [{id:1,name:"abc"},{id:1,name:"efg"},{id:2,name:"hij"},{id:3,name:"xyz"}]
// iterate the given array through map function and print the name and id
let array = [{id:0, name:"Ghanwa"},{id:1, name:"Sunbal"},{id:2, name:"Mehak"}]
array.map((user)=>{
  console.log(`Name====>${user.name},id====>${user.id} `);
})

/************************************ Assignmet is Complete ***************************/