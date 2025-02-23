// Start Section 3

// Single Comment

/*
Multiple Comments
*/

//                          Object Orieanted Programing (OOP)
// Constructor Function
// مخطط تستطيع التعديل عليه وعم منه نسخة لكل عميل
// دائماً أول حرف كبير
function User(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
// Here this word return on Object that's build function
let userOne = new User(1, "Mohamed", 3000);
console.log(userOne);
//.....
console.log(userOne.id); // 1
console.log(userOne.name); // Mohamed
console.log(userOne.salary); // 3000
// New Syntax For Function Constructor :
class User1 {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
}
let userTwo = new User1(2, "Nour", 4100);
console.log(userTwo);
console.log(userTwo.id); // 2
console.log(userTwo.name); // Nour
console.log(userTwo.salary); // 4100
// للتأكد من أن اوبجكت يعود على كلاس معين
//                          Instanceof
console.log(userTwo instanceof User1); // true
console.log(userTwo instanceof User1); // true
// Properties and Methods
// Note1 : أي شيء داخل البناء يدعى ميزة ===> Properties
// Node2 : Anything out Constructor Called (Method)
class User3 {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.msg = function () {
      return `Hello ${this.name}`;
    };
  }
  Msg() {
    return `Hello ${this.name}, I filled happy after you Joined with us`;
  }
  UpdateUserName(name) {
    this.name = name;
  }
}
let userThree = new User3(3, "Mostafa", 3567);
console.log(userThree); // {id: 3, name: 'Mostafa', salary: 3567, Msg: ƒ}
console.log(userThree.id); // 3
console.log(userThree.name); // Mostafa
console.log(userThree.salary); // 3567
console.log(userThree.msg); // ƒ () {return `Hello ${this.name}`;} ===> Native Code (Inside Constructor)
console.log(userThree.Msg()); // Hello Mostafa, I filled happy after you Joined with us
console.log(userThree.msg()); // Hello Mostafa
console.log(userThree.Msg); // Native Code
// Update Date
userThree.UpdateUserName("Mohamed Nour Abdo");
console.log(userThree.name); // Mohamed Nour Abdo
// لمعرفة تفاصيل أكثر حول شيء ما ضع الؤشر فوقه ثم اضغط على كونترل ثم كي + أي
// ctrl ===> k+i
//                          Build in Constructor
let strOne = "Mohamed";
let strTwo = new String("Mohamed");
console.log(strOne); // Mohamed
console.log(strTwo); // String {'Mohamed'}
console.log(typeof strOne); // string
console.log(typeof strTwo); // object
console.log(strOne instanceof String); // false
console.log(strTwo instanceof String); // true
console.log(strOne.constructor === String); // true
console.log(strTwo.constructor === String); // true
// هذا أكبر دليل على أن المتغير العادي استخدم البناء الموجود في الصنف الأساسي
// Number ....
// طبعاً هذا الحكي بيطبق على أي نوع بيانات
//                          Static Properties And Methods
// تستخدم فقط مع الكلاسات
// لا يمكن استدعائها إلا بإستخدام أسم الكلاس
// هي عبارة عن شي مسترك بكامل الكلاس مثل عدد الطلاب مجموع العلامات وهكذا ...
class User4 {
  // Static Properties :
  static count = 0;
  constructor(id, name) {
    this.id = id;
    this.name = name;
    User4.count += 1; // count++;
  }
  // Static Methods :
  static sayHello() {
    return `Hello From Class (Static Methods)`;
  }
  static countUsers() {
    return `${this.count} User Created (Static Methods)`;
  }
}
let One = new User4(1, "Mohamed Nour");
let Two = new User4(2, "Mahmoud");
let Three = new User4(3, "Ali");
let Four = new User4(4, "Ahmad");
console.log(User4.count); // 4
console.log(User4.sayHello); // Native Code
console.log(User4.sayHello()); // Hello From Class (Static Methods)
console.log(User4.countUsers); // Code Native
console.log(User4.countUsers()); // 4 User Created (Static Methods)
//                          Inheritance
// Parent Class <====== Derived Class (Contents All Properties From it and parent it)
class A {
  static count = 0;
  constructor(id, username) {
    this.id = id;
    this.username = username;
    A.count++;
  }
  syaHello() {
    return `Hello From Class ${this.username}`;
  }
}
class B extends A {
  constructor(id, username, permission) {
    super(id, username);
    this.permission = permission;
  }
}
class C extends B {
  constructor(id, username, permission, ability) {
    super(id, username, permission);
    this.ability = ability;
  }
}
let ObjectFromA = new A(1, "Mohamed Nour Abdo");
let ObjectFromB = new B(2, "Yousef", 32);
let ObjectFromC = new C(3, "Ahmad", 51, true);
console.log(A.count); // 3 (Inheritance)
// The parent Doesn't access to the proprties of Children
//                          Encapsulation
// الكلاس في الوضع الطبيعي تكون سلوكياته ووظائفه وضع العام =====> Public
// We Use Private By (#nameVaribale) for Security
// We Access To This Varibale By Spicial Methods
// Encapsulation is so useful for make the application is very easily (مرن)
class D2 {
  #e;
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
  getE() {
    return this.#e;
  }
  setE(value) {
    this.#e = value;
  }
}
let objectFromD = new D2(1, "Nour", 2000);
objectFromD.setE(1999);
console.log(objectFromD.getE()); // 1999
// In Default You don't access to the preivate variable
// The Encapsulation is just set, get
// الوراثة للبابليك فقط وليس للبرايفت
// نستطيع عمل دالة من نوع خاص ايضاً

