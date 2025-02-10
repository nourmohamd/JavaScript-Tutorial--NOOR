// Lesson 46
// ---------------------------------------- Session Storage ---------------------------------------
// تقوم بحذف البيانات بعدما يقوم المستخدم بإغلاق المتصفح يعني تخزين جلسة واحدة,بعكس التخزين المحلي يخزن البيانات بشكل دائم
/*
    1 - add data sessionStorage.setItem("nameOfKey", "value");

    2 - get data sessionStorage.getItem("nameOfKey");

    3 - edit data sessionStorage.setItem("nameOfKey", "New Value");

    4 - delete data sessionStorage.removeItem("nameOfKey");

    5 - delete all data sessionStorage.clear();

    6 - get length sessionStorage.length;
*/

// Lesson 47
// Build Project For Editor By : HTML CSS JavaScript

// Lesson 48
// ------------------------------------------ Location Object ----------------------------------------
/*
Location Notes:
1 - protocol is HTTPS | HTTP | file << Default >>
2 - location.protocol ===> for get protocol
3 - location.href ===> for get url
4 - location.hostname ===> for get name of Domain
5 - location.pathname ===> for get name of page
*/
// Lesson 49
/*
6 - location.reload() ===> for reload The page of web
7 - location.assign("URL") ===> for Translate User To New Page And They can to return to previous
تحويل المستخدم لصفحة جديدة ولكنه يمكنه العودة للصفحة السابقة
8 - location.replace("URL") ===> replace this url to new url
تحويل المستخدم لصفحة جديدة ولكنه لا يمكنه العودة للصفحة السابقة
*/

// Lesson 50
// أخطاء تقوم بها
// 1 - عدم ربط ملف جافا سكربت مع اتش تي ام ال
// 2 -
/*
ربط ملف جافاسكربت واحد مع أكثر من ملف اتش تي ام ال
حيث انه من الممكن حدوث اخطاء في هذه الحالة ولتفادي الاخطاء
أحد الاخطاء هي وجود عنصر ما في احد الملفات من اتش تي ام ال وعدم وجوده في ملف اخر
وهذا العنصر مستخدم في ملف الجافا سكربت
لتفادي هذا الخطأ--------------------
*/
let path = location.pathname;
let fileName = path.substring(path.indexOf("/") + 1);
if (fileName === "home.html") {
} else if (fileName === "index.html") {
} else if (fileName === "contact.html") {
} else if (fileName === "portfolio.html") {
}

// Lesson 51
// document.URL ===> Return Full URL For This Page
// document.documentURI ===> Same Document.URL
// document.domain ===> For Return Domain Of This Page Such As ( www.youtube.com )
// Remember : Scheme://Prefix.domain:port/pathname/filename
// الموقع الغير منشور ليس له دومين

// Lesson 52
// document.title ===> For get and set title of page
// document.body ===> for select body element
// document.head ===> for select head element and add new element or remove element from it

// Lesson 53
// document.images
// document.embeds
// document.links
// document.forms
// length ===> يحدد عدد العناصر المتواجد في المصفوفات أو الميزات السابقة
console.log(document.images.length);
console.log(document.embeds.length);
console.log(document.links.length);
console.log(document.forms.length);

// Example: You can after select element to add new attributes or update to it
document.images[0].src = "img1.png";
// لحتى تعمل تعديلات على عدة عنصر اعمل فور لووب عليهم

// Lesson 54 ===> عمل موقع يدعم لغتين العربية والانكليزية ويتم تحديد اللغة عبر المستخدم

