function sumOfN(n) {
  let sum = 0;
  let i = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

function printMultiplicationTable(n) {
  let i = 1;
  let arr = [];
  while (i <= 10) {
    arr.push(`${n} * ${i} = ${n * i}`);
    i++;
  }
  return arr;
}

function countVowels(str) {
  let count = 0;
  let vowel = "aeiouAEIOU";
  for (const i of str) {
    if (vowel.includes(i)) {
      count++;
    }
  }
  return count;
}
