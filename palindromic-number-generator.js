let results = {};
let count = 0
function palindromicNumberGenerator(num) {
  let reverse = parseFloat(num.toString().split('').reverse().join(''))
  if(num == reverse){
    results.value = num
    results.steps = count
  }else{
    num = reverse + num
    count++
    palindromicNumberGenerator(num)
  }
  count = 0
  return results
}

module.exports = palindromicNumberGenerator;
