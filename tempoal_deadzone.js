/* TEMPROL DEAD ZONE

Variable scoping --> global
                 -->function
                 -->block

  
*/
//global scope-->can be access kahi bhe
var age =15; 
console.log(age)

//function scopeing--> can be accessed inside a function

let greet = ()=>
{ 
  var name="bikash"
  console.log(name);
}
greet();
s
/* TEMPROL DEAD ZONE
 opposite of hoisting/ cannot be accesed
*/