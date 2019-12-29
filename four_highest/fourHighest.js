/**
 * ***********************************
 *
 * @author Tom Herrmann
 * @date 12/23/2019
 * @description A function that takes a list of integers and returns the 4 highest in O(n) time. We'd like to see how you think about algorithms and data structures. So please use your own logic instead of calling out to libraries.
 *
 * ***********************************
 */

const fourHighest = (numsArray) => {
  // edge cases
  if (!Array.isArray(numsArray)) throw Error('Invalid input - must be an array of integers')
  if (!numsArray[0]) throw Error('Invalid input - must be an array of integers')

  // reduce input array down to the four highest values
  // set initial value to array of four -infinities for comparison 
  // to cover negatives 
  return numsArray.reduce((acc, curr) => {
    // edge case
    console.log('curr is a ', typeof curr)
    if (typeof curr !== 'number') throw Error('Invalid input - must be an array of integers')

    if (curr > acc[0]) {
      acc[3] = acc[2];
      acc[2] = acc[1];
      acc[1] = acc[0];
      acc[0] = curr
    }
    else if (curr > acc[1]) {
      acc[3] = acc[2];
      acc[2] = acc[1];
      acc[1] = curr
    }
    else if (curr > acc[2]) {
      acc[3] = acc[2];
      acc[2] = curr
    }
    else if (curr > acc[3]) acc[3] = curr
    return acc;
  }, [-Infinity, -Infinity, -Infinity, -Infinity])
}

module.exports = fourHighest;