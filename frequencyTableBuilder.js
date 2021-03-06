
/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

const arr4 = ["hello", "world", "hello", "World"];
const expected8 = {
    hello: 2,
    world: 1,
    World: 1
}


/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {
    let newObj = {}
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if(newObj.hasOwnProperty(e))
        {
            newObj[e] = newObj[e] +1
        }
        else{
            newObj[e] = 1
        }

    }
    console.log(newObj)
}

frequencyTableBuilder(arr3)