//                          Prototype
// هو نموذج أو مخطط سيتم إنشاءه من أجل كل كلاس اوتوماتيكياً
// Form : console.log(nameClass.prototype);
console.log(User4.prototype);
// أي أوبجكت ينكته أن يرى كل البروتوتايب عبر دوت
// أي شيء تم إنشاءه  عبر أي كلاس يستطيع أن يرى كل البروتوتايب الموجودة في ذلك الكلاس
// الاوبجكت يرث كل البروتوتايب من الكلاس الأصل
// Build Prototype :
// nameClass.prototype.newName = function () { Statements }
// ممكن أن يكون متغير أيضاً ولكن لا تستطيع الوصول لها إلا عبر أوبجكت من ذلك الصنف أو عبر الصنف ذاته
// There is Class called Object can control with all classes
// Object.prototype.newName = function | Value | Object
// Example :
String.prototype.addDot = function () {
  return `.${this}.`;
};
let o1 = "Nour";
console.log(o1.addDot()); // .Nour.
// Of course the new function only for String , but if you want to make it for all classes
// you can write (Object.prototype.addDot = function () {return `.${this}.`;;)
//                          Object Meta Data and Descriptor
// طرق التحكم بالاوبجكت بطريقة احترافية
const myObject1 = {
  a: 1,
  b: 2,
};
// 1 - Add new properties to object
// Form :
/**
 * (Object.defineProperty(nameObject, 'nameKey', {
 * writeable: true || false,
 * enumerable: true || false,
 * configurable: true || false,
 * value: value,
 * }));
 */

// الشرح
// writeable ===> مؤشر يتيح لك تغيير قيمة المفتاح فيما بعد اذا اردت ذلك
// enumerable ===> يسمح لك بالتحكم بعملية اللوب هل تريد إظهار العنصر أم لا
// configurable ===> يسمح لك بالتحكم بعملية إعادة عمل ديفاين لنفس المفتاح مع تغيير الضبط تبعه
// value ===> قيمته الجديدة
// Example :
Object.defineProperty(myObject1, "c", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: 3,
});
console.log(myObject1.c); // 3
myObject1.c = 100;
console.log(myObject1.c); // 100

