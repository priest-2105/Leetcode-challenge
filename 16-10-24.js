/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  
    let sum = 0;
  
    for (let i = 0; i < nums.length; i++ ){  
       if (nums[i] % 3 != 0){
        sum++
       }
    }   
    return sum;

    // switch (nums){
    //     case: nums % 3 === 0,
    //     sum += nums
    //     break;
    //     default  nums % 3 != 0,       
    //     continue
    // }
    // return sum
};



