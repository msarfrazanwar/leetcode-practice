var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let firstMap = twoSum(nums1, nums2);
    let res = 0;
    for(const i of nums3) {
        for(const j of nums4) {
            let temp = i + j;
            res += firstMap.get(-temp) || 0;
        }
    }    
    return res;
};

function twoSum(a, b) {
    let m = new Map();
  
    for(const i of a) {
        for(const j of b) {
            let temp = i + j;         
            m.has(temp) ? m.set(temp, m.get(temp)+1) : m.set(temp, 1);
        }
    }
    return m;
}
