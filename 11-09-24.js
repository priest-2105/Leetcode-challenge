// 2704. To Be Or Not To Be
// Easy
// Companies
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.






// CHALLENGE 

//  @param {string} val
//   @return {Object}



var expect = function(val) {

    return  {
     toBe :  (value) => {
         // return value;
         if ( val === value) { return true }
         if ( val !== value) { throw new Error ('Not Equal')}
     },
     notToBe : (value) => {
         // return value;
         if ( val !== value) { return true}
         if ( val === value) { return 'Equal'}
     }
     }


};

//  expect(5);

expect(5).toBe(5)
expect(5).toBe(5); 
expect(5).notToBe(5); 