// Start Section 1

// Comment 1 (Single Comment)
/*
  Comment 2 (Multiple Comment)
*/

// Output

document.write("Mohamed");
// window.alert("Mohamed");
// alert("Mohamed");
console.log("Mohamed");

// Console
console.time("Time 1 ");
console.log("Mohamed");
console.error("Mohamed");
console.warn("Mohamed");
console.group("G 1 :");
console.log("A");
console.log("B");
console.group("G 2 :");
console.log("C");
console.log("D");
console.groupEnd();
console.groupEnd();
console.log("Mohamed");
console.timeEnd("Time 1 ");

console.table(["Mohamed", "Nour", "Abdo"]); /* Contents Array Important */
console.log("Mohamed", "Nour");
// Styling Console

console.log(
  "%cMohamed %cNour Abdo",
  "color: yellow;font-size: 20px",
  "color: red"
);
// All Statement Of Console From API

// What is ECMA Script 6 ==> Styling for language programing
// لجعل لغات البرمجة تشابه بعضها في الشكل

// DataType ==> String, Number, Boolean, Array==>Object, Object, Function, Null, Undefined
// typeof ==> function for know what is type of variable

console.log(typeof "Mohamed");

// Variables ==> Way To Call Variable is camelCase

var name = "Mohamed Nour Abdo";
let n1 = "Mohamed";
const n2 = "Mohamed";

// What is Defferent Of Variables ?

/**
 * Var
 * 1 - Redeclare (Yes)
 * 2 - Access Before Declare (Undefined)
 * 3 - Variable Scope Drama [Added To Window In Console] (Yes)
 * 4 - We Can see it Out {}
 * Let
 * 1 - Redeclare (Error)
 * 2 - Access Before Declare (Error)
 * 3 - Variable Scope Drama [Added To Window] (No)
 * 4 - We Can't see it Out {}
 * Const // لا نستطيع تغيير قيمته لأنه ثابت
 * 1 - Redeclare (Error)
 * 2 - Access Before Declare (Error)
 * 3 - Variable Scope Drama [Added To Window] (No)
 * 4 - We Can't see it Out {}
 */

// String Syntax

console.log("Mohamed");
console.log("'Mohamed'");
console.log('"Mohamed"');
// console.log(""Mohamed""); Error
console.log('"Mohamed"');
// console.log(''Mohamed''); Error
console.log("'Mohamed'");
console.log("Mohamed \\Nour \\Abdo");
console.log('Mohamed \nNour \n"Abdo"');

// Concatenation
var a = "We love";
var b = "JS";
var c = " ";
console.log(a + c + b);

// Template String
console.log("a" + " " + "b" + "\n" + "c" + " " + "d");
// Output is
/**
 * a b
 * c d
 */

// Backtick
var d = "Mohamed Nour Abdo";
var e = "I 'm good";
console.log(`Hi ${d} ,
How are you : ${e}`);
var myCard = `
<div>
<h1>Hi ${d}</h1>
<p>How are you : ${e}</p>

</div>
`;
document.write(myCard);
console.log(`Sum ==> 12 + 2 = (${12 + 2})`);

// العمليات الحسابية

console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log(10 ** 20);
console.log(10 % 20);
var f = 1;
f++;
console.log(f); // 2
++f;
console.log(f); // 3
console.log(f++); // 3
console.log(++f); // 5
console.log(f); // 5
// Same Work is x-- and --x

// In the console the color of string is black and the color of number is blue
console.log("############");
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+undefined);
console.log(+false);
console.log(+true);
console.log("############");
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-undefined);
console.log(-false);
console.log(-true);
// Type Casting
// +, -, ""-2, false - true
// هي عملية تحويل السلسلة المحرفية لأرقام
var q1 = "10";
var q2 = 20;
var q3 = true;

