let userNum = +prompt('Число не равное нулю:')
if (isNaN(userNum) || userNum === 0 || typeof (userNum) !== 'number') {
  console.log('Ошибка')
} else {
  let numVariant = userNum % 2 === 0 ? 'чет' : 'нечет'
  console.log(`${userNum} является ${numVariant}ным`)
}