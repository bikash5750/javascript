/* MAP */
//value hai uss ke under hame some function run kar na hai
let arr = [10, 20, 30];
let ansarr = arr.map((number) => { // array se number lega
  return number * number;
});
console.log(ansarr);



/* Filter 
example--> [10,20,21,23,40]
aap ke pass [10,20,40] even aa gaya and baki bacha odd aa gaya so using filter you can do so*/

let arr2=[1,2,3,4,5,6,7]
let newarr =arr2.filter((number)=>
{
  if(number%2 === 0)
  {
    return true;
  }
  else
  {
    return false;
  }
})
console.log(newarr)