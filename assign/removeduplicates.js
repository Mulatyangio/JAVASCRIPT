function removeDuplicates(nums){
    //create a new array
    //loop through nums array adding only new items to the new array
    //return final version of the new array
    let cleanArray=[nums[0]]
    for (let index = 1; index< nums.length; index++){
        if(!cleanArray.includes(nums[index])){
            cleanArray.push(nums[index])
    }
    }
     console.log(cleanArray);
     return cleanArray
}
removeDuplicates([12,22,12,33,22,18,99,87,18,99,99])