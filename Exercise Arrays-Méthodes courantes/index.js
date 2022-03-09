// Split------
const mysteriousString = "iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f";

const step1 = mysteriousString.split("");

console.log(step1);

//Slice-------

const step2 = step1.slice(14, 31);

console.log(step1.slice(14, 31));

// Splice----------

const step3 = step2.slice();

step3.splice(5, 2, "t");

console.log(step3);

//Reverse----------

const step4 = step3.reverse();

console.log(step4);

//Join----------

const step5 = step4;

console.log(step5.join(""));



