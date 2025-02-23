//                          Curring Function Technique
// هي دالة عادية ولكن ما يميزها هو الاستدعاءات الداخلية
// Example :
function A1(a) {
  return function B1(b) {
    return function C1(c) {
      return a + b + c;
    };
  };
}
console.log(`From Curring Function Technique ${A1(10)(20)(30)}`); // ===> From Curring Function Technique 60
//                          Array.flat(depth)
let mix = [1, 2, [3, [4, 5]], 6];
let min = mix.flat(2);
console.log(min); // ===> [1, 2, 3, 4, 5, 6]
let mio = mix.flat(1);
console.log(mio); // ===> [1, 2, 3, Array(2), 6]
//                          Strict Mode
// أستخدم كود معين عند الوضع الصارم
("use strick");
// You should to use that code before your code

//                          Some Rules For Scroll
// 1 - offsetWidth ===> return width of element
// 2 - offsetHeight ===> return height of element
// 3 - element.onwheel = (e) => { e.preventDefault(); } ===> من أجل السكرول على العنصر باستخدام دولاب الماوس
// We use with onwheel event ===> e.deltaX ===> تعطي قيم موجبة اذا السكرول لليمين وسالبة إذا كان السكرول لليسار
// We use with onwheel event ===> e.deltaY ===> تعطي قيم موجبة اذا السكرول لتحت وسالبة إذا كان السكرول لفوق
