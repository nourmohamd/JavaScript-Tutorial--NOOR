// Start Section 2

//                          Higher Order Functions

// هي الدوال التي تقبل دالة أخرى كبراميتر

// First (map):
// قبل أن أستخدم هذه الدالة يجب أن أفكر هل التعديل لازم على نفس المصفوفة أما أحتاج مصفوفة جديدة
// الماب تنشأ مصفوفة جديدة
// Syntax map(function (element, index, array) {},thisArrgments)
// Element: العنصر الحالي
// index: index Of This Element
// array: old array

// Example 1:
let myNum = [10, 20, 30, 40, 50];
// multi every number By 2

//Old way
let arr2 = [];
for (let i = 0; i < myNum.length; i++) {
  arr2[i] = myNum[i] * 2;
}
// New way
arr2 = myNum.map(function (element, index, array) {
  return element + element;
}, 10);
console.log(arr2);

// Example 2:
let myNum2 = "elZERo";

// Change every letter from upper to lower and reverse

// way 1
let arr3 = myNum2
  .split("")
  .map(function (element, index, array) {
    return element === element.toLowerCase()
      ? element.toUpperCase()
      : element.toLowerCase();
  }, 100)
  .join("");

console.log(arr3);

// way 2
arr3 = myNum2
  .split("")
  .map((el, ind, arr) => {
    return el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase();
  }, 100)
  .join("");

console.log(arr3);

// Example 3:
// نفي كل رقم من سالب لموجب ومن الموجب للسالب باستخدام الماب

let myNum3 = [1, -19, -2, 123, 3];

let arr4 = myNum3.map((el, ind, arr) => {
  return -el;
});

console.log(arr4);

// Example 4:

// Delete All Number From This String:

let myNum4 = "Elz1235126Ero";
let arr5 = myNum4
  .split("")
  .map((el, ind, arr) => {
    return Number.isInteger(+el) ? "" : el.toUpperCase();
  }, 100)
  .join("");

console.log(arr5);

// Second (Filter):

// Same The map but the defferent between them that map take element by condtion
// But the filter take element that right condtion without edit about it
// الفلتر ياخذ العنصر بدون التعديل عليه والذي يحقق الشرط
/**
 * if(condtion)
 * el
 * else
 * no return anything
 */

// Example 1:
// Filter this array from even number and delete otherwise number:

let myNum5 = [11, 20, 2, 5, 17, 10];
let arr6 = myNum5.filter(function (el, ind, arr) {
  return el % 2 === 0;
}, 100);

console.log(arr6);

// Concat between map and filter

let myNum6 = "1AB3S2ZX";

// Delete Every Letter then multi every number * 2

let arr7 = myNum6
  .split("")
  .filter(function (el, ind, arr) {
    return !Number.isNaN(parseInt(el));
  }, 100)
  .map(function (el, ind, arr) {
    return el * el;
  }, 100)
  .join("");

console.log(arr7);

// Third (Reduce):

// Same Map, Filter ,But Defferent about them
// it's return one value in the end

/**
 * Form :
 * reduce(function (Accumulator, Current Val, Current Index, Source Array) {
 *
 * }, Initial Value)
 *
 */
// Accumulator The First Value in Old Array (ناتج العملية)
// Current Val The Second Value in old Array
// Current Index (index the second value)
// Source Array The old Array
// Initial Value The Value of Start
// After added initial value the Accumulator equal initial value and Current value take first value from array
// and Accumulator in this moment Not Take index
// Accumulator in every moment not take any index
// and index of current value equal 0 in start

// Fourth (Foreach):
// It is a function that performs a specific function on each element of the array

/**
 * Form:
 * foreach(function(element, index, array) {
 *  Statements For Every Element in Array
 * }, thisArgements);
 *
 * element it's this element
 * index it's this index for this element
 * array it's a old array
 */

// important Note: the difference between map and foreach
// The map function Builds new array
// while The Foreach function Edits on same array
// لا تنشأ مصفوفة جديدة

// Example 1:

let v1 = document.querySelectorAll("ul li");
v1.forEach(function (el, ind, arr) {
  el.onclick = function () {
    v1.forEach(function (el) {
      el.classList.remove("active");
    });
    this.classList.add("active");

    // this means this element clicked
  };
}, 100);

//                          Object:
// عبارة عن مفتاح وقيمته
// form: let nameIt = {key1: value1, key2: value2, .... keyn: valuen};
// The object takes any value
// Example 1:

let user = {
  userName: "Mohamed Nour",
  userAge: 23,
  functionHello: function () {
    console.log("Hello");
  },
};
// :اذا كان الاسم بين "" نستدعيه عبر الطريقة التالية
// nameObject["nameKey"]
// طبعاً الطريقة السابقة بتصير حتى لو كان المفتاح دون "" مافي اي مشكلة

// اذا كان عندك متغير قيمته تساوي احدى قيم المفاتيح فيمكنك استدعاء المفتاح الذي بساوي قيمة المتغير عبر التعليمة التالية

// nameObject[nameVariable]
console.log(user);
console.log(user.userName);
console.log(user["userName"]);

//                          Object Nested: Object Inside Object

user = {
  userName: "Mohamed Nour",
  userAge: 23,
  skills: ["HTML", "CSS", "JavaScript"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    syria: {
      one: "Aleppo",
      two: "Damascus",
    },
  },
};
console.log(user);
// The first method:
console.log(user.userName);
console.log(user.userAge);
console.log(user.skills.join(" | "));
console.log(user.addresses.ksa);
console.log(user.addresses.syria);
console.log(user.addresses.syria.one);
console.log(user.addresses.syria.two);
// The second method:
console.log(user["userName"]);
console.log(user["userAge"]);
console.log(user["addresses"]["ksa"]);
console.log(user["addresses"]["syria"]["one"]);
let variable1 = "one";
console.log(user["addresses"]["syria"][variable1]);