// Lesson 55
// ----------------------------------------------- Mouse Events -------------------------------------------
/*
    1 - click ===> عند النقر عل عنصر ما
    2 - contextmenu ===> عند النقر بالزر الايمن للماوس
    3 - dblclick ===> عند النقر مرتين متتاليتين
    4 - mousedown ===> عند النقر بأي كبسة من الماوس
    5 - mouseenter ===> عند مرور أو تحريك الماوس فوق العنصر
    6 - mouseleave ===> عندما يمر الماوس من العنصر ثم يخرج منه
    7 - mousemove ===> عندما يتحرك الماوس فوق العنصر
    8 - mouseout ===> عندما يتحرك الماوس خارج العنصر واولاده
    9 - mouseover ===> عندما يتحرك الماوس داخل العنصر وأولاده
    10 - mouseup ===> عند النقر بأي كبسة فوق عنصر معين
*/

// Lesson 56
// 1 - onbeforeunload and beforeunload()
// يعرض صندوق منبق عندما تريد مغادرة هذه الصفحة
// Example :
// in HTML
// <body onbeforeunload="return beforeunload()"> </body>
// in JS
function beforeunload() {
  return "";
}
// 2 - onbeforeprint and beforeprint()
// يعرض لك رسالة قبل فتح الطابعة
// Example :
// in HTML
// <body onbeforeprint="return beforeprint()"> </body>
// in JS
function beforeprint() {
  alert("Open Print");
}
// 3 - onafterprint and afterprint()
// يعرض لك رسالة بعد الطابعة
// Example :
// in HTML
// <body onafterprint="return afterprint()"> </body>
// in JS
function afterprint() {
  alert("Print Is Completed!");
}

// Lesson 57
// ------------------------------------------------ Keyboard Events ------------------------------------------
// 1 - onkeyup - keyup ===> عند النقر على أي كبسة في الكيبورد ثم رفع اصبعك عنه يحدث شيء معين
// 2 - onkeydown - keydown ===> عند النقر فقط قبل رفع اصبعك عن الكبسة
// 3 - onkeypress - keypress ===> بمجرد الضغط والاستمرار بالضغط
// We Add These Events For Body Element Only
/*
1 -
<body onkeyup="A(event)">
</body>

2 -
<body onkeydown="A(event)">
</body>

3 -
<body onkeypress="A(event)">
</body>
*/

/*
Attributes For Event :
1 - event.key ===> Return The Button We Clicked it such as S - G - 1 - Enter ...
2 - event.code ===> Return the code of the button we clicked it such as KeyB - KeyO - Key6 ...
*/
function a1(e) {
  if (e.key === "s") {
  } else if (e.key === "S" || e.code === "KeyS") {
  }
}
function a2(e) {
  if (e.key === "r") {
    location.reload();
  }
}
function a3(e) {
  alert(e.key + " " + e.code);
}

// Lesson 58
// -------------------------------------------- Copy Paste Cut Events ------------------------------------
/*
1 - oncopy - copy نسخ
2 - oncut - cut قص
3 - onpaste - paste لصق

هذه الاحداث تضاف لأي عنصر تريده
*/
// Way 1 :
/**
 * HTML
 * <body oncopy="copy()" ></body>
 * <h3 oncopy="copy()" ></h3>
 * JS
 * function copy() {
 *  cosole.log("Copied Text!")
 * }
 */

// Way 2 : for all elements
document.addEventListener("copy", function copy() {
  console.log("Copied Text!");
});

// Way 3 :
class A {
  constructor() {
    let a = document.body;
    A.addEventListener("cut", function cut() {
      console.log("Cut Text!");
    });
  }
}
onload = new A();

// Lesson 59
// ------------------------------------------- Form Events -----------------------------------------
// onsubmit - submit
// preventDefault() ===> منع افتراضي

// In HTML
/*
<form id="form1" method="GET">
    <label for="email">Email: </label>
    <input type="email" name="email" id="email" />
    <br />
    <label for="password">Password: </label>
    <input type="password" name="password" id="password" />
    <input type="submit" value="Send Data" />
</form>
*/
// In JS
document.forms[0].addEventListener("submit", function s(event) {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  if (email.value === "abdonoor684@gmail.com" && password.value === "NNNNNNN") {
    return true;
  } else {
    event.preventDefault();
  }
});
