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
