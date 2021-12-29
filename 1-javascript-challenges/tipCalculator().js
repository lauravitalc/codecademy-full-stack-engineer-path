// Write your function here:
let tipCalculator = (quality, total) =>  {
    if (quality === 'bad') {
      return total * .05
    } else if (quality === 'ok' ) {
      return total * .15
    } else if (quality === 'good') {
      return total * .20
    } else if (quality === 'excellent') {
      return total * .30
    } else {
      return total * 0.18
    }
  }
  console.log(tipCalculator('good', 100)) //should return 20
  
  console.log(tipCalculator('bad', 100))
  
  console.log(tipCalculator('excellent', 160))