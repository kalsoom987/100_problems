function romanToInt(roman) {
  // Map Roman symbols to their values
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    let current = values[roman[i]];
    let next = values[roman[i + 1]];

  
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}


console.log(romanToInt("III"));     
console.log(romanToInt("IV"));      // 4
console.log(romanToInt("IX"));      // 9
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994
