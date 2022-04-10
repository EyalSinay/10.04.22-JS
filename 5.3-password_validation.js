// function that uses a if/else conditional expression:
const validPassword1 = password => {
    if(password.length > 7){
        return `strong`;
    }
    else{
        return `weak`;
    }
}


// function that uses a ternary conditional expression:
const validPassword2 = password => password.length > 7 ? `strong` : `weak`;


// function that uses a && logical operator:
// const validPassword3 = password => {
//     let lengthCheck = password.length > 7 && 
// }


// “advanced” password validation function:
const advancedValidPassword = password => password.length > 7 && password.toLowerCase().includes(password) === false ? `very strong` : password.length > 7 ? `strong` : `weak`;


console.log(advancedValidPassword(`abcdeFgh`));
console.log(advancedValidPassword(`abcdefgh`));
console.log(advancedValidPassword(`abcdefg`));