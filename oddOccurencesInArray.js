/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected4 = 1;

const nums2 = [5, 4, 5];
const expected5 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected6 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected7 = 1;

function oddOccurrencesInArray(nums) {
    
    obj = {}
    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];

        if(!obj.hasOwnProperty(e))
        {
            obj[e] = 1
        }
        else{
            obj[e] = obj[e] + 1
        }
        
    }
    for(const [key, value] of Object.entries(obj))
    {
        if(value % 2 === 1)
        {
            return key
        }
    }

}



// oddOccurrencesInArray(nums1)
// oddOccurrencesInArray(nums2)
console.log(oddOccurrencesInArray(nums1))
console.log(oddOccurrencesInArray(nums2))
console.log(oddOccurrencesInArray(nums3))
console.log(oddOccurrencesInArray(nums4))
// oddOccurrencesInArray(nums4)