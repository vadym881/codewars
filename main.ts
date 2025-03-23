export const findOdd = (xs: number[]): number => {
  let result = [];
  const mappedObj = new Map();
  for (const num of xs) {
    if (!mappedObj.has(num)) mappedObj.set(num, 1);
    else {
      let counter = mappedObj.get(num);
      mappedObj.set(num, ++counter);
    }
  }
  const entries = mappedObj.entries();
  for (const entry of entries) {
    if (entry[1] % 2 !== 0) {
      result.push(entry[0]);
    }
  }
  if (result.length === 0) {
    throw new Error("Elements not found");
  }
  return result[0];
};

// const test = [1, 2, 1, 7, 8, 7];
// console.log(findOdd(test));
// const notOdd = [1, 1];
// console.log(findOdd(notOdd));

export function sumTwoSmallestNumbers(numbers: Array<number>): number {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);

export const findOdd1 = (xs: number[]): number => {
  return xs.find((a) => xs.filter((b) => b === a).length % 2 === 1) || 0;
};

export function xo(str: string): boolean {
  str = str.toLowerCase();
  const oLen = Array.from(str).filter((c) => c === "o").length;
  const xLen = Array.from(str).filter((c) => c === "x").length;
  return oLen === xLen;
  //   const x = [];
  //   const o = [];
  //   for (const char of str) {
  //     if (char === "x") x.push(char);
  //     if (char === "o") o.push(char);
  //   }
  //   if (x.length !== o.length) {
  //     return false;
  //   }
}

// console.log(xo("xxOo"));
// console.log(xo("ooom"));

export function getSum(a: number, b: number): number {
  const limits = [a, b];
  limits.sort((a, b) => a - b);
  const arr = [];
  for (let i = limits[0]; i <= limits[1]; i++) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a + b);
}

// console.log(getSum(0,-1))

export function narcissistic(value: number): boolean {
  const arr = value.toString().split("").map(Number);
  let sum = 0;
  arr.forEach((n) => (sum += Math.pow(n, arr.length)));
  return value === sum;
}

// console.log(narcissistic(8208));

// turn vowels into numbers
export function encode(string: string): string {
  const vowels = ["a", "e", "i", "o", "u"];

  const arr = Array.from(string).map((letter) => {
    const index = vowels.indexOf(letter.toLowerCase());
    return index !== -1 ? (index + 1).toString() : letter;
  });
  return arr.join("");
}

// console.log(encode("How are you today?"));

// turn numbers back into vowels
export function decode(string: string): string {
  const vowels = ["a", "e", "i", "o", "u"];

  return Array.from(string)
    .map((letter) => {
      const index = parseInt(letter, 10) - 1;
      const numbers = vowels.map((el) => vowels.indexOf(el) + 1);
      return numbers.includes(+letter) ? vowels[index] : letter;
    })
    .join("");
}

// console.log(decode("H4w 1r2 y45 t4d1y?"));

export function maxMultiple(divisor: number, bound: number): number {
  if (bound % divisor === 0) return bound;
  let multiple = bound;
  while (multiple % divisor !== 0) multiple -= 1;
  return multiple;
}

// console.log(maxMultiple(10, 50));
// console.log(maxMultiple(2, 7));

export const solve = (str: string): number =>
  Math.max(
    ...str
      .split(/[a-zA-Z]/)
      .filter((el) => el !== "")
      .map(Number)
  );

// console.log(solve("gh12cdy695m1"));

export function countLettersAndDigits(input: string): number {
  return input.replace(/[^A-Z0-9]/gi, "").length;
}

// console.log(countLettersAndDigits("n!!ice!!123"));

export const calc = (str: string): number => {
  const seven = 7;
  const one = 1;
  return (
    str
      .split("")
      .map((s) => s.charCodeAt(0))
      .join("")
      .split("")
      .filter((n) => +n === seven).length *
    (seven - one)
  );
};

// console.log(calc("ABC"));

export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  let sum = 0;
  classPoints.forEach((point) => (sum += point));
  return sum / classPoints.length < yourPoints;
}

// console.log(betterThanAverage([2, 3], 5));

export function alphanumeric(string: string): boolean {
  if (string.length === 0) return false;
  for (const letter of string) {
    if (!letter.match(/[a-zA-Z0-9]/)) return false;
  }
  return true;
}

export function abbreviate(str: string): string {
  const divisors = str.split(/[a-z\d]/i).filter((el) => el !== "");
  if (divisors.length === 0) {
    const len = str.length;
    if (len < 4) return str;
    else return `${str[0]}${len - 2}${str[len - 1]}`;
  }
  const uniqueDivisors = Array.from(new Set(divisors));
  const regex = new RegExp(uniqueDivisors.join("|"));
  const words = str.split(regex);
  const abbrs: string[] = [];
  for (const word of words) {
    const len = word.length;
    if (word !== "") {
      if (len < 4) {
        abbrs.push(`${word}${divisors[words.indexOf(word)]}`);
      } else {
        const divisor =
          divisors.length !== words.indexOf(word)
            ? divisors[words.indexOf(word)]
            : "";
        abbrs.push(`${word[0]}${len - 2}${word[len - 1]}${divisor}`);
      }
    }
  }
  return abbrs.join("");
}

//console.log(abbreviate("elephant-rides are really fun!"));
//console.log(abbreviate("internationalization"));
console.log(abbreviate("elephant-ride"));
