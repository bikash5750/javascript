/* CALL STACK AND HOISTING */

/*  hoisting is a process in which the variable(var-keyword and not the value assigned to that) and function declaration ko SHIFT  to the top of the current scope
*/


saymyname("bikash");//mean compilation time per function upper shift ho gaya war na iss ko run he nahi kar na tha
function saymyname(finalname)
{
  console.log(finalname)
}

/* CLASS HOISTING--> not possible */
// blueprint is classand instance is object

class human{

}
const obj1= new human