function isOre(n){
  // ...
  var reciprocalSum = 0;
  var divisors = [];
  var num = n;

  // Find the divisors
  while (num > 0) {
    if (n % num === 0)
    	divisors.push(num);
    num--;
  }

  // Get the sum of the divisors recpricals
  divisors.forEach(function(divisor) {
  	reciprocalSum += 1/divisor;
  });

  var harmonicMean = divisors.length/reciprocalSum;

  if (harmonicMean.toFixed(4) % 1 === 0)
  	console.log(true);
  else
  	console.log(false);
}


isOre(6)
isOre(10)
isOre(28)
isOre(32)
console.log('should all be true')
isOre(1)
isOre(140)
isOre(270)
isOre(496)
isOre(672)
isOre(1638)
isOre(2970)