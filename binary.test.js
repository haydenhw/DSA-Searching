
const binarySearch = (array, target, start=0, end=array.length-1) => {
  const index = Math.floor((start + end) / 2)
  const value = array[index]

  if (target === value) {
    return index
  }

  if (target < value) {
    // value must be in first half of array
    return binarySearch(array, target, start, index - 1)
  } else {
    return binarySearch(array, target, index + 1, end)
  }
}



test('binary search', ()  => {
 const sortedNums =  [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
 expect(binarySearch(sortedNums, 8)).toBe(3)
})