console.log(q1 + q2);
console.log(+q1 + q2);
console.log(q1 - q2);
console.log(q2 - q1);
console.log(+"");
console.log("" - 2);
console.log(false - true);
console.log(+false - +true);
console.log(q2 + q3);
console.log(q1 + q2 + q3); // 1020true
console.log(+q1 + q2 + q3); // 31

// Compound Assignment
// x++, ++x, x--, --x
// x += 1, x -= 1, x *= 1, x /= 1 ... ===> x = x Operator 1

// Number

console.log(1000000);
console.log(1_000_000);
console.log(10 ** 6);
console.log(1e6);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Number Methods

console.log((100).toString());
// console.log(100..toString()); Right
console.log((100.12321).toFixed(2));
console.log(parseInt("100.2131"));
console.log(parseInt("10000"));
console.log(parseFloat("100.2131"));
console.log(parseFloat("10000"));
console.log(Number.isInteger("109"));
console.log(Number.isInteger(109));
console.log(Number.isNaN("Osama"));
console.log(Number.isNaN("Osama" - 10));
console.log(Number.isNaN("Osama" + 10));

// Math Object
// round
console.log(Math.round(1.4));
console.log(Math.round(1.5));
console.log(Math.round(1.6));
// ceil && floor
console.log(Math.floor(1.9));
console.log(Math.ceil(1.1));
// min && max
console.log(Math.min(10, 20));
console.log(Math.max(10, 20));
// pow
console.log(Math.pow(10, 3));
// random Give me number from 0 until 1
console.log(Math.random());
console.log(Math.random() * 10); // 0.0==>9.0
console.log(Math.random() * 10 + 1); // 1.0==>10.0
// abs
console.log(Math.abs(-1));
// trunc
console.log(Math.trunc(1.9)); // remove after dot
1;
// Method String

var q4 = "Mohamed Nour Abdo";
// 1
console.log(q4[0]);
console.log(q4.charAt(0));
console.log(q4.length);
console.log(q4.trim());
console.log(q4.trimEnd());
console.log(q4.trimStart());
console.log(q4.toUpperCase());
console.log(q4.toLowerCase());
console.log(q4.toUpperCase().charAt(3));
// 2
// indexOf(value for search index it, point start (أختيارية))
console.log(q4.indexOf("o"));
// lastIndexOf(value for search index it, point start (أختيارية))
console.log(q4.lastIndexOf("o"));
// slice(start, end not include)
console.log(q4.slice(0, 7)); // Mohamed
console.log(q4.slice(-4, -1)); // Abd
console.log(q4.slice(-4)); // Abdo
// repeat(number of repeat)
console.log(q4.repeat(2)); //Mohamed Nour AbdoMohamed Nour Abdo
// split(splitter, number of piece)
console.log(q4.split(" ", 1));
console.log(q4.split(" ", 2));
console.log(q4.split(" "));
// substring(start, end not include)
console.log(q4.substring(0, 7));
console.log(q4.substring(7, 0));
console.log(q4.substring(-123131, 7));
// substr(start, end not include)
console.log(q4.substr(0, 7));
console.log(q4.substr(0, 4));
console.log(q4.substr(-4));
// includes("value",point of start) ===> bool
console.log(q4.includes("A", 0)); // true
console.log(q4.includes("A", 15)); // false
// startsWith("value",point of start) ===> bool
console.log(q4.startsWith("Mohamed")); // true
// endsWith("value",point of start) ===> bool
console.log(q4.endsWith("Abdo")); // true

// Comparison Operators
// ==, ===, !=, !==, >, <, <=, >=
// Logical Operators
// ! not, && and, || or

// If condations

// if(condation1) {},
// if(condation1) {} else {},
// if(condation1) {} else if (condation2) {} ... else {}

// Nested if Condations - يعني جمل شرطية متداخلة شغلتها بسيطة

// Conditional (Ternary) Operator - جملة الشرط المختصرة
// (10 === 10)? true: false;

// عرض بيانات بديلة عن بياناتك ضمن شروط محددة
var q5 = false;
// || ==> false, null, undefined

