const arrLength = arr => {
    let myLengths = [];
    for (let i = 0; i < arr.length; i++) {
        myLengths.push(arr[i].length);
    }
    return myLengths;
}

let arr1 = ["boo", "doooo", "hoo", "ro"];

console.log(arrLength(arr1));