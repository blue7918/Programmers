function solution(nums) {
    var answer = 0;
    let type = new Set(nums);
    return type.size > (nums.length/2) ? (nums.length/2) : type.size;
}