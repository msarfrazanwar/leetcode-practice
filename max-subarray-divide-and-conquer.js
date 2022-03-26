 var performSearch = function(nums, target) {
    let res = maxSubArray(nums, 0, nums.length - 1);
    console.log(res);
};

function maxSubArray(nums, start, end) {
    if(start>end) return 0;
    if (start == end) return nums[start];
    let mid = ~~((start+end)/2) ;
    
    let leftSum = maxSubArray(nums, start, mid-1);
    let rightSum = maxSubArray(nums, mid+1, end);
    
    let crossingSum = 0, crossMax = 0;
    let l = mid - 1, r=mid;
    
    while (l >= 0) {
        crossingSum+= nums[l];
        if (crossingSum > crossMax) crossMax = crossingSum;
        l--;
    }
    
    crossingSum = crossMax;
    
    while (r < nums.length) {
        crossingSum+= nums[r];
        if (crossingSum > crossMax) crossMax = crossingSum;
        r++;
    }
    
    return Math.max(leftSum, rightSum, crossMax);
}

performSearch([-1, 3, 4, -5, 9, -2]);
