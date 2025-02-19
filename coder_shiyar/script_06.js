// Lesson 71
// ----------------------------------- Click() & remove() Simulation Events ----------------------
/*
1 - remove() ===> تستخدم لحذف العنصر الذي تحدده
2 - click() ===> نقر عنصر محدد
*/
// Example :
let a = document.querySelector("a");
a.onclick = function () {
  a.parentElement.remove();
  a.nextElementSibling.click();
};
document.querySelector("p").remove();
document.querySelector("p").click();

// Lesson 72
// -------------------------------------- Attributes Functions ----------------------------
/*
1 - element.hasAttribute("NameOfAttribute") ===> For Check About Attrubute is found or no
        True | False
2 - element.getAttribute("NameOfAttribute") ===> For Get Value Of Attribute
        Value | Null
3 - element.setAttribute("NameOfAttribute", "Value") ===> For Set New Or Update Attribute
4 - element.removeAttribute("NameOfAttribute") ===> For Remove Attribtue From Element
*/

// Lesson 73
// ------------------------------------- Array Functions ----------------------------------
/*
1 - length ===> For Get Length Of Array
2 - indexOf("Element", Start Position) ===> For Get Index For Element
3 - lastIndexOf("Element", Start Position) ===> For Get Index From Last To Begin
4 - pop() ===> Remove Last Element
5 - push("Element", ["el1", "el2"],...) ===> Add Element Or More To End Of Array
6 - unshift("Element", ["el1", "el2"],...) ===> For Add Element Or More To Begin Of Array
7 - shift() ===> Remove First Element And Return It
8 - sort() ===> Sorted The Elements Of Array
9 - includes("Element") ===> For Check About Element is in the array or no ( False | True )
10 - concat([] or nameOfArray) ===> For Concat Two Arrays With Them
11 - Arr.toString() ===> For Print Of Array Such As ( 1,2,3,4 )
*/

// Lesson 74
// ----------------------------------- Time Functions -------------------------------
// 1 - setTimeout( function, time (millisecond) ) : Excute For One Time
// 2 - clearTimeout( nameOfHandle )
// Example : After 2 S Print Yes
setTimeout(function () {
  console.log("Yes");
}, 2 * 1000);
// Full Example :
let a = setTimeout(function () {
  console.log("Yes");
}, 2 * 1000);

document.getElementsByTagName("p")[0].addEventListener("click", function () {
  clearTimeout(a);
});

// Lesson 75
// 3 - setInterval( function, time (millisecond) ) : Excute For More One Time
// 4 - clearInterval(nameOfHandle)
// Full Example :
let a2 = setInterval(function () {
  console.log("Yes");
}, 2 * 1000);

document.getElementsByTagName("p")[0].addEventListener("click", function () {
  clearInterval(a2);
});

// Lesson 76
// Make Website For Slider Show Images << This is only >>

// Lesson 77
// ------------------------------------ History Object ---------------------------------
/*
1 - history.back() ===> For Go To Back
2 - history.forward() ===> For Go To Front
3 - history.go(Number) ===> if Number is - ===> Go Back Otherwise : Go Front
4 - history.length ===> For Get Length Of Pages Saved
*/

// Lesson 78
// --------------------------------------- Date ----------------------------------------
// Note : We Can Get Element has Id In JavaScript By Id Name Only Without Selectors
// All Functions You Needed it In Date Class
// Full Example :
let tm = new Date();
// 1 - Way One
console.log(tm.getFullYear()); // For Get Current Year
console.log(tm.getMonth()); // For Get Current Month [0 ---> 11]
// tm.getMonth() + 1 = This Montth
// If That Doesn't Work Put This : parseInt(tm.getMonth()) + 1

console.log(tm.getDate()); // For Get Current Day of Month
console.log(tm.getHours()); // For Get Current Hour [0 - 23]
console.log(tm.getMinutes()); // For Get Current Minutes [0 - 59]
console.log(tm.getSeconds()); // For Get Current Seconds [0 - 59]
console.log(tm.getMilliseconds()); // For Get Current Milliseconds [0 - 999]
console.log(tm.getDay()); // For Get Current Day Of Week [0 - 6]
console.log(tm.getTime()); // For Get Current Milliseconds From 1 Junary 1970 Until Now
console.log(Date.now()); // For Get Current Milliseconds From 1 Junary 1970 Until Now

// 2 - Way Two ( UTC )
console.log(tm.getUTCFullYear()); // For Get Current Year
console.log(tm.getUTCMonth()); // For Get Current Month [0 ---> 11]
// tm.getMonth() + 1 = This Montth
// If That Doesn't Work Put This : parseInt(tm.getMonth()) + 1

console.log(tm.getUTCDate()); // For Get Current Day of Month
console.log(tm.getUTCHours()); // For Get Current Hour [0 - 23]
console.log(tm.getUTCMinutes()); // For Get Current Minutes [0 - 59]
console.log(tm.getUTCSeconds()); // For Get Current Seconds [0 - 59]
console.log(tm.getUTCMilliseconds()); // For Get Current Milliseconds [0 - 999]
console.log(tm.getUTCDay()); // For Get Current Day Of Week [0 - 6]
console.log(tm.getTime()); // For Get Current Milliseconds From 1 Junary 1970 Until Now
console.log(Date.now()); // For Get Current Milliseconds From 1 Junary 1970 Until Now

// Lesson 79 && 80
// Make Website For Get Time

// Lesson 81
// ---------------------------------------- Append Child -------------------------------
// This is Very Important Functions
/*
1 - let el = document.createElement("Name Of Element By HTML")
2 - let text = document.createTextNode("Text")
3 - el.appendChild( text )
*/
// Example 1:
let list = document.querySelector("ul");
function a() {
  let li = document.createElement("li");
  let inp = document.querySelector("input").value;
  let text = document.createTextNode(inp);
  li.appendChild(text);
  list.appendChild(li);
}
// Example 2:
let audio = document.createElement("audio");
audio.src = "audio.ogg";
audio.controls = "true";
document.body.appendChild(audio);

// Lesson 82
// ------------------------------------- ClassList Class ----------------------------------
/*
1 - classList.add("C1", "C2", "C2", ...) ===> For Add New Class
2 - classList.contains("NameClass") ===> Check About Class And Return True | False
3 - classList.remove("C1", "C2", "C3", ...) ===> For Remove Class Or More
4 - classList.item(index) ===> Get Class By Index (0 ===> n-1)
5 - classList.length ===> For Get Length Of classList
*/

// Lesson 83
// ------------------------------- Screen ( Width & Height ) ----------------------------
/*
1 - window.screen.width ===> For Get Width Of Screen
2 - window.screen.height ===> For Get Height Of Screen
*/
// Example 1:
if (window.screen.width === 1366 && window.screen.height === 768) {
  alert("Yes ");
}

// Lesson 84
// ------------------------------ Control Of Audio Element In JS --------------------------------
/*
1 - audioElement.load() ===> For Reload Music
2 - audioElement.play() ===> For Play Music
3 - audioElement.pause() ===> For Pause Music
*/

// Lesson 85
// Other Methods For Audio
/*
4 - audioElement.volume ===> For Get | Set Volume For Audio (0.0 ---> 1.0)
5 - audioElement.src ===> For Get | Set Src Of Audio
6 - audioElement.playbackRate() ===> For Control Of Speed Audio (0.0 ---> 2.0 (أقصى سرعة))
*/

// Lesson 86 - 87 - 88 - 89 - 90
// Make Website For Radio
