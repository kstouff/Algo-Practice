/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str6 = "abc123!!!ab"
const expected6 = "c123!ab"  //"abc123!"

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    tempArray = []
    result = ""
    for (let i = 0; i < str.length; i++) {
        const e = str[i];
        
        if(tempArray == "")
        {
            tempArray.push(e)
            continue
        }
        if(tempArray.includes(e))
        {
            continue
        }
        else{
            tempArray.push(e)
        }      
    }
    for (let i = 0; i < tempArray.length; i++) {
        result += tempArray[i]
        
    }
    console.log(result)


}

stringDedupe(str1)
stringDedupe(str2)
stringDedupe(str6)