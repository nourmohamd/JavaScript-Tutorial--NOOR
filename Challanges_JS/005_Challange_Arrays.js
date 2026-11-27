// Start JavaScript Code
let zero = 0;
let counter = 3;
let my = ["Ahmad", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
// Use Those Variables Only And What You Know Before For Solve This Challange:
my = my.slice(zero, ++counter).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmad"]

my = my.slice(++zero, --counter);
console.log(my); // ["Elham", "Mazero"]

let f1 = my[--zero].slice(zero, counter - my.length + counter / counter);
let f2 = my[counter / counter].slice(counter / counter + ++zero);
console.log(f1 + f2); // Elzero

my = f1 + f2;
console.log(zero, " ", counter);
console.log(
  my.substr(zero + counter).charAt(--zero) +
    my.substr(++zero + ++counter).toUpperCase(),
); // rO