// Added new key, value automaticly:

// The first method:
user.date = "2023-12-25";
// The second method:
user["date"] = "2023-12-25";
// add function to the object:
user.functionSayWelcome = function () {
  return "Welcome";
};
console.log(user["functionSayWelcome"]);

// I can build object with use new Object()

let user1 = new Object({
  name: "Salim",
  Func: function () {
    return this.name;
  },
});
console.log(user1.Func());

//                          This Property
// تشير إلى الشي يلي انا بداخله يعني اذا كنت خارج كل شيء
// فإنها تشير في هذه الحالة إلى الويندو
// وإذا كنت بداخل إحدى الدوال فإنها تشير إلى أيضا الى الويندو
// واذا كنت داخل احد الاوبجكتات فإنها تشير إلى ذلك الاوبجكت
// وهكذا...

// Examples :

let variable2 = function () {
  return this;
};
console.log(variable2()); // print window
if (variable2() === window) {
  console.log("True"); // print True
}

/**
 * Example High Level :
 * HTML
 * <button id="btn" type="button">Click me</button>
 * JS
 * document.querySelector("#btn").onclick = function () {
 *  console.log(this); // print Element that  we clicked on it
 * };
 */

// Like this:
document.querySelector("#btn").onclick = function () {
  console.log(this);
};

let user2 = {
  userName: "Mohamed",
  userAge: 23,
  funcAgeByDays: function () {
    // return user2.userAge * 365; Wrong
    return this.userAge * 365; // right
  },
};

console.log(user2.userAge);
console.log(user2.funcAgeByDays()); // 8395

//                          New Method to Build Object (Object.create(object for copy it || {key:value,...} || null))

// Example 1:

let user3 = Object.create(user2);
user3.userAge = 30;
console.log(user3.funcAgeByDays()); // 8395 // After edited ==> 10950
// because you write in user2 ==> funcAgeByDays return user2.userAge // Wrong
// The right writting is return this.userAge

//                          New Method for build Object By Object.assign(object1,object2,...,objectn);

// يقوم بنسخ المعلومات الموجودة في الاوبجكتات كلها إلى الأول وفي حال كان هناك مفاتيح مشتركة بالأسم في الاوبجكتات يأخذ أول قيمة
// يواجهها ثم يعطيها للاوبجكت الاول حيث انه يأخذ اوبجكتات من أي شكل تريده
// {}, Object.create(), new Object()
// At the end the object become a object1

// Example 1:

let obj1 = {
  prop1: 1,
  method1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop1: 2,
  method2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 3,
  prop3: 5,
};

let finaly = Object.assign(targetObject, obj1);

console.log(finaly);
// finaly ==> prop1 = 1, prop3 = 5, method1

finaly = Object.assign(targetObject, obj2, obj1);

console.log(targetObject);
// finaly ==> prop1 = 1, prop3 = 5, method1, method2

finaly = Object.assign({}, obj1, { prop1: 10 });

console.log(finaly);

// How Can I GEt Length Of Object
// I can by : Object.keys(nameObject).length ===> Because The keys prototype Object To array

// finaly ==> prop1 = 10, method1 = f

//                          Document Object Modeal

//                          DOM && Select

//                          Select

// 1 Select Element By Id
//  document.getElementById("nameId") ==> Return one element
let id1 = document.getElementById("idOfElement");

// 2 Select Element By Class
// document.getElementsByClassName("classOfElement") ==> Return array
// need foreach
let class1 = document.getElementsByClassName("classOfElement");

// 3 Select Element By Selector
// document.querySelector("Selector") ==> return one Element
let selector = document.querySelector(".selectorByCLass");

// 4 Select Array of ELements By Selectors
// document.querySelectorAll("selector"); ===> return array of elements
// need foreach
let selectorAll = document.querySelectorAll(".selectorOfClass");

// 5 Select Element By Tag Name
// document.getElementsByTagName("nameOfElement"); ==> return array of elements
// need foreach
let element = document.getElementsByTagName("p");

// 6 Select title of page
// document.title ==> set, get
console.log(document.title); // Template
document.title = "New Title";
console.log(document.title); // New Title

// 7 Select Body Of Page
// document.body ==> return body
console.log(document.body);

// 8 Select Forms in page
//document.forms ==> return array of form
// need foreach
// document.forms[0] ===> first form in the page
console.log(document.forms);

// 9 Select Links
// document.links ===> return array of elemnts
// need foreach
console.log(document.links);

// 10 Select Images
// document.images ===> return array of Images
// need foreach
console.log(document.images);

//                          Preoperties For Edit on Elements:

// 1
// to access to content Element (HTMl)
// elementSelect.innerHTML ==> set, get

// 2
// to access to content Element (Not HTMl)
// elementSelect.textcontent ==> set, get

// 3
// للوصول الى ميزات اي عنصر هناك طريقتين

// 1 Directly:
document.querySelector("a").href = "https://youtube.com";
console.log(document.querySelector("a"));
// <a href="https://youtube.com"></a>
// نحدد العنصر بأي طريقة كانت ثم نستطيع الوصول لاي ميزة لها عبر الدوت
// اذا كانت موجودة نعدل عليها واذا غير موجودة يقوم باضافتها
// Set, Get

// Example 1:(Directly)
/**
 * HTML
 * <img src=""/>
 * JavaScript
 * let v1 = document.images[0];
 * v1.src = "image/img1.png";
 * v1.alt = "error";
 * v1.className = "img";
 */

// 2 By Methods:

// a - getAttribute("nameOfAttribute"); ==> return value of property

// b - setAttribute("property", "value"); ==> edits value to property
// Like (document.querySelector("a").setAttribute("href", "https://youtube.com"))

