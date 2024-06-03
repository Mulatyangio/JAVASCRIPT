function removeDuplicates(nums){
    let cleanArray=[...new Set(nums)]
    return cleanArray
}
console.log(removeDuplicates([1,2,3,2,2,4,5,6]));
