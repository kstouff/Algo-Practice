

const str3  = "hello";
const expected3 = "olleh";

const str4 = "hello world";
const expected4 = "olleh dlrow";

const str5 = "abc def ghi";
const expected5 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    result = ""

    tempStr = ""

    for (let i = 0; i <= str.length; i++) {
        const e = str[i];
        if(e === " " || i === str.length)
        {
            for (let j = tempStr.length - 1; j >= 0; j--) {
                const f = tempStr[j];
                result += f
            }
            result += " "
            tempStr = ""
        }
        else{
            tempStr += e
        }
        
        
    }
    console.log(result)


}

reverseWords(str3)
reverseWords(str4)
reverseWords(str5)