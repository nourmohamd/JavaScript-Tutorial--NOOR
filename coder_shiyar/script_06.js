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
