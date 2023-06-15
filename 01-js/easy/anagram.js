/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let hashMap = new Map();

  for(let i = 0; i < str1.length; i++){
    if(hashMap.has(str1[i])){
      hashMap.set(str1[i], hashMap.get(str1[i]) + 1);
    } else {
      hashMap.set(str1[i], 1);
    }
  }

  for(let i = 0; i < str2.length; i++){
    if(hashMap.has(str2[i])){
      hashMap.set(str1[i], hashMap.get(str1[i]) - 1); 
      if(hashMap.get(str1[i]) < 0){
        return false;
      }
    } else {
      return false;
    }
  }

  for (let value of map.values()){
    if(value > 0){
      return false;
    }
  }
  
  return true;
}

module.exports = isAnagram;
