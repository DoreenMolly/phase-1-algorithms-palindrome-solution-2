  function isPalindrome(word) {
    for(let start = 0; start<word.length/2; start++){
      let end = word.length - 1 - start
      if(word[start] !== word[end]){
        return false;
      }
    }return true;
  }

/* 
  Add your pseudocode here
*/
//return false if letters don't match with their corresponding ends
//return true if all corresponding indices are equal 
/*
  Add written explanation of your solution here
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
