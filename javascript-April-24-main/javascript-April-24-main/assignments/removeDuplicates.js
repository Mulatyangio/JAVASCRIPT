// Write a function `removeDuplicates(nums)` that takes an array of numbers `nums` and removes any duplicate numbers, returning a new array without duplicates.

function removeDuplicates(nums){
    // create a new array
    // loop through nums array 
    // for each item in the nums array, check if it already exist in the new array
    // if not, add it to the new array else skip the number
    // return final version of new array
    let cleanArray = [ nums[0] ] // first item in nums array
    for(let index = 1; index<nums.length; index++){

        if(!cleanArray.includes(nums[index])){
            cleanArray.push(nums[index])
        }

    }
    console.log(cleanArray);
    return cleanArray
}

removeDuplicates([ 12,22,43,11,32,12,22,323,43,12,323,500,34 ])


console.log( new Set([ 12,22,43,11,32,12,22,323,43,12,323,500,34 ]) );