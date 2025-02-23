//                          Asynchronous JavaScript And XML (AJAX)
// 1 - Uses Other Technolgy HTML - CSS - JS - DOM
// 2 - Uses XMLHttpRequest For use it with Server
// 3 - تستطيع إحضار البيانات وإرسالها بدون الحاجة لإعادة تحميل الصفحة
// Example About it : Youtube Studio - Google Drive - Upload Article Photo - Form Check Name
// Rules :
// new XMLHttpRequest();
// Request and Response
// Statues Code (حالة الكود)
// Syntax : let req = new XMLHttpRequest();
// 1 - Request Method ()
// 2 - Status Code
// 3 - Return Response

// Values Of readyState
// 0 ==> Request Not Initialized
// 1 ==> Server Connection Established
// 2 ==> Request Received
// 3 ==> Processing Request
// 4 ==> Request is Finished and Response is Ready
// Values Of status
// 200 ==> Response is Successful
// 404 ==> Not Found
// Example 1:
let myRequest1 = new XMLHttpRequest();
myRequest1.open(
  "GET",
  "https://api.github.com/users/mohamadnourabdo/repos",
  true
);
myRequest1.send();
myRequest1.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};

// myRequest1.open("GET || POST", "URL" OR JSONFILE, Status(async true, sync false));
// myRequest1.send();
// myRequest1.onreadystatechange = function () {if (condtion) {statements}}
//                          LOOP And AJAX
let myRequest2 = new XMLHttpRequest();
myRequest2.open(
  "GET",
  "https://api.github.com/users/mohamadnourabdo/repos",
  true
);
myRequest2.send();
myRequest2.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let jsDate = JSON.parse(myRequest2.responseText);
    for (let i = 0; i < jsDate.length; i++) {
      let newDiv = document.createElement("div");
      let newText = document.createTextNode(jsDate[i].id);
      newDiv.append(newText);
      document.body.appendChild(newDiv);
    }
  }
};
//                          Call Back Hell
// Example :
setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Show The Photo in WebSite");
    }, 1000);
  }, 1000);
}, 1000);
/**
 * Output :
 * Download Photo From URL
 * Resize Photo
 * Show The Photo in WebSite
 * : بالترتيب
 */
//                          Promise (الوعد يعني الكود يوعدك أنو راح ينفذ شي معين حسب طلبك)
// يعمل كالوعد في الحقيقة يعني حاجة لسا راح تحصل بالمستقبل
// يستخدم لتجنب مشكلة ===> Call Back Hell
// الوعد هو الأوبجكت الذي يمثل حالة
// Asynchronous Operation
// والنتائج الراجعة منه
// حالات الوعد
/**
 * 1 - Pending (قيد الانتظار) ===> الحالة الأولية بينما يكون الوعد معلقاً تكون القيمة الخاصة بالوعد غير معروفة
 * 2 - Fulfilled (استيفاء) ==> Completed Successfully (عند تحقق الوعد يرجع قيمة معينة )
 * 3 - Rejected (مرفوض) ==> Failed (عدم تحقق الوعد أو حدوث خطأ ما)
 * في بداية إنشاء الوعد يكون في الحالة الأولى ثم ينتهي إما محقق أو غير محقق ===> Resolved Or Rejected
 * Then We need method then for print value of promise
 */
// Example 1:
let myPromise1 = new Promise((resolvedFunction, rejectedFunction) => {
  let connect = true;
  if (connect) {
    resolvedFunction("Connection Estableished");
  } else {
    rejectedFunction(Error("Connection Failled"));
  }
}).then(
  (resolvedValue) => console.log(`Good ${resolvedValue}`),
  (rejectedValue) => console.log(`Bad ${rejectedValue}`)
);
console.log(myPromise1); // print Object with status
// ممكن أن تضع النتيجة في متغير ثم تنادي ذلك المتغير
/**
 * let v1 =   (resolvedValue) => console.log(`Good ${resolvedValue}`);
 */
// Example 2:
const myPromise2 = new Promise((resolvedFunction, rejectedFunction) => {
  let emplyee = ["Nour", "Ahmad", "Mohamed", "Yahia"];
  if (emplyee.length === 4) {
    resolvedFunction(emplyee);
  } else {
    rejectedFunction(Error("Number Of Emplyee is not equal four"));
  }
});
myPromise2
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => console.log(`The Choosen Emplyee is ${resolveValue}`))
  .catch((rejectedValue) => console.log(rejectedValue))
  .finally(console.log(`The Operation is Done!`)); // ==> تتنفذ في كلا الحالتين
// The output is :
// The Choosen Emplyee is Nour
// The Operation is Done!