// Note: innerText Contols in inside Text

//                          Check Attributes

// 1
// element.attributes - يجيب كل الميزات
// element.attributes[0] - الميزة الاولى

// 2
// element.hasAttribute("property") ==> boolean (true, false)

// 3
// element.removeAttribute("property") ==> Delete if found it

// 4
// element.hasAttributes(Not Anything); ==> true, false

//                          Create Elements

// 1
// document.createElemnet("typeElement") ==> create Element
let pargraph = document.createElement("p");
// 2
// document.createComment("commentText")
let comment = document.createComment("This is a comment");
// 3
// document.createTextNode("add text for any element after build it")
let textNode = document.createTextNode("submit");
// 4
// document.createAttribute("name of property");
let attr = document.createAttribute("type");
attr.value = "button";
// نضيف الميزة للعنصر عبر اح الطريقتين
// a - element.setAttributeNode(attr);
// b - element.setAttribute("type", "value");
// 5
// العنصرر المقصود.appendChild(variable contents element);

// Full Example:
let myElement = document.createElement("div");
let myAtt = document.createAttribute("data-color");
let myText = document.createTextNode("I'm a div");
let myComment = document.createComment("Start Build Element");
myAtt.value = "red";
myElement.appendChild(myText);
myElement.setAttributeNode(myAtt);
document.body.appendChild(myElement);

//                          children

// 1 element.children ==> (property) just children
// return children only
// element.children[0] ==> first Child

// 2 element.childNodes ==> all Children
// return number them and return all children (space, element, comment, ....)
// element.childNodes[0] ==> first childNode

// 3 firstChild ==> first childNode
// element.firstChild

// 4 lastChild ==> last childNode
// element.lastChild

// 5 firstElementChild
// element.firstElementChild ==> first element

// 6 lastElementChild
// element.lastElementChild ==> last element

//                          Events

// First Method :
/**
 * HTML
 * <button type="button" onclick="console.log('button1');">Click</button>
 */
// Second Method :
/**
 * HTML
 * <button type="button" id="btn" >Click</button>
 * JavaScript
 * let btn = document.getElemenetById("btn");
 * btn.onclick = ()=>{
 * console.log("button1");
 * };
 */

//                          All Events we can found it in this url :
// https://www.tutorialspoint.com/javascript/javascript_events.htm
// 1 onclick ==> for click on any element
// 2 oncontextmenu ==> on click on right button(mouse)
// 3 onmouseenter ==> عند المرور فوق العنصر فقط
// 4 onload ==> on load page
// 5 onmouseleave ==> عندما يغادر المؤشر العنصر
// 6 onscroll ==> on scroll ,scrollX, scrollY
// 7 onresize ==> عند تغيير حجم النافذة
// 8 onfocus ==> on focus on input valid
// 9 onblur ==>عند إلغاء التركيز على حقل دخل
// 10 onsubmit ==> عند النقر على زر خاص بفورم معين

//                          Vaildate
// We use this idea (عند النقر على السوبمت)

/**
 * Full Example :
 * HTML
 *
 * <form>
 * <input type="text" name="username" />
 * <input type="password" name="password" />
 * <button type="submit" >Submit</button>
 * </form>
 * JavaScript
 *
 * let username = document.querySelector("[type='text']");
 * let password = document.querySelector("[type='password']");
 * document.forms[0].onsubmit = function (e) {
 * let userValid = false;
 * let passwordValid = false;
 * if(username.value!="" && username.value.length <=10 ) {
 * userValid = true;
 * }
 * if(password.value!="" && password.value.length <=15 ) {
 * passwordValid = true;
 * }
 * if(userValid === false || passwordValid === false) {
 *  e.preventDefault();
 * }
 * };
 *
 */

//                          Events Simulation
// هي دوال تفرض على العنصر حدث معين
// click(); - focus(); - blur();

//                          ClassList
// Add - Delete - Edit (Classes)

// 1 - element.classList ==> return array of classes
// 2 - element.classList.length ==> return length of array of classes
// 3 - element.classList.contains("nameClass") ==> true, false
// 4 - element.classList.item("index") ==> return classList[index]
// 5 - element.classList.add("c1"); ==> add new class to the element
// 6 - element.classList.remove("c1"); ==> remove class(c1) from element
// 7 - element.classList.toggle("c1");==> add if (not found), remove if (found)

// Use Css Language in javaScript

// The first method :
document.querySelector("button").style.color = "white";
document.querySelector("button").style.backgroundColor = "blue";
document.querySelector("button").style.border = "3px solid green";
// The second method :
document.querySelector("button").style.cssText = `
border-radius: 10px;
color: red;
border: 1px solid red;
backgtound-color: white;
padding: 10px 15px;
`;
// The third method :
document.querySelector("button").style.removeProperty("padding");
document
  .querySelector("button")
  .style.setProperty("padding", "10px 15px", "important");

// stylesheets
console.log(document.styleSheets); // print all files of css connected with html file
console.log(document.styleSheets[0]);
console.log(document.styleSheets[0].rules);
console.log(document.styleSheets[0].rules[0]);
document.styleSheets[0].rules[0].style.setProperty("margin", "10px");

// لإضافة ميزات لغة سي اس اس لدينا طريقتين
// First method : inline
// document.querySelector("button").style.removeProperty("padding");
/**
 * document
  .querySelector("button")
  .style.setProperty("padding", "10px 15px", "important");
 */
// second method : stylesheet
/**
 * console.log(document.styleSheets); // print all files of css connected with html file
console.log(document.styleSheets[0]);
console.log(document.styleSheets[0].rules);
console.log(document.styleSheets[0].rules[0]);
document.styleSheets[0].rules[0].style.setProperty("margin", "10px");
 */

