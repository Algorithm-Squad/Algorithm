const singleNonDuplicate = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (mid % 2 === 1) {
      mid--;
    }

    if (nums[mid] !== nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 2;
    }
  }
  return nums[left];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])); // 10
