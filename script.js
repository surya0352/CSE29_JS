//FIRST CODE
/*
console.log("Hello World")
document.write("Hello World!")
var linebreak = "<br>";
document.write(linebreak);
*/

//VARIABLE DECLARE AND PRINTING ON CONSOLE
/*
var num = 10;
console.log(num);
console.log(typeof (num));
num = false;
console.log(num);
console.log(typeof (num));
var num = "surya";
console.log(num);
console.log(typeof (num));
var num = null;
console.log(num);
console.log(typeof (num));
var num = undefined;
console.log(num);
console.log(typeof (num));
*/
//FUNCTION
/*
var sayHello = function () {
    alert('hello world!');
}
    */
//ARRAY
/*
var numberArray = [1, 2, 3];
var animals = new Array("cat", "dog", "mouse", "lion");
*/
//OBJECT
/*
var person = {
    name: 'Barack Hussein Obama II',
    age: '51',
    title: '44th President of the United States'
}
*/
//SYMBOL
/*
const sym1 = Symbol(4);
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
if (sym1 == sym2) {
    console.log("true")
}
else {
    console.log("false")
}
*/
//ARITHMATIC OPERATION
/*
var a = 100; var b = 200; var c = 150; var linebreak = "<br>";
document.write("a+b+c=");
result = a + b + c;
document.write(result);
document.write(linebreak)

document.write("a + b = ");
result = a + b;
document.write(result);
document.write(linebreak);

document.write("a - b = ");
result = a - b;
document.write(result);
document.write(linebreak);

document.write("a * b = ");
result = a * b;
document.write(result);
document.write(linebreak);

document.write("a / b = ");
result = a / b;
document.write(result);
document.write(linebreak);

document.write("a % b = ");
result = a % b;
document.write(result);
document.write(linebreak);
*/
//LOGICAL OPERATION
/*
document.write("(a == b) => ");
result = (a == b);
document.write(result);
document.write(linebreak);

document.write("(a < b) => ");
result = (a < b);
document.write(result);
document.write(linebreak);

document.write("(a > b) => ");
result = (a > b);
document.write(result);
document.write(linebreak);

document.write("(a != b) => ");
result = (a != b);
document.write(result);
document.write(linebreak);

document.write("(a >= b) => ");
result = (a >= b);
document.write(result);
document.write(linebreak);

document.write("(a <= b) => ");
result = (a <= b);
document.write(result);
document.write(linebreak);
*/
//ASSIGNMENT OPERATION
/*
document.write("Value of a => (a = b) => ");
result = (a = b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a += b) => ");
result = (a += b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a -= b) => ");
result = (a -= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a *= b) => ");
result = (a *= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a /= b) => ");
result = (a /= b);
document.write(result);
document.write(linebreak);
*/
// FOR LOOP
/*
let count;
document.write("starting LOOP" + "<br/>")

for(count=0;count<10;count++)
{
    document.write("current count: " + count + "<br/>");
}
document.write("loop stopped");
*/
//FOR(KEY IN OBJECT) LOOP
/*
const person ={
    fname:"Surya kant",
    lname:"Ray",
    age:19,
};
for(let x in person)
{
    document.write("person details: "+ x+":"+person[x] + "<br/>");
}
*/

//WHILE LOOP

/* 
let count=0;
document.write("starting LOOP" + "<br/>")
while(count<10)
{
    document.write("current count: " + count + "<br/>");
    count++;
}
document.write("loop stopped");
*/

//if 

//if--else 

//switch case
/*
var grade='A';
document.write("ENTERING SWITCH BLOCK <br/>");
switch(grade)
{
    case 'A' :document.write("good job <br/>");
    break;

    case 'B' :document.write("pretty good <br/>");
    break;

    case 'C' :document.write("passed <br/>");
    break;
    
    case 'D' :document.write(" not so good <br/>");
    break;

    case 'F' :document.write(" failed <br/>");
    break;

    default :document.write("unknown grade <br/>");
}
document.write("Existing switch block");
*/
    
