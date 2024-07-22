/* OPERATORS */
/*
   perform some opration
  
   type --> arithmetic    |binary|    unary
          +,-,*,/,**,%,   |      |  ++,--
*/

let a =10;
let b =15;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(a/b);
console.log(a**b);

console.log(++a); //pahle increment then use
console.log(a++); //use and increment

/* Assignement operator */
/*
  let a = a+5;
  a += 5(both are same)
  
*/

/* comparsion opeartor
 <=,>=,==,===,!==(ans is true or false)
*/

console.log(10>5);
console.log(10<5);
console.log(10<=5);
console.log(10>=5);
// strict equality --> value and type of data should be same
// loose equality --> only value compair

console.log('5'==5);//(loose equality)
console.log('5'===5);

/* TERNARY OPEARTOR 
(condition)? val1  : val2;
*/

let age =25;

let status =(age>18)? "i can vote": " i cannot vote";

console.log(status)

/* Logical opreator  and(&&) or(||) not(!)
how logical opeator woth with non bool--> 2 concept --> falsey(undefined/null/0/false/nan/'')

(false && "bikash")-->false
(false && 3)-->true

sort-circuting(false||true||false||true||false||false)
yaha false condition cheak agge bhad gaya next true aaya woh true return kar dega. i will no cheak next condition

*/

/*Bitwise operator

and,or,not,<<,>>^(degital electronics)
*/


