/**
 * Computes the difference between two array references.
 * @name diff
 * @param {[]} firstArray
 * @param {[]} secondArray
 * @returns {[]} returns an array representing the difference between the two arrays
 * @example
 *  diff([1,2,3], [1,2,3,4,5]) // => [4,5]
 */
export function diff(firstArray, secondArray) {
  return firstArray.concat(secondArray).filter(val => {
    return !(firstArray.includes(val) && secondArray.includes(val));
  });
}
