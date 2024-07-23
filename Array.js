/* DATA TYPE
  -->PRIMITIVE(STR,BOOL,ETC), fixed side
  -->NON-PRIMITIVE(ARRAY,OBJECT,FUNCTION),ALSO KNOWN AS REFERENCE TYPE, not fixed size
*/

/* MEMORY
 primitive goes to stack
 non-primitive goes to heap, to access heap memory you need a reference that is present in stack
 example: let arr= [1,2,4,5]
 here 1,2,4,5 goes to heap
 and arr goes to stack

*/

/*
OBJECT --> COLLECTION OF KEY VALUE PAIRE
 */

let obj={
  name:"bikash",
  "full name": "bikash gupta",// space hai then double inveted
  weight:85,
  greet: function()
  {
    console.log("hi bikash")
  }
}
obj.greet();

/* ARRAY */

let arr1 =[1,"bikash",2];
console.log(arr1);

//array constructor
let brr = new Array('bikash',1,2);
console.log(brr);
console.log(brr[2])

/* METHODS */

let newarr=[1,2,3,4]
brr.push('bikash');
brr.push('abhay');
brr.pop();
brr.shift()// ledt most element get removed
brr.unshift('ankit')//add value in left most side
brr.slice(1,3);//1 start index and 3 last index excluding 3rd index
brr.splice(0,2,'hehehe')//(index,kitna value, kya dal na hai)change contant,insert,remove,replace
console.log(brr)