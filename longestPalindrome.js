/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const { isPalindrome } = require("./isPalindrome");
const str5 = "what up, daddy-o?";
const expected5 = "dad";

const str6 = "uh, not much";
const expected6 = "u";

const str7 = "Yikes! my favorite racecar erupted!";
const expected7 = "e racecar e";

const str8 = "a1001x20002y5677765z";
const expected8 = "5677765";

const str9 = "a1001x20002y567765z";
const expected9 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {
    let palindrome = ""
    for (let i = 0; i < str.length; i++) {
        
        
    }
}