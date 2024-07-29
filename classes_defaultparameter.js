/* CLASSES
 class have state/properties and behaviour/functionality
*/

class human
{
  //properties
  age =30;//public-->date member can be used anywere
  #wt =80;// private can be accesed inside class
  ht=180;

  //behaviour, you can also make it private
  walking()
  {
    console.log("i am walking",this.#wt);// this keyword hamare current object ko darsha raha hai
  }
  get fetchweight()
  {
    return this.#wt;
  }
  set modifyval(val)
  {
    this.#wt =val;
  }
}
let obj = new human();
console.log(obj.age);
obj.walking();

/* if you want to access private part outside a function then.
so you have to create getter(to fetch) and setter(to set)

*/

//constructor-->to insert value in data members/initalize



class bikash
{ 
  age;
  ht;
  constructor(newage,newhight)
  {
    this.age = newage;
    this.ht = newhight
  }

}

let obj2 = new bikash(50,180);
console.log(obj2.ht)

/* DEFAULT PARAMETER--> when value not provided */

function sayname(myname="bikash")//default value dediya
{
  console.log("my name is :",myname);
}
sayname();
// if we pass null then output will be null
// and if we pass undefined then it will return default value