const arr = [1,7,3,0,-5,7,3,9];

for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
}


const arrayLength = arr => {
    let arrCounter = 0;
    for(let i=0; i< arr.length; i++){
        arrCounter++;
    }
    return arrCounter;
}

console.log(`"arr" contain ${arrayLength(arr)} characters`);


const arraySum = arr =>{
    let sum = arr[0];
    for(let i=1; i< arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(arraySum(arr));


const arrayMulti = arr =>{
    let multi = arr[0];
    for(let i=1; i< arr.length; i++){
        multi *= arr[i];
    }
    return multi;
}

console.log(arrayMulti(arr));