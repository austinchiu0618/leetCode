/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    let newArr = nums1.concat(nums2).sort(function(a, b) {
        return a - b;
      })
    let arrLen = newArr.length
    let avgArr = 0


    if (arrLen % 2 == 1) {
        avgArr = newArr[Math.round(arrLen / 2 - 1)]
    } else if (arrLen % 2 == 0) {
        avgArr = (newArr[arrLen / 2 - 1] + newArr[arrLen / 2]) / 2
    }

    return parseFloat(avgArr).toFixed(5)
};

// findMedianSortedArrays([1, 3], [2])
findMedianSortedArrays([3], [-2, -1])