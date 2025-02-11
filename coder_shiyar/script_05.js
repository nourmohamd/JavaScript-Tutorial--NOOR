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
