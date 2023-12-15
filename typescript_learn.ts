let varname:string = "heloo world"

varname.toLocaleUpperCase()

console.log(varname);

//number 
let nodata:number = 6

nodata.toExponential()

//boolean

let isloggedIn:boolean = false

isloggedIn.valueOf()

//Any

let hero:string;

function gethero(){
    return "thor"
}

hero = gethero();


//functions

// Here paramerr no accept any types of values such as string,int which shoudn't be
// function addNum1(no:number){   
//     no.toUpperCase();  //allowed while conert to javascript
//     return no + 2 
// }

// addNum("5")

function addNum(data : number){
    return data + 2
}
addNum(5)

function getUpper(str: string){
    return str.toUpperCase()
}

getUpper("Rahul")


function mulpara(name:string,email: string,ispaid:boolean){
    return { name, email, ispaid }; //retuen as an object

    // return [name, email, ispaid];   return as a array

}
const result = mulpara("Rahul", "example@example.com", true); //for calling as a array 
console.log(result); 

//I dont want to pass all value then 

function mulpara1(email: string, ispaid: boolean, name: string = "Null") {
    return { name, email, ispaid };
}

const result1 = mulpara1("example@example.com", true);
console.log(result1);

//output 
// { name: 'Null', email: 'example@example.com', ispaid: true }
// { name: 'Null', email: 'another@example.com', ispaid: false }


let loginuser  = (name:string,email: string,ispaid:boolean = false) => {
 return { name, email, ispaid }
}

loginuser("name","afsdf.com")


//Explicitly mention which type of function should return value

function getValue(myVal:number):number{  // here number will return only number type val from function
    return myVal + 2
}

getValue(5)

// doing same thing with arrow function

const getdata = (s: string):string =>{
    return "hwlo world"
}

//A littele adavance

const heros = ["A","B","C"]

heros.map((hero):string =>{
    return `hero is ${hero}`
})


function logerror(errmsg:string):void { // void mean reurn nothing
    console.log(errmsg)
}



function handleeror(errmsg:string):never { // never is mostly same as void but used to handle error in a robust way
    throw new Error (errmsg) 
}


//bad behaviour of objects
-----------------------------


//Object as a argument 
function createUser({name,isActive}:{name:string,isActive:boolean}){
    
}


createUser({name:"ABc",isActive:true})

createUser({name:"adadas",isActive:true})

function createCourse():{name:string,isActive:boolean}{
    return {name:"abc",isActive: true}
}
createCourse()


//Bad object behaviour


function createUser1({name,isActive}:{name:string,isActive:boolean}){
    
}

let newuser = {name:"ABc",isActive:true,email:"sdfsdf"}
createUser1(newuser) // alllow to pass email which is not defined in a createUser1





//type alias in typescript
---------------------------
type bool = boolean; // Create alias bool of boolean data type

type User = {
    name: string;
    age: number;
    isPaid: bool;
}

function createUser123(user: User):User{
    return {name:"sfdfsd",age:123,isPaid:true}
}
createUser123({name:"sfdfsd",age:123,isPaid:true})

// Readonly and optional
-----------------------------------
type User = {
    readonly id : string;
    name: string;
    age: number;
    isPaid: boolean;
}

let myuser :User = {
    id:"thisisid",
    name :"hacked.com",
    age:45,
    isPaid:true
}

myuser.name = "asdas" //allowd as it is not readonly
myuser.id = "dsfsf" // not allowd as its readonly

//With Array
type User1 = {
  readonly id: string;
  name: string;
  age: number;
  isPaid: boolean;
  // Prevent mutation with readonly
  hobbies: readonly string[];
};

const myUser: User1 = {
  id: "5678",
  name: "Jane",
  age: 25,
  isPaid: false,
  hobbies: ["cooking", "music"],
};

// Cannot add elements to hobbies because it's readonly
myUser.hobbies.push("dancing"); // Error


const numbers: ReadonlyArray<number> = [1, 2, 3];

// Similar error for modifying elements
numbers.push(4); // Error: Cannot modify a readonly array

// Accessing elements for reading is still allowed
const sum = numbers.reduce((acc, num) => acc + num, 0); // 6



// Combinning things 
----------------------
type User = {
    readonly id : string;
    name: string;
    age: number;
    isPaid: boolean;
    creditcardDetails?:number; // ? allows optional parameter
}

type creditCardNo = {
    cardNUmber: number
}

type cardDate = {
    cardDate : string
}

type catdDetails = creditCardNo & cardDate & {
    cvv : number
}


//Union
--------------------
let score : number | string = 44; 

score = 33
score = "33"

type user = {
    name: string;
    age : number;
}

type admin = {
    username : string;
    password: string;
}

//Shows example that assign two type to the variable rahul and can access property of both user and admin
let rahul : user | admin = {
    name:"test",
    age:43
}

// Doing with the functions
function getdbID (id: number | string) {
    console.log(`ID IS ${id}`)
}
getdbID(3)
getdbID("32")


function getdbID1 (id: number | string) {
    // id.toUpperCase() // Error bcz it is both of type string and number to resolve check type
    if( typeof (id) === 'string'){
        id.toUpperCase();
    }
    console.log(`ID IS ${id}`)
}

//Union with the types value
type alluserdetails = (user | admin) & {
    data: string;
}


// Working with arrays

const arra1 : number[] = [1,2,23]   //number only
const arra2 : string[] = ["23","234","234fdd"] // String Only

const arra3 : number[] | string[] = [123,213,432] 
// Here it means that in array
// all are number or all are string but [123,213,"432"] not allowed

const arra4 : (number | string)[] = [123,213,432,"23423"] // conain both number and string


let seatallotment : "first" | "window" | "middle"

seatallotment = "first" // allowed 
seatallotment= "crew" // not allowe strict type of only