for (let prop in myObject1) {
  console.log(prop);
}
// Output: a,b,c
// 2 - Delete Key From Object New Method
// Form :
console.log(delete myObject1.c);
for (let prop in myObject1) {
  console.log(prop);
}
// Output: a,b ===> Only
// 3 - Add Many Properties To Object
Object.defineProperties(myObject1, {
  c: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 3,
  },
  d: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 4,
  },
});
for (let prop in myObject1) {
  console.log(prop);
}
// Output: a,b,c,d
// Default All Properties False : writable, enumerable, configurable
// 4 - طريقة إحضار قيمة المفتاح مع حالاته
// A - For Single :
console.log(Object.getOwnPropertyDescriptor(myObject1, "c"));
// {value: 3, writable: true, enumerable: true, configurable: true}
// B - Get All Keys With Status :
console.log(Object.getOwnPropertyDescriptors(myObject1));

//                          Time And Date

// WebSite For Get Time : timeanddate
// Form : let dateNow = new Date();
let dateNow = new Date();
console.log(dateNow); // Wed Dec 27 2023 19:53:35 GMT+0300 (GMT+03:00) (Like This : Time Now)
console.log(Date.now()); // 1703696046854 Time With Millisecond
// From 1970/1/1 Until This Moment
// Each 1 Second = 1000 millisecond
// That Means :
console.log(Date.now() / 1000); // Number Of Seconds
console.log(Date.now() / 1000 / 60); // Number Of Minutes
console.log(Date.now() / 1000 / 60 / 60); // Number Of Hours
console.log(Date.now() / 1000 / 60 / 60 / 24); // Number Of Days
console.log(Date.now() / 1000 / 60 / 60 / 24 / 30); // Number Of Months
console.log(Date.now() / 1000 / 60 / 60 / 24 / 30 / 12); // Number Of Years

// Methods For Time && Date
let birthdayDate = new Date("2001-12-9 10:5:12");
console.log((dateNow - birthdayDate) / 1000 / 60 / 60 / 24 / 30 / 12); // My Age
// 1 - getTime() ==> Number Of MilliSecond
console.log(birthdayDate.getTime());
// 2 - getDate() ==> Day Of Month
console.log(birthdayDate.getDate()); // 9
// 3 - getFullYear() ==> return date
console.log(birthdayDate.getFullYear()); // 2001
// 4 - getMonth() ==> return index of Month 0-->11
console.log(birthdayDate.getMonth()); // 11
// 5 - getDay() ==> Day Of the week (index) 0 ---> 6
console.log(birthdayDate.getDay()); // 0
// 6 - getHours() ==> Hour
console.log(birthdayDate.getHours()); // 10
// 7 - getMinutes() ==> Minutes
console.log(birthdayDate.getMinutes()); // 5
// 8 - getSeconds() ==> Seconds
console.log(birthdayDate.getSeconds()); // 12
// 9 - setTime(MilliSeconds)
// عدد الميلي ثانية التي مرت منذ عام 1970 حتى الآن
dateNow.setTime(0);
console.log(dateNow); // Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00)
// ما مر ولا وقت
// 10 - setDate(Day) ==> Positive for forward , Negative for back
dateNow.setDate(10);
console.log(dateNow); // Sat Jan 10 1970 02:00:00 GMT+0200 (GMT+03:00)
dateNow.setDate(0);
console.log(dateNow); // Wed Dec 31 1969 02:00:00 GMT+0200 (GMT+03:00)
// Note: Day<0 ==> back month
// Note: Day>30 ==> forwrd Month
// 11 - setFullYear(Year, Month[0-11], Day[1-31])
// 11 - setMonth(Month[0-11], Day[1-31])
dateNow.setFullYear(2010);
console.log(dateNow); // Fri Dec 31 2010 02:00:00 GMT+0200 (GMT+03:00)
// 12 - setHours(Hour[0-23], Minute[0-59], Seconds[0-59], Ms[0-999])
// 13 - setMinutes(Minute[0-59], Seconds[0-59], Ms[0-999])
// 14 - setSeconds(Seconds[0-59], Ms[0-999])
// طرق كتابة التاريخ والوقت
// new Date(timestamp)
// new Date(Date String)
// new Date(Numeric Values)
// 1 - "Oct 25 1982"
// 2 - "10/25/1982"
// 3 - "1982-10-25"
// 4 - "1982-10"
// 5 - "1982"
// 6 - "82"
// 7 - 1982,9,25,2,10,0
// 8 - 1982,9,25
// 9 - "1982-10-25T06:10:00Z" ===> Z(Time Zone ===> Area, T(Time))
let hsad = new Date(1982, 9, 25, 2, 10, 0);
console.log(hsad);

