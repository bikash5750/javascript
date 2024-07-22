/* STRINGS
  sequence of character
*/

let first_name ="bikash";
let last_name ="gupta";
console.log(typeof(last_name));

//other way

let name = ` bikash 
gupta` // it will print in second line

let tell_name = new String("bikash gupta") // it will return with data type[string: bikash gupta](example)


/* OPEARTIONS */

let op1 = 'english';
let op2 = ' hindi';
console.log(op1+op2);// concat
let finalans = `${op1}${op2}`;//other way
console.log(finalans)


/* LENGTH */
console.log(op1.length)

/* UPPER AND LOWER CASE */
console.log(op1.toUpperCase())

/* SUB-STRING */
let str=` helloo gungun09`
console.log(str.substring(2,10))// endind index is exclusive

/* SPLIT-METHOD--> saperation on basis of space */
let sentance =" hwlllo ji kaise ho";
console.log(sentance.split(' '))