console.log(`Hi ${q5 || "Mohamed"}`); // Hi Mohamed
q5 = "Abdo";
console.log(`Hi ${q5 || "Mohamed"}`); // Hi Abdo

// Nullish Coalescing Operator ?? ==> null, undefined
q5 = false;
console.log("Hi " + q5 ?? "Mohamed"); // Hi false

// Switch Case
var q6 = 2;
switch (q6) {
  case 1:
    console.log("Hello 1");
    break;
  case 2:
    console.log("Hello 2");
  case 3:
    console.log("Hello 3");
    break;
  default:
    console.log("Hello All");
}
// Output is
// Hello 2
// Hello 3

// Array

var q6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(q6[0]); // 1
q6[0] = 10;
console.log(q6[0]); // 10
var q6 = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10]];
console.log(q6);
console.log(q6[6]);
console.log(q6[6][3]);
q6[6][3] = "Mohamed";
console.log(q6[6][3].charAt(0).toLowerCase());

console.log(Array.isArray(q6));

// Methods Of Array

// length === index of last Element + 1, يعني ذلك أن الطول يسبق الانديكس بواحد
console.log(q6.length); // 7
q6[q6.length] = "Nour";
q6[q6.length] = "Abdo";
console.log(q6.length); // 9
q6.length = 3;
console.log(q6.length); // 3
console.log(q6[3]); // undefined

// Array method (Add && Remove)

// unshift(el1,el2,el3,....) - add element in front array
q6.unshift(11, 12, 13, 14);
console.log(q6.length); // 7
// shift() - remove first element from array
q6.shift();
console.log(q6.length); // 6
// push(el1,el2,el3,....) - add element in last array
q6.push(11, 12, 13, 14);
console.log(q6.length); // 10
// pop() - remove last element from array
q6.pop();
console.log(q6.length); // 9

// Searching Array

// indexOf(element, point of start)
// 12 13 14 1 2 3 11 12 13
console.log(q6.indexOf(12)); // 0
// lastIndexOf(element, point of start)
console.log(q6.lastIndexOf(12)); // 7
// includes(element, point of start)
console.log(q6.includes(11)); // true

// Sorting Array
// nameArray.sort()
console.log(q6.sort());
// nameArray.reverse()
console.log(q6.reverse());

// Slicing Array
// slice(Start, End not include)
console.log(q6.slice(0, 3)); // [12, 13, 14]

// Splicing Array
// splice(Start, Number Of element (Remove), Element For Add....)
console.log(q6.splice(0, 3, 1, 2, 3)); // return remove of element [3, 2, 4]
console.log(q6); // [1, 2, 3, 13, 13, 12, 12, 11, 1]

// Concat Arrays