//                          Tracking Operations Time
// let timerA = new Date();
// for (let i = 0; i < 100000; i++) {
//   console.log(`i = ${i}`);
// }
// let timerB = new Date();
// let timerC = timerB - timerA;
// console.log(timerC / 1000); // Timer Of Proccess

console.log(performance.now()); // بدال العملية السابقة
//                          Generator
// That's is a function open when i need it
// Too it's is a object ==> ممكن أعمل عليها لوبينغ
// Syntax :
function* generatorNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
// Here each yield it's a step, I can use it By loop or next()
let generator = generatorNumbers(); // iterator
console.log(generator); // ===> print Function on form Object
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: undefined, done: true}
// The value = value of yield
// The done = status generator (End, Not End)
console.log(generator.next().value); // undefined
console.log(generator.next().done); // true
let generator2 = generatorNumbers();

for (let value of generator2) {
  console.log(value); // 1 2 3 4
}
for (let value of generator2) {
  console.log(value); // Not Output Because I needed before
}
//                          Delegate Generator
// عمل دمج لأكثر من مولد مع بعض
function* generatorNum() {
  yield 1;
  yield 2;
  yield 3;
}
function* generatorLetter() {
  yield "A";
  yield "B";
  yield "C";
}
function* concatTwoGenerator() {
  yield* generatorNum();
  yield* generatorLetter();
  yield* [4, 5, 6]; // ===> Without * ===> print Just Array
}
// If we write yield without * ==> سيتم التعامل مع البيانات على نوعها بدون القيم التي بداخلها يعني الدوال ستصبح بالاسم فقط
/**
 * اذا لم نضع نجمة سيتم التعامل مع البيانات عبر نوعها يعني الييلد الاول عبارة عن دالة
 * فقط وليست القيم 1 2 3
 *
 * نحتاج ل 10 مرات
 * "next()"
 * في أول 9 سيطبع القيم وفي العاشرة سيعطي خطأ
 * طيب إذا كنت اريد حظر أخر 4  ==> Delete Last four next()
 * Here You Use return() ===> وممكن تأخذ قيمة وممكن لا في حال لم تعطيها قيم تعطي ===> undefined
 * وإذا اعطيتها قيمة تطبعها ثم بعدها كلهم غير معروف
 * undefined
 */
// Example :
function* g() {
  yield 1;
  yield 2;
  yield 3;
  return "Mohamed Nour";
  yield 4;
}
let g1 = g();
console.log(g1.next()); // {value: 1, done: false}
console.log(g1.next()); // {value: 2, done: false}
console.log(g1.next()); // {value: 3, done: false}
console.log(g1.next()); // {value: "Mohamed Nour", done: true}
console.log(g1.next()); // {value: "Mohamed Nour", done: true}
function* G() {
  let index = 0;
  while (true) {
    yield index;
    index++;
  }
}
let g2 = G();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
//......
// الفائدة هنا أن الجهاز لن يهنك لأن المولد يولد حسب الطلب

