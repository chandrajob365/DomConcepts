// let sum = (a) => {
//     let closureFunc = (b) => b ? sum(a + b) : a
//     closureFunc.toString = () => a;
//     return closureFunc;
// }

const add = a => b => b ? add(a + b) : a;
console.log(add(1)());
console.log(add(1)(2)());
console.log(add(1)(2)(5)());
console.log(add(1)(2)(5)(9)(12)());
