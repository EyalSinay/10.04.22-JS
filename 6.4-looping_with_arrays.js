const million = 1000000;
const worldPopulation = 7900 * million;

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}


let population = [9 * million, 60 * million, 67 * million, 18 * million];




const populationPercentages = popArr => {
    let percentages = [];
    for (let i = 0; i < popArr.length; i++) {
        percentages.push(percentageOfWorld1(popArr[i]))
    }
    return percentages;
}


console.log(populationPercentages(population));