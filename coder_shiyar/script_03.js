// Lesson 30
// ------------------------------------- CSS in JS --------------------------------------
// 1 - document.body.style.rule = "Value";
// document.body.style.backgroundColor = "red";

// 2 - anyElement.style.Rule = "Value";
document.body.style.backgroundColor = "yellow";

// Lesson 31
// --------------------------------------- Selector Element ------------------------------------
// document.getElementById("Name Of ID") For One Element
// document.querySelector("selector in CSS") For One Element
// document.querySelectorAll("selector in CSS") For More Than One Element ( Need Loop because it is array)

// Lesson 32
// document.getElementsByClassName("name of class") ==> ( need loop )
// document.getElementsByTagName("name of element") ==> ( need loop )

// Lesson 33
// قواعد جافاسكربت تعمل بالترتيب سطر سطر مثل سي اس اس
// ---------------------------------------- Functions -----------------------------------------
// function for print doesn't return any value
function printHi() {
  console.log("Hi Mohamed Nour");
}

printHi();
/*
    Call Function:
        1 - printHi() --> in JavaScript
        2 - in HTML
            <p onclick="printHi()">...</p>
*/

// Lesson 34
// function returns value and recives Parametrs

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addTwoNumbers(10, 20));

// Lesson 35
// The Diffrences between var, let, const
/*
1 - var ===> Global Variables
    نستطيع أن نراه خارج السكوب الذي بداخله
2 - let ===> Local Variables
    لا نستطيع أن نراه خارج السكوب الذي بداخله
3 - const ===> Constant Variables
    متغير ثابت لا يتغير قيمته بعد اعطاءه قيمة أولية
    لا نستطيع أن نراه خارج السكوب الذي بداخله
*/
// لا تنشء متغيرين بنفس الأسم

// Lesson 36
// value property ===> For Get Value of input or textarea or select or any element active

// Lesson 37
// -------------------------------------- OOP ( Object Oriented Programming ) ---------------------------
// Class , Constructor , Object
class MyClass {
  constructor() {
    console.log("Yes");
  }
}
// a -
var o1 = new MyClass(); // Yes
// b -
onload = new MyClass(); // Yes

// Lesson 38
// Constructor : empty, parametrize, copy
class C1 {
  constructor(text) {
    console.log(text);
  }
}
let ob1 = new C1("Mohamed");

// Lesson 39
// Method in Classes
class C2 {
  constructor() {
    this.printHi();
  }
  printHi() {
    console.log("Hi Mohamed Nour");
  }
}
let ob2 = new C2();

// Lesson 40
// Method Returns Value
class C3 {
  constructor() {
    console.log(this.getHi());
  }
  getHi() {
    return "Hi Mohamed Nour";
  }
}
let ob3 = new C3();

// Lesson 41
// Method With Parameters
class C4 {
  constructor(name, age) {
    console.log(prinMsg(name, age));
  }
  printMsg(name, age) {
    return `Hi ${name}, Your age is ${age}`;
  }
}
let ob4 = new C4("Mohamed Nour", 24);

// Lesson 42
// -------------------------------------------- Events -------------------------------------------
// 1 - onload ===> On Load Page
// 2 - onclick ===> On Click on element
onload = function () {
  console.log("First Call");
};
onload = () => {
  console.log("Second Call");
};
onload = function printHi() {
  console.log("Hi");
};
/**
 * 1 -
 * HTML :
 * <p></p>
 * JavaScript :
 * document.getElementsByTagName("p")[0].onclick = ()=> {console.log("Clicked");}
 *
 * 2 -
 * HTML :
 * <p onclick="p()" ></p>
 * JavaScript :
 * function p() {
 *  console.log("Hello World!");
 * }
 *
 * 3 -
 * clas A {
 *  constructor() {
 *     let el = document.getElementById("a");
 *     a.onclick = () => {
 *      this.M();
 *      }
 *  }
 *  M() {
 *      alert("Clicked");
 *  }
 * }
 * onload = new A();
 */

// Lesson 43
// addEventListener
/*
    Form:
    el.addEventListener("event without on --> click, load, ...",
    function () {} or () => {} or function name() {});
*/

// Lesson 44
class C5 {
  constructor() {}
  printa() {
    console.log("a");
  }
}
let ob5 = new C5();
ob5.printa();

// Lesson 45
// ----------------------------------------------- Local Storage --------------------------------------
// Storaged from 5 to 10 Mega Byte (( Durable Storage - تخزين دائم ))
/*
    1 - localStorage.setItem("keyName", "Value For Key");

    2 - localStorage.getItem("keyName");

    3 - for Update : localStorage.setItem("keyName", "New Value For Key");

    4 - localStorage.removeItem("keyName");

    5 - localStorage.clear();

    6 - localStorage.length
    
    in Google Chrome We Found LocalStorage in <<< Application >>>
*/
let aa = {
  a1: 10,
  a2: 20,
  a3: 30,
};
localStorage.setItem("data", JSON.stringify(aa));

let a222 = JSON.parse(localStorage.getItem("data"));

// JSON.stringify('d') ===> For Storage Object in local Storage
// JSON.parse('d') ===> For Get Data Object From Local to code
// parseInt('data') ===> Transform from data to integer
// parseFload('data') ===> Transform from data to Float
// Simple Example :
/*
HTML :
<input type="color" id="co" />

JavaScript :
let el = document.getElementById("co");
el.addEventListener("change", function () {
    localStorage.setItem("color", el.value);
    document.body.style.backgroundColor = el.value;
});

if(localStorage.getItem("color") != null) {
    document.body.style.backgroundColor = localStorage.getItem("color");
    el.value = localStorage.getItem("color");
}
*/
