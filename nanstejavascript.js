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


function x(){
  var a = 7;
  function y(){
    consoloe.log(a);
  }
  return y;
}
var z = x()
console.log(z);

z();

it will print 7 coz when z = x() all the call stack and everything vanished but when return y it will 
return copy of y and assign to z and here it also remember its lexical scope which is a = 7 values and thats 
the clouser




===================================================================

  first class function  
  
Things learned:
1.  What is Function Statement ?
A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
      For Ex  -  function xyz(){
                            console.log("Function Statement");
                       }

2.  What is Function Expression ?
A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
      For Ex - var a = function(){
                            console.log("Function Expression");
                    }

3.  What is Anonymous Function ?
A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
      For Ex - function(){
                     }

4.  What is Named Function Expression ?
A.  A function with a name is known as Named Function Expression.
      For Ex - var a = function xyx(){
                            console.log("Names Function Expression");
                     }

5.  Difference b/w Parameters and Arguments ?
A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
       For Ex - function ab( param1, param2 ){
                              console.log("
                      }
       & When we call this function & pass a variabel in this ( ) that is our Arguments
       For Ex - ab( 4, 5 );

6.  What is First Class Function Or First class citizens?
A.   The Ability of use function as value,
*     Can be passed as an Argument,
*     Can be executed inside a closured function &
*     Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     } 

7. Function are heart of JS. They are called first class citizens or first class functions because they
  have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function




  var b = function (abc){
    console.log(abc());
    console.log('helo world');
}
function xyzzz(){
    console.log('assssssss');
}
console.log(b(xyzzz));

clouser and settimeout
==============================

const express = require('express');
const app = express();

function x(){
    
        for(var i= 0; i<=5;i++){
            function clouser(x){
                setTimeout(function (){
                console.log(x);
                }, x * 1000)   
           }
           clouser(i)
        }
   
}

x();

app.listen(3000);
