// Scramble memory cards
export default function scrambleArray(array: number[]) {
  const clonedArray = [...array]

  for (let i: number = clonedArray.length - 1; i > 0; i--) {
    console.log(i)
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const temp = clonedArray[i]
    clonedArray[i] = clonedArray[randomIndex]
    clonedArray[randomIndex] = temp
  }

  return clonedArray
}

/*
Input: array
Output: array but shuffled
Must not have duplicate values
*/

