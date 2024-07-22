/* FUNCTION  */
function returnname(name)
{
  console.log(name);
}

returnname("bikash");

function counting()
{
   for(i=0;i<=10;i++)
   {
    console.log(5*i);
   }
}
counting();

//return function
function getsum(a,b,c)
{
  let sum =a+b+c;
  return sum;
  //unreachable statement
}
let ans =getsum(1,2,3);// you have to store o else you will not get output,mean return value had to get stored somewere
console.log(ans);


let getmult = function(a,b)
{
  return a*b;
}
let anss = getmult(10,20)
console.log(anss)