console.log([1, 2, 3].concat([4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// Join(splitter)
var q7 = ["Hello", " Mohamed", " Nour Abdo"];
console.log(q7.join()); // Hello, Mohamed, Nour Abdo
console.log(q7.join("")); // Hello Mohamed Nour Abdo
console.log(q7.join("|")); // Hello| Mohamed| Nour Abdo

// Loops ===> for, while, do while
// Nested Loop - حلقات متداخلة
// break, continue
/**
 * Example :
 * mainloop: for(let i =1;i<=10;i++) {
 *    insideLoop: for(let j=0;j<10;j++) {
 *      if(j==2) {
 *    break mainloop; || break insideloop
 * }
 * }
 * }
 */

// Functions
function printHello() {
  console.log("Hello");
}
printHello(); // Hello
printHello(); // Hello
printHello(); // Hello

function sumNumber1(n1, n2, n3) {
  return n1 + n2 + n3;
}
console.log(sumNumber1(10, 20, 30)); // 60
// يمكنك إستدعاء التابع في أي مكان تريده حتى لو قبله أو بعده
function sumNumber2(n1 = 1, n2 = 2, n3 = 3) {
  return n1 + n2 + n3;
}
console.log(sumNumber2()); // 6
console.log(sumNumber2(10)); // 15
console.log(sumNumber2(10, 20)); // 33
console.log(sumNumber2(10, 20, 30)); // 60

function sumNumber3(...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
console.log(sumNumber3(1, 2, 3, 4, 5)); // 15

// Anonymous Function
/**
 * HTML
 * <button type="button" id="btn1" >Show</button>
 * JavaScript
 * // BY Anonymous Function
 * document.getElementById("btn1").onclick = function () {
 *  console.log("Show")
 * };
 *
 * // BY Function
 * function show() {
 *  console.log("Show");
 * }
 * document.getElementById("btn1").onclick = show;
 */

let w1 = function (n1, n2) {
  return n1 + n2;
};
console.log(w1(10, 20)); // 30
// ولكننا لا نستيطع استدعاءه قبل الإنشاء

// function inside function - دالة داخل دالة

// Arrow Function

let w2 = () => {};
/**
 * ملاحظات مهمة
 * في حال كان عندي بارميتر واحد يمكنني حذف الاقواس
 * في حال كان عندي جملة واحدة يمكنني عندها حذف الريتيرن وحذف الأقواس المذخرفة أيضاً في حال جملة واحدة
 * في حال لا يوجد برميترات يمكنني كتابة أندرسكور بدل الاقواس المنحنية
 *
 * let n = (n1,n2)=>{n1+n2};
 * let n = (_)=>{console.log("Yes")};
 * let n = _=>{console.log("Yes")};
 *let n = n1=>{console.log(n1)};
 */

// Scope
// 1 - المتغيرات يمكن رؤيتها داخل السكوب يلي هي فيه
// 2 - المتغيرات العامة جلوبل أستطيع ان اراها في اي سكوب
// 3 - لن نستطيع أن نرى المتغيرات في مكان ما خارج السكوب يلي هنن فيو
// let - const without (var)
// يمكن تسمية متغيرين بنفس الاسم ولكن كل واحد منهم بسكوب خاص

// Block Scope [If, For, Switch]

// Ex1:
var x1 = 10;
if (10 === 10) {
  var x1 = 50;
}
console.log(x1); // 50 Becouse it's Global Variable
// Ex2:
var x1 = 10;
if (10 === 10) {
  let x1 = 50;
}
console.log(x1); // 10 Becouse let isn't global variable ==> مسؤول ضمن السكوب يلي فيو فقط
// Ex3:
var x1 = 10;
// if (10 === 10) {
//   console.log(x1); // Error
//   let x1 = 40;
// }
console.log(x1);
// في حال طبعنا المتير قبل إنشاءه غير صحيح لذلك اعطانا خطأ
var x1 = 10;
if (10 === 10) {
  console.log(x1); // 10
}
// لن يعكينا خطأ لاننا طبعا متغير نوعه جلوبل

// المختصر هو أن كل سكوب عبارة عن صفحة لحالو وذلك عندما يكون المتغير من نوع ليت أو كونست عدا فار
// عند إنشاء بلوك سكوب وتستدعي فيه أحد المتغيرات بالبداية يبحث عن هذا المتغير فإذا وجده داخل هذا البلوك وإذا ما لاقاه يبحث عنه خارج السكوب

// Function Scope (Lexcical Scope)
// المتغيرات الموجودة داخل دوال تستطيع رؤية المتغيرات في الدالة الاب والعكس غير صحيح

function A1() {
  var a = 10;
  function A2() {
    // يسأل نفسه هل المتغير موجود داخل هذه الدالة إذا لا يخرج للدالة الأكبر الأب ويسأل نفس السؤال إذا لا يخرج خارج الدوال ويعود ويسأل نفس السؤال
    console.log(a);
  }
  A2();
}
A1();
// يعني يضل يبحث عن المتغير تدريجياً حتى يجده وهو في طريقه للأعلى

// End Section 1
