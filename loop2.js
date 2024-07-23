
/* FOR EACH */
let arr =[10,20,30];

arr.forEach((value,index)=>
{
  console.log("number : " , value ,"index : ", index)
})
//traditional method

// for(let index1 =0 ; index1<=arr.length;index++)
// {
//   console.log(arr[index1])
// }

/* FOR in  enumerate properties of object*/
let obj={
  name:'bikash',
  age:169,
  weight:50

}
for(let key in obj)
{
  console.log(key,' ',obj[key])
}
/* FOR OF */
let arr1 =[10,20,30,40];
for(let val of arr1)
{
  console.log(val)
}
