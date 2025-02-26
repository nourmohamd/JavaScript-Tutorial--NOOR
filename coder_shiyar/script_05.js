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
window.screen.orientation.type Values is 
1 - portrait ===> عمودي
2 - landscape ===> أفقي
3 - portrait-primary ===> عمودي نظامي
4 - portrait-secondary ===> عمودي منعكس
5 - landscape-primary ===> أفقي نظامي
6 - landscape-secondary ===> أفقي منعكس
*/
// Example :
function a() {
  if (window.screen.orientation.type === "portrait") {
    document.body.style.backgroundColor = "red";
  } else if (window.screen.orientation.type === "landscaep") {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "blue";
  }
}
addEventListener("load", a);
addEventListener("orientationchange", a);

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
  window.navigator.userAgent.toLowerCase().includes("windows") &&
  window.navigator.userAgent.toLowerCase().includes("10.0")
) {
} else {
}

// Lesson 66
// ------------------------------------------------ Navigator UserAgent --------------------------
// تنفيذ أوامر تبعاً لنوع المتصفح الذي بستخدمه المستخدم
let user_system = window.navigator.userAgent.toLowerCase();
if (user_system.includes("chrome")) {
  alert("أنت تستخدم غوغل كروم");
}
// إذا كنت تريد تشغيل الموقع على كل الهواتف
if (
  /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
    window.navigator.userAgent
  )
) {
  console.log("You Used Phone");
}

// Lesson 67 & 68
// مراجعة لما سبق و إنشاء صندوق لتحميل التطبيق
/*
1 - Create Section Element and img and text and X for close that section
2 - When we click on X Element Will Close That Section
3 - When we click on Button Download Will be move to place of download
      window.open("Url", "_blank");
4 - in the begin the section doesn't find after a few time will show section
      window.setTimeout(function () {}, n * 1000)
Note: &times; ===> X
      &nbsp; ===> For Space
*/

// Lesson 69
// ----------------------------------------------- Window Functions ---------------------------
/*
1 - window.open("URL", "_blank | _self"); ===> Open New Page
2 - window.top.close(); ===> Close Page (التي فتحت عبر جافاسكربت)
3 - window.stop(); ===> Stop Load Any Page
4 - window.print(); ===> For Open The Printer Page
*/

// Lesson 70
/*
5 - window.prompt("Message", "Default"); ===> For Show Box And It Has One Field And Return The Value
// يستخدم لوضع حقل لكلمة السر قبل أن يدخل المستخدم
6 - window.confirm("Message") ===> Return True | False (Agree | No Agree)
*/
// Example 1:
let a = window.prompt("Enter Your Password ", "*****");
// جواب المستخدم سيخزن في هذا المتغير
if (a === "MohamedNour") {
  alert("Welcome Mohamed Nour");
} else {
  window.top.close();
}

// Example 2:
let b = window.confirm("Are You Sure You Want To Sign Out ?");
if (b === true) {
  window.top.close();
}
