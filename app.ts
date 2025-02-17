//* Array with generic
const arr:Array<number> = [1, 2];

//* Promise with generic
const myPromise = new Promise<string>((resolve, reject) => {
   resolve('it worked');
})
.then((res) => {
   console.log(res.split('w'));
})

//* Custom Generic
const returnValue = function<T>(val: T): void {
   console.log(val);
}
returnValue<string>('Hello');
returnValue<number>(21);

//* Multiple generics
const returnTwoValues = function<T1, T2>(val1: T1, val2: T2): void {
   console.log(val1, val2);
}
returnTwoValues<string, {}>('Hello', {name: 'hassan', age: 21});