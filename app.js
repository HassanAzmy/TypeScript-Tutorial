"use strict";
const arr = [1, 2];
const myPromise = new Promise((resolve, reject) => {
    resolve('it worked');
})
    .then((res) => {
    // console.log(res.split('w'));
});
const returnValue = function (val) {
    return val;
};
console.log(returnValue('Hello'));
console.log(returnValue(21));
const returnTwoValues = function (val1, val2) {
    console.log(val1, val2);
};
returnTwoValues('Hello', { name: 'hassan', age: 21 });
