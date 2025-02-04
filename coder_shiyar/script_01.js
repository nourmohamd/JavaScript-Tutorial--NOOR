// --------------------- Ways To Write JavaScript -----------------------
/*
Way To Write JS Rules :

1 - In Script Element
    HTML
    <body>
        <script>
            Here Write Rules
        </script>
    </body>
2 - In File JavaScript
    HTML
    <script src="script.js" ></script>
    script
        Here Write Rules
*/

// Single Comments

/**
 * Multi Comments
 */

// -------------------------- Variables ---------------------------------

var a1 = "Data";
let a2 = "Data";
const a3 = "Data";
// String Variable Can be in "" | '' | ``
// The Best Form For String is ``
let a4 = false;
let a5 = 100;
let a6 = 100.2;
let a7 = undefined;
let a8 = null;
// let a = document.getElementById("section");
let a9 = `
<div class="section">
    <h3>Header 3:</h3>
    <p>LLL LLL LLL LLL LLL</p>
</div>
`;
let a10 = '<p id="Mohamed">Hello</p>';

// ------------------------------ DataTypes --------------------------------------
// DataTypes: String Number Null Undefiend Object(Array) Object(Class) Function Boolean

// typeof is a function returns type of data in it
console.log(typeof a1);
console.log(typeof a2);
console.log(typeof a3);

// Variable in String ( We Use ${} For Put Variable But With `` )
let username1 = "Mohamed Nour";
let el1 = `<div>Welcome ,${username1}</div>`;
let el2 = `
<p></p>
<h2></h2>
`;
document.write(el1);

// ------------------------------- Arithmetic Operators ----------------------------------
// + - * / % ** = ++ --

// ------------------------------- Compound Assignment
// +=  -=  *=  /=  %=  **=

// Lesson 10

// document.getElementById("Name Of Id") For Select An Element

// el.innerHTML For Make Or Return content of element on HTML Form

// el.innerText For Make Or Return content of element on Text

// Lesson 11

// outerHTML For Control HTML Element Outer - يتحكم بعنصر مع المحتوى الذي بداخله أو لارجاع العنصر مع محتواه
// outerText For Control Text Element Outer - يتحكم بعنصر مع المحتوى الذي بداخله أو لارجاع العنصر مع محتواه
// innerHTML for show inside content HTML
// innerText for show inside content Text

// Lesson 12

// -------------------------------- JavaScript Output ----------------------------------

window.alert("Mohamed Nour");

console.log("Mohamed Nour");

document.write("Mohamed Nour");

// console.log(el.innerHTML);

// console.log(el.innerText);

// Lesson 13

// --------------------------------- JavaScript Console -----------------------------------------

// console.log() For Print Message in console
console.log("Hi Mohamed");

// console.assert() Return error if parameter failure
console.assert(a22);

// console.error("msg") for show error
console.error("Here found error");

// console.info() same console.log
console.info("Hi Mohamed");

// console.warn() for show warn
console.warn("Hi Mohamed");

// console.clear() for clear all out in console
console.clear();

// console.count() for add 1 every time you call this function
console.count("Message Or No (default :)");

// console.groupCollapsed("Name Group") this group contains all rules under it until console.groupEnd();
console.groupCollapsed("Name Group :");

// console.groupEnd() For Ends group collapsed
console.groupEnd();

// console.group("Name Group") same groupCollapsed but this group is opend
console.group("A : ");
console.groupEnd();

// console.time("Message :") For Selects Time For console
console.time("Message");
console.timeEnd("Message");
