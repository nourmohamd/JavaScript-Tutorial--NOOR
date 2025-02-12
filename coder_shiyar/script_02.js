// Lesson 14
// Found Error in JavaScript Rules ( By Google Chrome And Go to developer tools then go to console )

// Lesson 15
// ------------------------------------------------ String Rules --------------------------------------
/**
 * 1 - toUpperCase() ---> تحويل للأحرف الكبيرة
 * 2 - toLowerCase() --> تحويل للأحرف الصغيرة
 * 3 - concat(String) --> دمج سلسلتين نصيتين
 * 4 - trim() --> حذف الهوامش من بداية ونهاية النص
 * 5 - charAt(indexOfCharacter) --> يعيد لك الحرف للرقم الذي تضعه ضمنه في حال وجده أو -1 في حال لم يجده
 */
let s1 = "Mohamed Nour Abdo";
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());
console.log(s1.concat(" : 5")); // Mohamed Nour Abdo : 5
console.log(s1.trim());
console.log(s1.charAt(2)); // h

// Lesson 16
/**
 * 6 - length
 * 7 - indexOf("String", start Position) --> same chartAt but it searchs from begin to end
 * 8 - lastIndexOf("String", start Position) --> same indexOf but it searchs from end to begin
 * 9 - search("Any Value") --> Searchs about this value returns
 * 10 - startsWith("Any Value") --> Returns False or True
 * 11 - endsWith("Any Value") --> Returns False or True
 * 12 - includes("Value") ===> True Or False
 */

// Lesson 17
/**
 * 13 - replace(Old Value, New Value)
 * Old Value : "o" , /\character or statement/gi
 * g : global
 * i : upper or lower case
 * new : Any Value
 * 14 - substring(start, end)
 * Start:
 * 	Required.
 *  Start position.
 *  First character is at index 0.
 * End:
 *  Not include end
 *  (substring doesn't accept negative values and negative = zero)
 *  اذا بدلت مكان القيمتين لا يؤثر
 *
 */
let s2 = s1.replace(/\ /g, "@"); // s2 = Mohamed@Nour@Abdo
let s3 = s1.substring(0, 7); // Mohamed
let s4 = s1.substring(0, -10); // nothing
let s5 = s1.substring(7, 0); // Mohamed

// Lesson 18
// ------------------------------------------------ Arrays ---------------------------------------------

let arr = [1, 2, 3, "Mohamed Nour", [4, 5, 6]];

console.log(arr[0]); // 1
console.log(arr[4]); // [4, 5, 6]
console.log(arr[3].length); // 11
console.log(arr.length); // 5
console.log(arr[arr.length - 1]); // last element [4, 5, 6]
console.log(arr[4][0]); // 4

// delete element from array
delete arr[4]; // يحذف العنصر لكن مكانه فارغاً
// delete by splice(start, count of delete)
delete arr.splice(4, 1); // [1, 2, 3, "Mohamed Nour"]
delete arr.splice(2, 2); // [1, 2]

// Array.isArray(array Name);
console.log(Array.isArray(arr)); // True

// Foreach for Get All Element in Array
arr.forEach(function (el, ind, arr) {
  console.log(el);
});

// Lesson 19 ===> Revsion For All Before Rules

// Lesson 20
// ------------------------------------------------ Object DataType --------------------------------------
// {}
// key:value
// contains all datatype: String Boolean Number Object Function Null Undefiend
// -----for get information :
// ob.nameofkey
// ob["nameofkey"]
// ob.arr[1]
// ob["arr"][1]
// -----for add new key:value
// ob.newNameKey = Value
// -----delete key
// delete ob.nameofkey
// -----update key
// ob.nameofkey = newvalye

// Lesson 21
// -----put object inside object
// let ob = {d1:{Values}, d2:{Values}}
// ob.d1.color = "red"
// ob["d2"]["color"] = "yellow"
// Example:
let ob = {
  o1: {
    color: "red",
  },
  o2: {
    color: "yellow",
  },
};
console.log(ob.o1.color); // red
console.log(ob["o2"]["color"]); // yellow

// Lesson 22
// ---------------------------------------------- If Condition Statement -----------------------------------
/**
 * if(){}
 * if(){} ele{}
 * if(){} else if(){} else{}
 * Comparison Operators : > < >= <= == === !=
 */

// Lesson 23
// ----------------------------------------------- Logical Operators ----------------------------------------
// && And - || Or - ! Not

// Lesson 24
// ------------------------------------------------ Switch Case Statement ------------------------------------

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
    break;
}
// Output is
// Hello 2
// Hello 3

// Lesson 25
// -------------------------------------------------- Loops ------------------------------------------------

// While Loop
let i = 1;
let count = 20;

while (i <= count) {
  console.log(i);
  i++;
}

// counter
// condition != infinity
// increment counter++

// Lesson 26
// For Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Lesson 27
// Do While Loop
let j = 1;
let count2 = 20;
do {
  console.log(i);
  i++;
} while (i <= count2);
// continue and break
for (let i = 0; i < 10; i++) {
  if (i == 5) break;
  console.log(i);
}
// Output : 0 1 2 3 4
for (let i = 0; i < 10; i++) {
  if (i == 5) continue;
  console.log(i);
}
// Output : 0 1 2 3 4 no_5 6 7 8 9

// Lesson 28
// forEach
// 1 - forEach With Arrays
let myArr = ["Noor", "Mohamed", "Ahmad"];
for (let el1 in myObject) {
  console.log(myArr[el]);
}

// 2 - forEach With Arrays
myArr.forEach(function (el) {
  console.log(el);
});

// Example :
/*
  let el = document.getElementById("list");
  let arr = ["Noor", "Mohamed", "Salah", "Ahmad", "Abd", "Mohamed"];
  for (let i = 0; i < arr.length; i++) {
    el.innerHTML += `
          <li class="li">
              <a href="index.html">${arr[i]}</a>
          </li>
      `;
  }
*/

// Lesson 29
// 3 - forEach With Objects
let mmoo1 = {
  name: "Mohamed Nour",
  age: 24,
  leve: "5 Five",
};
for (let k in mmoo1) {
  console.log(mmoo1[`${k}`]);
  console.log(mmoo1[k]);
}

let mmoo2 = {
  user1: { name: "Mohamed Nour", age: 24, level: "5 Five" },
  user2: { name: "Mohamed", age: 23, level: "1 One" },
  user3: { name: "Nour", age: 20, level: "2 Two" },
};
for (let k in mmoo2) {
  console.log(mmoo2[`${k}`].name);
  console.log(mmoo2[`${k}`].age);
  console.log(mmoo2[`${k}`].level);
}
// 4 - forEach With Objects
// Transform Object To Array With: Object.keys(objectName)
Object.keys(mmoo2).forEach(function (el) {
  console.log(mmoo2[`${el}`].name);
  console.log(mmoo2[`${el}`].age);
  console.log(mmoo2[`${el}`].level);
});
