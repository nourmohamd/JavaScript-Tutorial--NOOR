// Lesson 91
// -------------------------------------- Try - Catch --------------------------------------
// Exceptions Handling
// يستخدم من أجل معالجة الاستثناءات وهي مرحلة ما بعد كتابة الكود
// Syntax:
let username = "Mohamed Nour Abdo";
try {
  console.log(username1); // Error In Name Of Variable
} catch (error) {
  console.error(error);
}

// Lesson 92
// --------------------------------------- Math's Methods ----------------------------------------
/*
1 - Math.round(x) ===> تقريب العدد حسب الحد الأقرب لهذا العدد
2 - Math.pow(x, y) ===> For Get Exponentiation x^y
3 - Math.sqrt(x) ===> For Get Sqrt Of x
4 - Math.ceil(x) ===> For Get Ceilling Of x
5 - Math.floor(x) ===> For Get Floor Of x
6 - Math.random() ===> For Get Random Number
7 - Math.min(x1, x2, x3, ...) ===> For Get Minimum Number
8 - Math.max(x1, x2, x3, ...) ===> For Get Maximum Number
9 - Math.abs(x) ===> For Get Abs Of x <<< abs(-1) ===> 1 >>>
*/

// Lesson 93
// تحويل البيانات من نصية إلى رقمية
/*
1 - parseInt(num | "String") ===> For Get Number Integer
2 - parseFloat(num | "String") ===> For Get Number Float
3 - Number(num | "String") ===> For Get Number Integer
*/
// Example:
let aa = "12";
console.log(parseInt(aa) + 10);
console.log(parseFloat(aa) + 10);
console.log(Number(aa) + 10);

// Lesson 94
// تحويل البيانات من رقمية إلى نصية
/*
1 - nameOfVariable.toString();
2 - nameOfVariable.toFixed(n); ===> For Get Number With Float Pint Number - n
*/
// Example:
let namee = 1000.12;
console.log(namee.toString()); // 1000
console.log(namee.toFixed(3)); // 1000.120

// Lesson 95
// ----------------------------------------------- Obfuscator Tool --------------------------------------
// https://obfuscator.io/
// For Encode Code Of JavaScript

// Lesson 96
// ----------------------------------------------- Online & Offline -------------------------------------
/*
1 - window.navigator.online ===> Return True If Online And False If Offline
2 - window.addEventListener("offline", function () {  })
3 - window.addEventListener("online", function () {  })
*/
window.addEventListener("offline", function () {
  console.log("Offline");
});
window.addEventListener("online", function () {
  console.log("Online");
});

// Lesson 97
// -------------------------------------------------- Cookie Storage -----------------------------------
// Works With << Server >>
// We Select Time For Data
// Syntax: document.cookie = `color=red; max-age|expires=${24*60*60}; path=/;`;
document.cookie = `color=red; expires=${24 * 60 * 60}; path=/;`; // Data For One Day
// For Update
document.cookie = `color=newValue; expires=${24 * 60 * 60}; path=/;`; // Data For One Day
// For Remove
document.cookie = `color=; expires=${24 * 60 * 60}; path=/;`; // Data For One Day
// Print Values:
console.log(document.cookie); // Print All Keys & Values( color=red; color2=yellow )
// domain=yourDomain
document.cookie = `color=value;domain=www.nour.com; expires=${
  24 * 60 * 60
}; path=/;`;
// secure=true|false ===> For Secure Attampets
document.cookie = `color=; expires=${24 * 60 * 60}; path=/;secure=true;`;
// samesite=strict ===> لمنع الهجمات
document.cookie = `color=; expires=${
  24 * 60 * 60
}; path=/;secure=true;samesite=strict;`;
// Algorithm For Check About Key:
function checkCookie(name) {
  let cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");

    // Remove any leading/trailing whitespace and check if name matches
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  // Return null if the cookie isn't found
  return null;
}
// Usage
let username1 = checkCookie("username");
if (username1) {
  console.log("Cookie found! Value:", username1);
} else {
  console.log("Cookie not found.");
}

// Lesson 98
// --------------------------------------------- GEO Location ----------------------------------------
/*
1 - window.navigator.geolocation ===> تتأكد من أن الجهاز يدعم ميزة تحديد الموقع
2 - window.navigator.geolocation.getCurrentPosition(function(position) {}, function(error) {}) ===> 
  تجلب موقع المستخدم لمرة واحدة فقط
3 - window.navigator.geolocation.watchPosition(f1, f2) ===> يستمر بتحديث الموقع بشكل دائم
4 - window..geolocation.clearWatch(Variable);
  Variable is Contains Value Of << watchPosition | getCurrentPosition >>
*/
if (window.navigator.geolocation) {
  let handel = window.navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      console.log(
        `https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik`
      );
    },
    function (error) {
      // Switch Case For Know What type of error :
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("المستخدم رفض إعطاء الصلاحية");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("ميزة تحديد الموقع غير مدعومة في بلدك");
          break;
        case error.TIMEOUT:
          console.log("تأخر في الاستجابة");
          break;
        case error.UNKNOWN_ERROR:
          console.log("خطأ غير معروف");
          break;
      }
    }
  );
} else {
  console.log("ميزة تحديد الموقع غير مدعومة في بلدك");
}
