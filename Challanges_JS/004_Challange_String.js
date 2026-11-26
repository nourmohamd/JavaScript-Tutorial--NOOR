// Start Javascript Code
let a = "Elzero Web School";

// Include This Methods In Your Solution [slice, charAt] And What You Need
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array [Elzero]
console.log(a.split(" ", 1));

// Use Only "substr" Method + Template Literals `` In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Elzero School

// Solution Must Be Dynamic And String May Change
console.log(
  a.charAt(0).toLowerCase() +
    a.toUpperCase().slice(1, a.length - 1) +
    a.charAt(a.length - 1).toLowerCase(),
); // eLZERO WEB SCHOOl