//                          Controls In Elements

// 1 - before(); ==> اضافة نص او عنصر قبل عنصر ما
// 2 - after(); ==> اضافة نص او عنصر بعد عنصر ما
// 3 - prepend(); ==> اضافة نص او عنصر داخل عنصر ما وفي البداية
// 4 - append(); ==> اضافة نص او عنصر داخل عنصر ما وفي النهاية
// 5 - remove(); ==> حذف العنصر نهائياً ولايظر حتى في الكونسول

//                          الأنتقال بين العناصر

// 1 - nextSibling (property) ==> العنصر التالي بغض النظر عن نوعه
console.log(document.querySelector("button").nextSibling);
// 2 - nextElementSibling (property) ==> العنصر التالي عنصر فقط
console.log(document.querySelector("button").nextElementSibling);
// 3 - previousSibling (property) ==> العنصر السابق بغض النظر عن نوع العنصر
console.log(document.querySelector("a").previousSibling);
// 4 - previousElementSibling (property) ==> العنصر السابق عنصر فقط
console.log(document.querySelector("a").previousElementSibling);
// 5 - parentElement
console.log(document.querySelector("a").parentElement);

//                          cloning
// element.cloneNode(boolean(false==>default))
// false ==> clone element without content
// true ==> clone element with content
let a2 = document.querySelector("a").cloneNode(true);
a2.className = `${document.querySelector("a").classList.item("0")}-clone`;
console.log(a2);
document.querySelector("a").after(a2);

//                          AddEventListener
// add event to your element
// ميزة هذه الدالة هي انها تسمح لك بوضع عدة احداث لنفس العنصر ويمكنك
// ايضا اضافة حدث لعنصر غير موجود في الصفحة حتى

let m = document.querySelector("a");
m.addEventListener("click", function () {
  console.log("Yes1");
});
m.addEventListener("click", function () {
  console.log("Yes2");
});
m.addEventListener("click", function () {
  console.log("Yes3");
});
// We write event without (on) word
// let k3 = document.querySelector(".p");
// k3.addEventListener("click", function () {
//   let newE = k3.cloneNode(true);
//   k3.parentElement.appendChild(newE);
// });

document.addEventListener("click", function (e) {
  let a = e.target.cloneNode(true);
  // target ==> Select element that clicked on it (just with events)
  a.classList.add("clone");
  e.target.parentElement.appendChild(a);
});
//                          Browser Object Modeal
//                          BOM
// 1 - alert("Message");
// window.alert("Message"); || this.alert("Message"); || alert("Message");
// مشكلتها أنها توقف المحتوى كله حتى تضغط على موافق
// You can make box for show message By HTML CSS JS ===> That Better from alert() method
// 2 - window.config("Message");
// تعرض رسالة ولكن اما تضغط على موافق أو على لا
// return true if (clicked on Ok) , false if(clicked on NO)
// let newVar = window.config("Are you sure ?") ==> true, false
// 3 - window.prompt("Message", "Default Value ==> like placeholder")
/**
 * Example:
 * let v1 = window.prompt("Please Enter Your Password ?", "***");
 *
 * if(v1 === "Mohamed") {
 * alert("true");
 * } else {
 * alert("false");
 * }
 */

// We can make Box like work of (alert, confirm, prompt) By HTML, CSS, JAVASCRIPT
//                          Rules Of Time
// 1 - setTimeout
/**
 * let handle =  window.setTimeout(function () {
 * Statements
 * }, time, parmetrs for function);
 * time by milliSecond
 *
 * function f1 (name) {
 * console.log(`Hello ${name}`);
 * }
 * let handle window.setTimeout(f1, 1000, "Mohamed Nour");
 */
// 2 - window.clearTimeout(handle); ===> stop setTimeout() Method
// clearTimeout(handle);

// 3 - let a = window.setInterval(function, timer, parametrs) ==> Performs every timer
// 4 - window.clearInterval(a);

//                          Location
// 1 - window.location ===> return all information for location
// 2 - window.location.href ===> return url for this page, (set,get)
// لا يحذف الصفحة التي كنت موجود فيها وتبقى بال هستوري السهم يلي موجود فوق عاليمين
// window.location.href = "#elementInSamePage" ==> Right
// 3 - window.location.hostname (set, get) - تسمح لك بالتعديل أو استدعاء اسم الموقع في الرابط فقط
// Example : window.location.hostname = "google.com";
// 4 - window.location.host (Same hostname)
// The defference is hostname Don't return number of server (الذي نعمل عليه)
// But host return number of server (الذي نعمل عليه)
// 5 - window.location.protocol ===> (set, get)
// https: HyperText Transfer Protocol Secure Layer
// http : HyperText Transfer Protocol
// window.location.protocol = "https";
// 6 - window.location.hash ===> return (يرجه الهاش مع أسم القسم يلي أنت فاتحه مع الأي دي)
// console.log(window.location.hash);
// 7 - window.location.reload ===> reload for this page
// 8 - window.location.replace("New Url");
// يقوم بإستبدال الرابط الحالي بالرابط الجديد
// 9 - window.location.assign("New Url")
// لا يحذف الرابط الذي انت كنت موجود فيه من ال هستوري

//                          open && close
// 1 - window.close(); ==> تغلق النافذة التي فتحت عبر الجافا سكربت
// 2 - window.open(تقبل 4 بارمترات وكلهم اختياريات)
// First - Url(default ===> empty ===> empty page)
// Second - target && title of new page (title || _self, _blank(default))
// Third - like (width, height, top, left) ===> number only
// Fourth - replace (Url replace) ===> Boolean (true, false)
//  يعني ذلك اذا وضعت ترو فأن الصفحة التي كنت فيها سيتم استبدالها بالجديدة واذا فالس لن يتم استبدالها