//                          Modules
// import && export
// هي عملية إستراد وتصدير للملفات بين ملفات الجافا سكربت
// When you use moduled you should to use this code in file HTML
// <script src="path" type="module" ></script> ===> required
/**
 * Example :
 *
 * export files : (A.js)
 *
 * First Method :
 * export let a1 = 10;
 * export let a2 = [1, 2, 3];
 * export function () { console.log("B"); }
 * Second Method :
 * let a1 = 10;
 * let a2 = [1, 2, 3];
 * export {
 * a1, a2}
 *
 * import files : (B.js)
 *
 * First Method :
 * import {a1, a2} from "./A.js";
 * Second Method :
 * import a1 from "./A.js";
 * Third Method :
 * import {a1 as A, a2 as B} from "./A.js"; // Here i change name of variable
 */
// import alias :
/**
 * import {a1 as A, a2 as B} from "./A.js";
 */
// export alias :
/**
 * export {
 * a10 as a1,
 * a20 as a2
 * }
 */
// Default Export :
// Syntax : export default Anything;
// لا يمكنك استدعاء التصدير الافتراضي داخل {} في جملة الإستراد
// إستدعاءها يكون بالشكل
// import here(Call Export Default), {} from "./A.js";
// تستدعيه بأي اسم كان
// ممكن أن يكون دالة غير معروفة
// Import All :
// import * as all from "./A.js";
// بهذا الشكل نحن استدعينا كل شيء ولاستدعاء شيء معين نكتب
// all.thing

//                          JAVASCRIPT OBJECT NOTATION (JSON)
/**
 * json is a text format for storing and transporting data
 * تصف نفسها بنفسها وسهلة الفهم بإذن الله
 * 1 - json is ===> {}
 * 2 - json is a key:value
 * 3 - key is a string ""
 * 4 - نفصل بين المفاتيح بفاصلة
 * 5 - [] for arrays
 * 6 - {} for objects
 * 7 - Right Data is ===> String, Boolean, Number, Object, Array, Null
 *
 * Example :
 *
 * let json = {
 * "String" : "Mohamed Nour",
 * "Number" : 100,
 * "Object" : {
 * "Sy" : "Syria",
 * "Gr" : "Gordon",
 * },
 * "Array" : ["Ahmad", "Nour", "Ali"],
 * "Boolean" : true,
 * "Null" : null
 * };
 */
//                          APPLICATION PROGRAMING INTERFACE (API)
// هي الواجهة البرمجية
// وهي بيانات كل موقع حيث لكل موقع واجهة خاصة به
/**
 * For Example :
 * https://api.github.com/users/username
 * https://api.github.com/users/mohamadnourabdo/repos
 */
// JSON Methods :
// 1 - JSON.parse(jsonName);
// يحول ال جيسون من وضع السلسلة إلى وضعية الاوبجكت العادي
// 2 - JSON.stringify(jsonName);
// يحول الاوبجكت الى سلسلة من نوع جيسون
// Synchronous
// تنتظر العملية السابقة لها أن تنتهي لتبدأ بعملها
// Asynchronous
// لا تنتظر العملية التي قبلها لتنتهي بل يتم كل شيء في آنً واحد
//                          Call Stack
// Works By LIFO
setTimeout(() => {
  console.log("a");
}, 0);
function one() {
  console.log("One");
}
function two() {
  one();
  console.log("Two");
}
function three() {
  two();
  console.log("Three");
}
three();
// Output : One then Two then Three then a
// Synchronous
// Alwayes setTimeout - setInterval ==> last thing
// Example 1:
console.log("Own");
window.setTimeout(() => {
  console.log("Three");
}, 0);
console.log("Two");
// Output : One then Two then Three
// Example 2:
setTimeout(() => {
  console.log(myVariable);
}, 0);
let myVariable = 100;
// Don't have any error because setTimeout ==> last thing ==> from (API)
