let arr1 = new Array(100).fill(1);
// console.log(arr1);

let arr2 = Array.from(arr1, (koko ,shushu) => koko + shushu);
// console.log(arr2);


let obj1 = {
    one: 1,
    two: 2,
    three: 3
}

let arr3 = Object.values(obj1)
// console.log(arr3);


let arr4 = ['a', 'b', 'c', 'd'];

let obj2 = Object.assign({}, arr4);
// console.log(obj2);


// console.log(Array.isArray(arr4));



// an array that won’t effect the original array if modified:
// let arr5 = arr4.map((x) => x); option 1
let arr5 = [...arr4] // option 2
arr5.push('banana');
console.log(arr4);


// an array that will effect the original array if modified:
let arr6 = arr4;
arr6.push('banana');
console.log(arr4);