function openPage() {
  let a = window.open("https://google.com", "_blank", "width=200,height=200");
}
document.querySelector("button").addEventListener("click", openPage);

//                          History
// 1 - window.history ==> return all method in history
// 2 - window.history.lenth ==> return number of websites (المواقع يلي دخلنا عليهن)
// 3 - window.history.go(عدد يمثل الانتقال اذا سالب لورا واذا موجب لقدام)
// 4 - window.history.forward(); ==> يوديك لصفحة لقدام
// 5 - window.hostory.back(); ==> صفحة لورا

//                          Scroll && Focus
// 1 - window.stop();
// اذا عملت كبسة وربطتها مع دالة وداخل الدالة استدعيت الستوب
// فانك عندما تنقر على ذلك الزر فانك اوقفت التحميل
// 2 - window.print();
// طباعة الموقع
// 3 - window.focus()
// تقوم بالتركيز على البحث في الموقع الذي تستخدمه او يلي بدك تروح عليه
// 4 - window.scrollTo(x,y) ===> تذهب بك لمكان محدد بالصفحة فقط
// ط1- window.scrollTo(200, 400)
// ط2- window.scrollTo({left:200,top:400,behavior:smooth})
// 5 - window.scrollBy(x, y) ==> يتحرك بك بمقدار معين
// ط1- window.scrollBy(200, 400)
// ط2- window.scrollBy({left:200,top:400,behavior:smooth})
// 6 - window.scroll(x,y Or {left,...}) ===> Basic Scroll
// 7 - window.scrollX ==> reads X scroll value like window.pageXOffset
// 8 - window.scrollY ==> reads Y scroll value like window.pageYOffset
// Example :
document.body.onscroll = function () {
  // Show Element
  if (window.scrollY >= 300) {
  } else {
    // Hidden Element
  }
};
//                          LocalStorage
// The localStorage Object which stores data with no expiration date.
// (The data is not deleted when the browser is closed, and are available in future sessions).

// 1 - window.localStorage ===> Object contents all user data
// 2 - window.localStorage.setItem("Key", "Value"); ==> Add Data
// window.localStorage.newKey = "Value";
// window.localStorage["Key"] = "Value";
// 3 - window.localStorage.getItem("nameKey"); ==> return data in nameKey in localStorage
// window.localStorage.nameKey;
// window.localStorage["nameKey"];
// 4 - window.localStorage.removeItem("namekey"); ==> delete key
// 5 - window.localStorage.clear(); ==> clear all keys in
// 6 - window.localStorage.key(index) ===> return key by index

// dataset ===> Select all attributes (events only)
// event.currentTarget.dataset.color = "red";
// We can use dataset required in events

//                          SessionStorage
// The sessionStorage object stores data for only one session.
// (The data is deleted when the browser is closed).
// 1 - window.sessionStorage.setItem()
// 2 - window.sessionStorage.getItem()
// 3 - window.sessionStorage.clear()
// 4 - window.sessionStorage.removeItem()
// 5 - window.sessionStorage.clear()
// 5 - window.sessionStorage ===> return all data in sessionStorage
//                          Destructring
// تقوم باخذ القيم من المصفوفة ومن الماب ومن الاوبجكت

