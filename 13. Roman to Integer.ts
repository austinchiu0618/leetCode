function romanToInt(s: string): number {
  const strArr = s.split('')
  const roman:{[index: string]:number} = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let sum = 0
  for (let i = 0; i < strArr.length;) {
    const num = roman[strArr[i]]
    const nextNum = i === strArr.length - 1 ? 0 : roman[strArr[i + 1]]
    if (num - nextNum >= 0) {
      sum += num
      i += 1
    } else {
      sum += (nextNum - num)
      i += 2
    }
  }
  return sum
};
