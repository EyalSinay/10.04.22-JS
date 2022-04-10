const people = ["Greg", "Mary", "Devon", "James"];

for(let i=0; i<people.length; i++){
    console.log(people[i]);
}

people.shift();

// console.log(people);

people.pop();

// console.log(people);

people.unshift(`Matt`);

// console.log(people);

people.push(`Eyal`);

// console.log(people);

for(let i=0; i<people.length; i++){
    console.log(people[i]);
    if(people[i] === "Mary"){
        break
    }
}

let people2 = people.slice(2);

// console.log(people2);

console.log(people.indexOf("Mary"));

console.log(people.indexOf("foo"));

people.shift();
people.pop();
people.unshift(`Greg`);
people.push(`James`)

// console.log(people);

people.splice(2, 1, `Elizabeth`, `Artie`);

// console.log(people);

let withBob = people.concat('Bob');


console.log(withBob);