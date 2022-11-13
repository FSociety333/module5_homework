let str = 'Hello'
let reverseStr1 = str.split('').reverse().join('')
console.log(reverseStr1)
let reverseStr2 = ''
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr2 += str[i]
}
console.log(reverseStr2)