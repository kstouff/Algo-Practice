/* 
  String Decode  
*/

const str5 = "a3b2c1d3";
const expected5 = "aaabbcddd";

const str6 = "a3b2c12d10";
const expected6 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) { 
    let result = "" 
    let tempNumber = "0"
    let tempChar

    for (let i = 0; i < str.length; i++) {
        if(result == "")
        {
            tempChar == str[i]
        }
        
        if(Number.isInteger(parseInt(str[i + 1])) == true)
        {
            tempNumber += str[i + 1]
        }
        else {
            let num = parseInt(tempNumber)
            let tempAddedToResult = tempChar * num
            result += tempAddedToResult 

        }
        console.log(result)

        }
        
    }

    decodeStr(str5)
    decodeStr(str6)


module.exports = { decodeStr };