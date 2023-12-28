let ,const and temporal dedadzone
====================================

let - > used for temporal dedzone...

  like

consoloe.log(a);
let a = 10;

it will shows reference error..

var attached to global window obj but let is not bcz it store val in a seprate memory...And cannot access untill there are some values inside it.

so temporal dedadzone is time between hositing (initialize) and assigning value to variable...

  let and  const are hoisted in javascript...
  
  duplicate delclare is allow with var but not with let..
  ex..
  let a = 10;
let b = 10 

error but var a= 199;
var a= 34234; allowd ...




block scope and shadowing
============================
let and scopre are block scoped ...


  in const we have to assign value at time of declarations 
const a= 10; wwhich cannot change through programmme...
  but const a; is not allowd while let a; is allowd thats the difference 

clousers
============
Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in 
execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting




