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
