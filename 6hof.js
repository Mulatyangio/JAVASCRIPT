function compareFn(a,b){
    if(a<b){
        return -1;
    }
    if (a>b){
        return 1;
    }

    return 0;
}



let myArray=[12,22,12,33,323,22,18,99,87,18,99,99]
console.log(myArray.sort(compareFn ));



//other js array hof- reduce, forEach, map, Filter

//write code to suggest names in a search feature

const names=["Albert","John","Vitalis","Emmanuel","Benaiah","Jones","Sophie","Wendy","Boaz","Mulatya"]

const result = names.filter(function fNames(name){
    if(name.includes("e")){
        return true
    }
    return false
})

console.log(result);
//arrow functions-- a cleaner way of writing a function (without using the function keyword)(=>)

const filterByAge=(people)=>{
    people.filter()
}
