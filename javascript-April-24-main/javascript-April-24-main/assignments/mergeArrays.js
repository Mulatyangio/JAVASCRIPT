// Write a function `mergeArrays(arr1, arr2)` that takes two arrays `arr1` and `arr2` and merges them into a single array, with the elements sorted in ascending order.

function mergeArrays(arr1, arr2){
    // merge
    // let finalArry = arr1.concat(arr2)
    // for(let index=0; index<arr2.length; index++){
    //     finalArry.push(arr2[index])
    //     console.log("looping" + index);
    // }
    // finalArry = finalArry.sort()
    // console.log(finalArry);
    //sort 
    // return merged array
    // method chaining
    return arr1.concat(arr2).sort()
}
 console.log( mergeArrays(["Red","Blue","`","yellow"],[23, 788,"purple"]) );
// 

// 17/05/2025 Date()
// 