//  Array
//  Example 1:
let arr8 = ["A", "B", "C", "D"];
let [a1, b1, c1, d1] = arr8;
console.log(a1); // A
console.log(b1); // B
console.log(c1); // C
console.log(d1); // D
console.log("$$$$$$$$$$$$$$$$$$");
let [num1, num2, num3] = arr8;
console.log(num1); // A
console.log(num2); // B
console.log(num3); // C
console.log("$$$$$$$$$$$$$$$$$$");
// عملية الدستركترينغ ملا علاقة انو عدد المتغيرات يساوي حجم المصفوفة
let [num4, , num5] = arr8; // Take First and Third
console.log(num4); // A
console.log(num5); // C
console.log("$$$$$$$$$$$$$$$$$$");
// لو كان عندك عدد المتغيرات أكبر من حجم المصفوفة فإن المتغيرات الزائدة تكون قيمتها غير معروفة
let [num6 = 6, num7, num8, num9, num10 = "E"] = arr8;
// Here i set a default value to the variable (num10)
console.log(num6); // A
console.log(num7); // B
console.log(num8); // C
console.log(num9); // D
console.log(num10); // E
console.log("$$$$$$$$$$$$$$$$$$");
// في حالة وضعت قيمة أفتراضية فانه يبحث في القيمة المقابلة له اذا وجد شي يأخذها غير هيك ياخذ الافتراضي
// Ignore Some elements
let [num11, , , num12] = arr8;
console.log(num11); // A
console.log(num12); // D
console.log("$$$$$$$$$$$$$$$$$$");
// Full Example :
let arr9 = ["Ahmad", "Sayed", "Ali", ["Shady", "Omar", ["Mohamed", "Gamal"]]];
// Print Shady and Gamal By Destructring Array
let [, , , [num13, , [, num14]]] = arr9;
console.log(num13); // Shady
console.log(num14); // Gamal
console.log("$$$$$$$$$$$$$$$$$$");
//                          Swapping Variables
// The first method (Without Destructring):
let swap1 = 10;
let swap2 = 20;
let emptyGlass; // Glass For Content any Swap Variable
emptyGlass = swap1;
swap1 = swap2;
swap2 = emptyGlass;
console.log(swap1); // 20
console.log(swap2); // 10
// The second method (With Destructring):
swap1 = 10; // Default
swap2 = 20; // Default
[swap1, swap2] = [swap2, swap1];
console.log(swap1); // 20
console.log(swap2); // 10
console.log("$$$$$$$$$$$$$$$$$$");
//                          Object and Destructring
// في الاوبجكت يمكنك استدعاء المتغيرات وذلك باستخدام اسم المفتاح حصراًُ
const userData = {
  userName: "Adnan",
  userAge: 14,
  skills: {
    one: "Swimming",
    two: "Soccer Play",
    three: "Skiing",
  },
};
// The first method :
let userDataName = userData.userName;
console.log(userDataName);
// The second method :
let { userName, userAge, skills } = userData;
console.log(userName);
console.log(userAge);
console.log(skills);
// في الاوبجكت ما فيك تتخطى اي مفتاح لانك تنادي كل واحد باسمه
//يعني اذا بدك تتخطى مفتاح معين فقط لا تكتب اسمه
// We use {} Not [] with object because it's not array
({ skills } = userData); // عندما يكون المتغير مولد سابقاً ونريد اعادة ضبط قيمته
// How to change name of key when called them
let { userName: un, userAge: ua, skills: us } = userData;
console.log(un);
console.log(ua);
console.log(us);
// اضافة ميزة جديدة في حال كانت موجودة ياخذ قيمتها من الاوبجكت غير هيك ياخذها من الافتراضي الخاص بها
({
  userName: un,
  userAge: ua = 20,
  skills: us,
  userColor: uc = "red",
} = userData);
console.log(un);
console.log(ua);
console.log(us);
console.log(uc); // red because it's doesn't found in object
// Full Example :
let objectDes1 = {
  name: "Nour",
  age: 23,
  skills: {
    html: 100,
    css: 100,
  },
};
let { name: on, age: oa, skills: os } = objectDes1;
console.log(on);
console.log(oa);
console.log(os);
let { html, css } = objectDes1.skills;
console.log(html); // 100
console.log(css); // 100
//                          Function Destructring
let objectDes2 = {
  name: "Nour",
  age: 23,
  skills: {
    html: 100,
    css: 200,
    js: 300,
  },
};
function D(objectDes2) {
  console.log(objectDes2.name);
  console.log(objectDes2.age);
  console.log(objectDes2.skills);
}
D(objectDes2);
function S({ name: n, age: a, skills: { html, css, js } } = objectDes2) {
  console.log("%%%%%%%%%%%%%");
  console.log(n);
  console.log(a);
  console.log(html);
  console.log(css);
  console.log(js);
  console.log("%%%%%%%%%%%%%");
}
S(objectDes2);
// All Previous Uses Right in Parameter for Any Function
//                          Set
// هو أوبجكت يقوم بإستقبال مصفوفة أو عناصر مصفوفة ويقوم بحذف العاصر المتكررة
// Form : let mySet = new Set(Array || [n1, n2, ...]);
// Methods Set :
// 1 - object.add(value);
// 2 - object.delete(value);
// 3 - object.clear();
// 4 - object.has(value); ==> boolean(true, false)
// 5 - object.size; // This is a Property Not method
// Example 1:
let mySet = new Set([1, 2, 3, 1, 4, 5, 3]);
mySet.add(15).add(80).add(166);
console.log(mySet);
// Use keys(), values() ===> with next() method (required in variable)
// return true if you access to the end!!!!
let iterator = mySet.keys();
console.log(iterator);
console.log(iterator.next()); // 1, false
console.log(iterator.next()); // 2, false
console.log(iterator.next()); // 3, false
console.log(iterator.next()); // 4, false
console.log(iterator.next()); // 5, false
console.log(iterator.next()); // 15, false
console.log(iterator.next()); // 80, false
console.log(iterator.next()); // 166, false
console.log(iterator.next()); // undefined, true
// Like values
// Print Values By Foreach
mySet.forEach(function (element) {
  console.log(element);
});
//                          WeakSet
// 1 - يقبل بيانات من نوع أوبجكت فقط ====> [Here Put Objects : ob1, ob2, ....]
// 2 - لا يملك خاصية للحجم
// 3 - Can't Use Keys(), Values()
// 4 - Can't Use Foreach
const obj = new WeakSet([]);
const gfg = {};
const geeks = {};

// gfg object added
obj.add(gfg);
console.log(obj.has(gfg)); // true
console.log(obj.has(geeks)); // false

// gfg object removed
obj.delete(gfg);
console.log(obj.has(gfg)); // false
//                          Map
// Form: let myMap = new Map();
let myMap = new Map();
let myObject = {};
// Map ==> Doesn't Contain Key By Default
// Object ==> Content key By Default
console.log(myMap);
console.log(myObject);
// اذا بدك تنشأ أوبجكت فارغ
let newObject = Object.create(null);
console.log("&&&&&&&&&&&&&&");
console.log(myMap); // No properties
console.log(myObject); // properties
console.log(newObject); // No properties
console.log("&&&&&&&&&&&&&&");

// The Defference Between Object and Map
// 1 -
// Object ==> Accept Key By String or Symbol Only
// Map ==> Accept the key in any way
// In the object ===> يعامل المفتاح سواء كان رقم أو "رقم" نفس الشي
//  أما في الماب يختلف الرقم عن "الرقم" اختلاف كبير
/**
 * Full Example : Object
 * let m = {
 * 10 : "Nour",
 * "10" : "Omar",
 * };
 * console.log(m."10"); ===> Omar
 * console.log(m[10]); ===> Omar
 */
/**
 * Full Example : Map
 * let map = new Map();
 * map.set(10, "Number");
 * map.set("10", "String");
 * console.log(map.get(10)); // Number
 * console.log(map.get("10")); // String
 */
