/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  const str7 = "aaabbbaaa";
  const expected7 = "a3b3a3"
  

    
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs only if the
   * character occurs more than two time.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
  
  function encodeStr(str) { 
    let result = ""
    let tempCount = 1
    let tempChar
    if(str == result)
    {
        return result
    }
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[i + 1]){
            tempCount ++

        }
        else{
            result += str[i]
            if(tempCount >1 ){
                result += tempCount
            }
            tempCount = 1
        }
        
    }

    console.log(result)

  }

  encodeStr(str1)
  encodeStr(str2)
  encodeStr(str3)
  encodeStr(str4)
  encodeStr(str7)