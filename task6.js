const arr = [1, 1, 1, 1, 9]
const isSameElm = arr.every(item => item === arr[0])
console.log(isSameElm)
const res = new Set(arr).size === 1
console.log(res)