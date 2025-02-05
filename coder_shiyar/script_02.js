// Lesson 14
// Found Error in JavaScript Rules ( By Google Chrome And Go to developer tools then go to console )

// Lesson 15
// ------------------------------------------------ String Rules --------------------------------------
/**
 * 1 - toUpperCase(String) ---> تحويل للأحرف الكبيرة
 * 2 - toLowerCase(String) --> تحويل للأحرف الصغيرة
 * 3 - concat(String) --> دمج سلسلتين نصيتين
 * 4 - trim() --> حذف الهوامش من بداية ونهاية النص
 * 5 - charAt("One Character") --> يعيد لك الحرف للرقم الذي تضعه ضمنه في حال وجده أو -1 في حال لم يجده
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
 */

// Lesson 17
/**
 * 12 - replace(Old Value, New Value)
 * Old Value : "o" , /\character or statement/gi
 * g : global
 * i : upper or lower case
 * new : Any Value
 * 13 - substring(start, end)
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
console.log(arr[a.length - 1]); // last element [4, 5, 6]
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
