/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected2 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, string>} obj An object with string keys and string values.
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
    newObj = {}
    for(const [key, value] of Object.entries(obj))
    {
        newObj[value] = key
    }
    console.log(newObj)
}

invertObj(obj1)


// create a function that takes in a dictionary (input_dict)
// create an output variable = {}
// loop through dictionary w/ key val pairs
    // key == name
    // output[val] = key
// return our output