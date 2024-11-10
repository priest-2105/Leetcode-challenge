// 58. Length of Last Word
// Easy
// Topics
// Companies
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.




// SOLUTION 


var lengthOfLastWord = function(s) {
    // Trim leading and trailing spaces, then split by spaces.
    let sIndex = s.trim().split(' ').filter(word => word !== "");
    
    // Check the result of the split array
    console.log('sIndex:', sIndex);

    // Check if there's any valid word after trimming and splitting
    if (sIndex.length === 0) return 0; // Handle the case of an empty string or only spaces

    // Get the last word and return its length
    let lastWord = sIndex[sIndex.length - 1];
    console.log('Last word:', lastWord);
    
    return lastWord.length;
};

// Test cases
console.log(lengthOfLastWord("Hello World"));     // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
console.log(lengthOfLastWord(" "));               // Output: 0
