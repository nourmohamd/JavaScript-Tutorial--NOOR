// Lesson 60
// --------------------------- Change Message Error Of Inputes In JS --------------------------
// 1 - oninvalid - invalid ===> يحدث عندما تكون قيم الحقل خاطئة
// 2 - oninput - input ===> يحدث عنما يقوم المستخدم بالكتابة داخل الحقل
// 3 - onchange - change ===> يحدث عندما يحدث تغير بقيمة الحقل أو سلكت أو اي شيء أخر

/*
    We Use Oninvalid When Happend Error in Input feild
    Example :
    << HTML >>
    <form method="GET">
        <input type="email" id="email" required />
        <input type="submit" value="send" />
    </form>
    << JavaScript >>
    let email = document.getElementById("email");
    email.addEventListener("invalid", function (e) {
    email.setCustomValidity("Please Enter A Correct Data");
    console.log(e);
    });
*/
/*
    We Use Oninput When We Writting inside Field
    Example :
    << HTML >>
    <form method="GET">
        <input type="email" id="email" required />
        <input type="submit" value="send" />
    </form>
    << JavaScript >>
    let email = document.getElementById("email");
    email.addEventListener("input", function (e) {
    console.log("Writting")
    console.log(e);
    });
*/
/*
    We Use Onchange When We Change Content Of Field
    Example :
    << HTML >>
    <form method="GET">
        <input type="email" id="email" required />
        <input type="submit" value="send" />
    </form>
    << JavaScript >>
    let email = document.getElementById("email");
    email.addEventListener("change", function (e) {
    console.log("Changing")
    console.log(e);
    });
*/

/*
أوامر رسالة الخطأ
1 - email_Field.setCustomVaildity("New Message") ===> لاعادة تعيين رسالة الخطأ
2 - email_Field.value === "" or email_Field.validity.valueMissing ===> للتحقق من الحقل إذا كان يفقد بيانات أم لا
3 - email_Field.validity.typeMismatch or email_Field.validity.value ===> للتحقق من نوع البيانات صالحة أم لا
4 - email_Field.validationMessage ===> لإعادة لك رسالة الخطأ التي تظهر سواء أكانت صحيحة أم خاطئة
*/
// Example :
function a(e) {
  let email = document.getElementById("email");
  if (email.value === "") {
    email.setCustomValidity("Please Enter A Data");
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("Put A Correct Data");
  } else {
    email.setCustomValidity("Success");
    return true;
  }
  console.log(email.validationMessage);
}
/*
<< HTML >>
<form method="GET">
    <input
    type="email"
    id="email"
    oninvalid="a(this)"
    oninput="a(this)"
    required
    />
    <input type="submit" value="send" />
</form>
*/

// Lesson 61
// onchange - change
// يتم تنفيذ الحدث عندما يحدث تغيير في قيمة الحقل المحدد أو السلكت أو أي شيء اخر
// بعكس الحدث من نوع
// input ===> يحدث بمجرد الكتابة
/*
Example 1:
HTML
<select id="s1" onchange="a(this)">
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="yellow">Yellow</option>
</select>
JavaScript :
*/
function a(ev) {
  document.body.style.backgroundColor = ev.value;
}
/*
Example 2:
<select id="s1">
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="yellow">Yellow</option>
</select>
JavaScript :
*/
document.getElementById("s1").addEventListener("change", function () {
  document.body.style.backgroundColor = this.value;
});

// Lesson 62
// --------------------------------------- Encoder And Decoder In JS --------------------------------------------
// Based On 64 Bit ----- :)
// btoa(String) or window.btoa(String) ===> تشفر النص الممرر لها باستخدام نظام 64 بت
// atob(String) or window.atob(String) ===> يقوم بفك تشفير النص المشفر سابقاً
let myName = "Mohamed Nour";
let encoder = window.btoa(myName);
let decoder = window.atob(encoder);
console.log(encoder);
console.log(decoder);

// Lesson 63
// ----------------------------------------- Events Simulations ------------------------------------------
/*
1 - submit(); ===> لارسال البيانالت
2 - reset(); ===> لتصفير حقول الإدخال
3 - focus(); ===> لاضافة تركيز على حقل ما
4 - blur(); ===> لإلغاء التركيز على حقل ما

Use :
element.submit();
element.reset();
element.focus();
element.blur();
/////
في حالة السوبمت أو الريست يجب استدعاءهم عبر عنصر الفورم نفسه
*/

// Lesson 64
// ------------------------------------------- JavaScript Orientation ----------------------------------------
// تنفيذ أوامر معينة حسب وضعية شاشة المستخدم سواء كان أفقي أم عمودي
/*
window.screen.orientation Values is 
1 - portrait ===> عمودي
2 - landscape ===> أفقي
3 - portrait-primary ===> عمودي نظامي
4 - portrait-secondary ===> عمودي منعكس
5 - landscape-primary ===> أفقي نظامي
6 - landscape-secondary ===> أفقي منعكس
*/
// Example :
function a() {
  if (window.screen.orientation === "portrait") {
  } else if (window.screen.orientation === "landscaep") {
  } else {
  }
}
addEventListener("load", a);

// Lesson 65
// ---------------------------------------------- Navigator UserAgent ---------------------------
// تنفيذ أوامر حسب توع نظام جهاز المستخدم
// window.navigator.userAgent
// Example :
if (window.navigator.userAgent.toLowerCase().includes("android 5.0")) {
} else if (window.navigator.userAgent.toLowerCase().includes("android")) {
} else if (
  window.navigator.userAgent.toLowerCase().includes("iphone") ||
  window.navigator.userAgent.toLowerCase().includes("ipod") ||
  window.navigator.userAgent.toLowerCase().includes("ipad")
) {
} else if (window.navigator.userAgent.toLowerCase().includes("win64")) {
} else if (window.navigator.userAgent.toLowerCase().includes("win32")) {
} else if (
  window.navigator.userAgent.toLowerCase().includes("windows") ||
  window.navigator.userAgent.toLowerCase().includes("10.0")
) {
} else {
}
