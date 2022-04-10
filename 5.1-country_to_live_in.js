const countryToLiveIn = (language, isIsland, population, country) => {
    if(typeof isIsland !== "boolean"){
        return `Island's argument value should be true or false.`
    }
    if(typeof population !== "number"){
        return `population's argument value should be an integer.`
    }
    if(typeof country !== "string"){
        return `country should be a string of a country.`
    }
    if(typeof language !== "string"){
        return `Language should be a string.`
    }

    if(language === `english` && population < 50000000 && isIsland === false){
        return `You should live in ${country}.`
    }else{
        return `${country} does not meet your criteria.`
    }

}


let finland = countryToLiveIn(`Finnish`, true, 5536146, `Finland`);

console.log(finland);