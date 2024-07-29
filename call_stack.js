/* CALL STACK --> contain data in LIFO formate 

jab bhe eak function call hote hai you have to create a entry in stack

function--> first clsass citizens
      -->assign as variable
      -->as argument
      -->return function
      -->use in data structure
      -->used as properties
*/

let greet =()=> //assign to variable
{
 console.log("hi")
}

function greetme(greet ,fullname) //function as argument
{
  console.log("hell0",fullname);
  greet();
}
greetme(greet,"bikash")


const arr =[
  function(a,b)// first wala function
  {
    return a+b;
  },
  function(a,b)
  {
    return a*b;

  },
  function(a,b)
  {
    return a/b;
  }
]
let first = arr[0];// first wala function aa gaya
let ans= first(5,19);
console.log(ans)