//                          XML && Promise
// Full Example :
const getDate2 = function (apilink) {
  return new Promise((resolve, reject) => {
    let newXML = new XMLHttpRequest();
    newXML.onreadystatechange = function () {
      // ===> or onload
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("Had Some Wrongs"));
      }
    };
    newXML.open("GET", apilink);
    newXML.send();
  });
};
getDate2("https://api.github.com/users/mohamadnourabdo/repos")
  .then((resolved) => {
    resolved.length = 10;
    return resolved;
  })
  .then((resolved) => console.log(`This ${resolved[0].id}`))
  .catch((rejected) => console.log(rejected))
  .finally(console.log("Done!"));
// Output is This 491616803

//                          Fetch API
// تتعامل مع ال أي بي آي وتجيب بياناتك منه
/**
 * Syntax Code :
 * fetch(URL of api)
 * or
 * fetch(file JSON)
 *
 * The fetch returns a promise
 */
// Example 1:

// ###########################
fetch("https://api.github.com/users/mohamadnourabdo/repos")
  .then((resolved) => {
    let data = resolved.json();
    return data;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => console.log(`I am from fetch : ${ten[0].id}`));
// Output is : I am from fetch : 491616803
// ###########################
//                          All && All Settled && Race
// Example :
const m1 = new Promise((resolvedFunction, rejectedFunction) => {
  setTimeout(() => {
    resolvedFunction("First Promise (Race)");
  }, 5000);
});
const m2 = new Promise((resolvedFunction, rejectedFunction) => {
  setTimeout(() => {
    resolvedFunction("Second Promise (Race)");
  }, 1000);
});
const m3 = new Promise((resolvedFunction, rejectedFunction) => {
  setTimeout(() => {
    resolvedFunction("Third Promise (Race)");
  }, 2000);
});

// 1 - Promise.all([promise1, promise2, ...]);
Promise.all([m1, m2, m3]).then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);
/**
 * Output is : ['First Promise (Race)', 'Second Promise (Race)', 'Third Promise (Race)']
 */
// Results:
// If all promises are resolved ===> returns all results of promises in own array
// If found own promise is rejected ===> Not return anything and stop

// 2 - Promise.allSettled();
Promise.allSettled([m1, m2, m3]).then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);
/**
 * Output is :
 * (3) [{…}, {…}, {…}]
0
: 
{status: 'fulfilled', value: 'First Promise (Race)'}
1
: 
{status: 'fulfilled', value: 'Second Promise (Race)'}
2
: 
{status: 'fulfilled', value: 'Third Promise (Race)'}
length
: 
3
[[Prototype]]
: 
Array(0)
 */
// سوف يطبع كل النتائج دوما مهما كانت الحالة وهي عبارة عن مصفوفة من الوعود وحالاتهم
// 3 - Promise.race();
// نفس الشيء ولكن هنا سوف يرجع نتيجة الوعد الذي يتحقق في البداية
Promise.race([m1, m2, m3]).then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);
// Output is : Second Promise (Race)
//                          Async
// إن كتابة الوعد شيء صعب حيث نستخدم هذه الميزة لتسهيل كتابة الكود
// Example 1: (Without async)
function getData() {
  return new Promise((res, rej) => {
    let user = [];
    if (user.length > 10) {
      res("Found");
    } else {
      rej(Error("Not Found"));
    }
  });
}
getData().then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
// Output is :
/**
 * Error: Not Found
    at Section-3.js:826:11
    at new Promise (<anonymous>)
    at getData (Section-3.js:821:10)
    at Section-3.js:830:1
 */
// Example 2: (With async)
function getData2() {
  let u = ["Nour"];
  if (u.length > 0) {
    return Promise.resolve("Found");
  } else {
    return Promise.rejected("Not Found");
  }
}
getData2().then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
// Output is : Found
// لو وضعت قبل الدالة كلمة اسينك هذا يعني أن الدالة سترجع لنا وعد ونعاملها معاملة الوعد
async function getData3() {
  let u = ["Nour"];
  if (u.length > 0) {
    return "Found";
  } else {
    throw new Error("Not Found");
  }
}
getData3().then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
// Output is : Found
//                          Await
// تعمل فقط داخل دالة  ===> async function
// يجعل الجافا سكربت تنتظر نتيجة الوعد

// Example 1:
const m4 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Good Promise");
  }, 3000);
});
async function readData() {
  console.log("Before Promise");
  console.log(
    await m4.then((res) => {
      return res;
    })
  );
  console.log("After Promise");
}
readData();
// Example 2:
const mp = new Promise((res, rej) => {
  rej("I am Bad Promise");
});
async function readData2() {
  try {
    console.log(await mp);
  } catch (reason) {
    console.log(`Reason, ${reason}`);
  }
}
readData2();
// Output is : Reason, I am Bad Promise
// Example (Very Important) :
async function fetchData() {
  try {
    let D = await fetch("https://api.github.com/users/mohamadnourabdo/repos");
    console.log(await D.json());
  } catch (reason) {
    console.log(`Reason, ${reason}`);
  } finally {
    console.log("Finally Done!");
  }
}
fetchData();