// ذلك كان الفرق الجوهري بين الاثنين
// 2 -
// Map ===> تقوم بترتيب الإدخال بحسب الترتيب الذي قمت بإدخال البيانات به
// Object ===> يمكن أن تقوم بترتيب أو يصبح هناك خلل بالبيانات من ناحية الترتيب
// Not Ordered 100%
// 3 -
// Map ===> Content size property for return number of keyes
// Object ===> Don't Content size property
// 4 -
// Map ===> Supports Foreach
// Object ===> Doesn't Support Foreach , needs to keys() or values() for access to Select element
// 5 -
// Map ===> Better in the speed (سريع بالإضافة والحذف)
// Object ===> Badly in the speed (بطيء في الإضافة والحذف)

// Methods Of Map :
// 1 - map.set(key(any value), value);
// 2 - map.get(key(any value));
// 3 - map.delete(key(any value));
// 4 - map.clear();
// 5 - map.size; ===> property
// 6 - map.has(key(any value));

// Full Example On Map :
let myMap2 = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
]);
console.log(myMap2.has("one")); // true
// Map Supported keys(), values() , with next()
//                         WeakMap
// The key in WeakMap ===> Only Object
// The WeakMap Don't Suppoted size, keys, values, foreach
//                         Array.from
// Return array from string but splice it siparetor siparetor
// The Form : Array.from(String, mapFunction, This);
/**
 * Example 1:
 * let arr = Array.from("Mohamed");
 * console.log(arr) // ["M", "o", "h", "a", "m", "e", "d"];
 * Example 2:
 * let arr = Array.from("12345", function(el, in, arr) {
 * return +n + +n;
 * }, 100);
 */

// Delete The Duplicate Values :
// First method :
/**
 * let a = [1, 1, 2, 2, 3];
 * let mySet = new Set(a);
 * console.log(mySet);
 */
// Second method :
/**
 * let a = [1, 1, 2, 2, 3];
 * console.log([...new Set(a)]);
 */
//                         Arguments ===> In Function
function F() {
  return arguments; // return array from values
}
console.log(F("Mohamed ", "Nour ", "Abdo")[2]); // Abdo
function F2() {
  return Array.from(arguments); // return array
}
console.log(F2("Mohamed", "Ahmad"));

//                         Array.copyWithin
// تنسخ جزء من المصفوفة من مكان معين إلى مكان أخر بنفس المصفوفة ضمن شروط محددة
// Form : Array.copyWithin(target(مكان لصق المصفوفة), Start(Default(0)), End(Not Including End)===>(Default(End)));
// القيمة السالبة تساوي العد من الآخر للأول
// That's means -1 = Last Element
let q = [10, 20, 30, 40, 50, 60];
q.copyWithin(0, 3, 6);
console.log(q); // [40, 50, 60, 40, 50, 60]
q.copyWithin(0, -2, -1);
console.log(q); // [50, 50, 60, 40, 50, 60]
//                         Some Method
// دالة تقوم بعملية فحص وترجع صح إذا حققت وغلط إذا لم تحقق
let opq = [1, 2, 3, 4, 5];
let check = opq.some(function (el, ind, arr) {
  return el > 4;
}, 100);
console.log(check); // false
// Form : Array.some(callBackFunction(), ThisArguments);
let varMenue = 30;
check = opq.some(function (el, ind, arr) {
  return el > this;
}, varMenue);
console.log(check); // false
// With Arrow Function
check = opq.some((el, ind, arr) => {
  el > this;
}, varMenue);
console.log(check); // false
check = opq.some(function (el, ind, arr) {
  console.log(this); // Print Window In this status
  return 5 > el;
});
console.log(check); // true
check = opq.some(function (el, ind, arr) {
  console.log(this); // Print 30 In this status
  return 5 > el;
}, varMenue);
console.log(check); // true
function checkNumber(opq, varMenue) {
  return opq.some(function (el, ind, arr) {
    return el < this;
  }, varMenue);
}
console.log(checkNumber(opq, varMenue)); // true
let range = {
  min: 1,
  max: 10,
};
let checkNumberInRange = opq.some(function (el, ind, arr) {
  return el >= range.min && el <= range.max;
}, range);
console.log(checkNumberInRange); // true

//                         Array.every
// نفس مبدأ عمل السم ولكن هنا يعطي صح إذا كل العناصر حققت الشرط وإلا يعطي خطأ
// Form : Array.every(function (el, ind, arr) {}, thisArguments); ===> Like Some's Form

// لتحويل الأوبجكت كامل مع مفاتيحه إلى مصفوفة الحل هو
let objectM = {
  one: 1,
  two: 2,
  three: 3,
};
let qwe = Object.keys(objectM);
console.log(qwe); // ['one', 'two', 'three']

// Full Example For All Indeas :
const locations = {
  10: "Place 1",
  20: "Place 2",
  30: "Place 3",
  40: "Place 4",
};
let mainLocation = 15;
let locationsArray = Object.keys(location);
let castingFromStringToNumber = locationsArray.map(function (el, ind, arr) {
  return +el;
});
check = locationsArray.every(function (el, ind, arr) {
  return el >= mainLocation;
}, mainLocation);
console.log(check); // false
//                         Spread Operator
// 1 - تقوم بإستخراج الحروف حرف حرف من السلسلة
// 2 - تقوم بدمج المصفوفات
// 3 - تنسخ المصفوفة
// 4 - تقوم بعمل إضافة للمصفوفة وتستخرجها
// 5 - يستخدم مع مكتبة الماث
// 6 - يقوم بعمل سبريد للأوبجكت
// Examples :
// 1 -
console.log("Mohamed"); // Mohamed
console.log(..."Mohamed"); // M o h a m e d
console.log([..."Mohamed"]); // ['M', 'o', 'h', 'a', 'm', 'e', 'd']
// 2 -
let au1 = [1, 2, 3];
let au2 = [4, 5, 6];
let au3 = [...au1, ...au2];
console.log(au3); // [1, 2, 3, 4, 5, 6]
// 3 -
let au4 = [...au1];
console.log(au4); // [1, 2, 3]
// 4 -
au4.push(au2);
console.log(au4); // [1, 2, 3, Array(3)]
// 5 -
console.log(Math.max(...au2)); // 6
// 6 -
let au5 = {
  a: 1,
  b: 2,
};
let au6 = {
  c: 3,
  d: 4,
};
let au7 = {
  ...au5,
  ...au6,
};
console.log(au7); // {a: 1, b: 2, c: 3, d: 4}

