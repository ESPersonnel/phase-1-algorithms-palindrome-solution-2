function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split('').reverse().join('');
  return reversed === word;
}

/* 
  Add your pseudocode here
  Input: string
  Output: boolean
  Steps to solve the problem:
  1. reverse the string
  2. compare the reversed string to the original string
  3. return true if they are the same
  4. return false if they are not the same
*/

/*
  Add written explanation of your solution here
  I think the problem is that we need to reverse the string and compare it to the original string.
  We can use the split method to split the string into an array, and then reverse the array.
  We can then join the array back into a string.
  If the reversed string is the same as the original string, then we can return true.
  If the reversed string is not the same as the original string, then we can return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
