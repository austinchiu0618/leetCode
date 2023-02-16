var twoSum = function(nums, target) {
    let answer 
    for (let i = 0; i < nums.length; i++) {
        const j = target - nums[i]
        const arr = nums.slice(0, i)
        if(arr.indexOf(j) !== -1) {
            answer = [i, nums.indexOf(j)]
            break
        }
    }
    return answer
};