//                         Reqular Expression
// We use Reqular Expression when we need test Email, Id, Url, Phone
// Invalid or Valid

// {match} ==> نستخدمها للبحث عن مواصفات محددة في سلسلة معينة اذا موجود برجعلك ياه مع اندكسو
// Rules :
//          A
// 1 - Syntax
// a - /Pattern/modifiers(s);
// b - new RegExp("pattern", "modifiers(s)");
/**
 * Modifiers Like : i ===> غض النظر عن الحروف , g ===> global ابحث في كل مكان , m ===> multilines عدة أسطر
 */
// Syntax match ====> match(pattern)
// 1 - تستقبل سلسلة معينة من أجل فحصا وتعيد مصفوفة مع الماتشيس
// 2 - ترجع نل في حال ما حققت شي
// 3 - يمكن أن تستقبل متغير يحوي البترن أو تستقبل البترن مباشرةً
let words = "Hello Mohamed Nour Abdo";
let regExp = /Nour/gim;
console.log(words.match(regExp)); // ['Nour']
console.log(words.match(/NoUR/gim)); // ['Nour']
//          B
// (X|Y) ===> X or Y
// [0-9] ==> From 0 to 9
// [^0-9] ==> Not equal from 0 to 9
// Example 1:
let tld = "Com Net Org Info Code Io";
let regExp2 = /(com|net|io)/gim;
console.log(tld.match(regExp2)); // ['Com', 'Net', 'Io']
// Example 2:
let tld2 = "1234567890";
let regExp3 = /[0-2]/gim;
console.log(tld2.match(regExp3)); // ['1', '2', '0']
// Example 3:
let tld3 = "1234567890";
let regExp4 = /[^0-2]/gim;
console.log(tld3.match(regExp4)); // ['3', '4', '5', '6', '7', '8', '9']
// Example 4:
let tld4 = "123@#4$56$%.78^90";
let regExp5 = /[^0-9]/gim;
console.log(tld4.match(regExp5)); // ['@', '#', '$', '$', '%', '.', '^']
let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let regExp6 = /Os[5-9]Os/gim;
console.log(practice.match(regExp6)); // ['Os8Os']
//          C
// [a-z] ===> From a to z
// [^a-z] ===> Not equal from a to z
// [A-Z] ===> From A to Z
// [^A-Z] ===> Not equal from A to Z
// [abc] ===> Any letter from a or b or c
// [^abc] ===> Not equal a or b or c
// [a-zA-Z] ===> Any letter
// [^a-zA-Z] ===> Only Numbers
// [^a-zA-Z0-9] ===> Only Spicial Character
// [^a-z^A-Z0-9] ===> All Spicial Character without ^
//          D
// Classes Characters :
// \w ===> any letter (Small, Capital)
// \W ===> any thing without letter (Small, Capital)
// \d ===> any numbers 0-9
// \D ===> any thing without numbers 0-9
// \s ===> space
// \s ===> any thing without space
let tld5 = "M@gmail.com";
let regExp7 = /\w@\w.(com|net)/gim;
console.log(tld5.match(regExp7)); // null
// \b ===> يبدأ أو ينتهي بكلمة معينة
// \B ===> لا يبدأ ولا ينتهي بكلمة معينة
let tld6 = "Sayed 1Spam 2Spam Spam3 Osama ASpam";
let regExp8 = /(\bspam|spam\b)/gim;
console.log(tld6.match(regExp8)); // ['Spam', 'Spam', 'Spam', 'Spam']
// Test Methods ===> boolean true, false
// Syntax : Pattern.test(input)
// console.log(regExp8.test(tld6));
// console.log(/(\bspam|spam\b)/gim.test("Sayed 1Spam 2Spam Spam3 Osama ASpam"));
console.log(regExp8.test(tld6)); // true
//          E
// n+ : One or More
// n* : Zero or More
// n? : Zero or One
//          F
// n{x} ==> عدد أكس من المحرف ان
// n{x,y} ==> عدد من أكس لواي من المحرف ان
// n{x,} ==> عدد من أكس وأكثر من المحرف ان
//          G
// Quantifiers :
// $ ===> ينتهي بشيء معين
// ^ ===> يبدأ بشيء معين
// ?= ===> يتبع بشيء معين
// ?! ===> لا يتبع بشيء معين
let tld7 = "We love programming";
let regExp9 = /(^We|ing$)/gim;
console.log(regExp9.test(tld7)); // true
console.log(tld7.match(regExp9)); // ['ing']
let tld8 = "We love programming";
let regExp10 = /p\w{5,}(?=g)/gim;
let regExp11 = /p\w{5,}(?!g)/gim;
console.log(tld8.match(regExp10)); // ['programmin']
console.log(tld8.match(regExp11)); // ['programming']
//          H
// replace(old, new); ===> Replace for one timers ,Only when print
// replaceAll(old, new); ===> Replace for many timers ,Only when print
// Full Example :
let txt = "Mohamed Ali Abdo";
console.log(txt.replace("A", "N")); // Mohamed Nli Abdo
console.log(txt.replaceAll("A", "N")); // Mohamed Nli Nbdo
// By Pattern
let regExp12 = /Ali/gim;
console.log(txt.replaceAll(regExp12, "Nour"));
// End Section 2
