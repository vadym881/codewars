function getVowelsCount(str: string): number {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (const char of str) {
    if (vowels.includes(char)) count += 1;
  }
  return count;
}

// console.log(getVowelsCount("abracadabra"));

// export function findUniq(arr: number[]): number {
//   // Don't know how to solve
// }

// console.log(findUniq([1, 1, 1, 2, 1, 1]));

function tidyNumber(num: number): boolean {
  const arr = num.toString().split("").map(Number);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// console.log(tidyNumber(12));
// console.log(tidyNumber(9672));

export const pigIt = (a: string): string => {
  return a
    .split(" ")
    .map((word) => {
      const firstLetter = word[0];
      const rest = word.slice(1);
      const excludedChars = [
        "!",
        "?",
        ".",
        ",",
        ":",
        ";",
        "-",
        "—",
        "'",
        '"',
        "...",
      ];
      if (word.trim() && !excludedChars.some((char) => word.includes(char))) {
        return rest + firstLetter + "ay";
      }
    })
    .join(" ");
}; // Don't know how to solve "!" issue

// console.log(pigIt("Pig latin is cool"));
// console.log(
//   pigIt(" QXvxSay  AgUZMvVay   QOEmdrUlciVVhRKeZay JtUejugZSay SCThZrnjDCOway!")
// );

export const likes = (a: string[]): string => {
  if (a.length === 0) return "no one likes this";
  if (a.length === 1) return `${a[0]} likes this`;
  if (a.length === 2) return `${a[0]} and ${a[1]} like this`;
  if (a.length === 3) return `${a[0]}, ${a[1]} and ${a[2]} like this`;
  if (a.length >= 4)
    return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
  return "Invalid input";
};

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

function latestClock(a, b, c, d): string {
  const allovedHoursNumbers = [0, 1, 2, 3];
  const allovedMinutesNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let firstDigit;
  let secondDigit;
  let thirdDigit;
  let fourthDigit;
  let firstTwoDigits;
  if (allovedHoursNumbers.includes(a) && a < 3) {
    firstDigit = a;
    if (allovedHoursNumbers.includes(b) && b > c && b > d) {
      secondDigit = b;
      firstTwoDigits = `${firstDigit.toString() + secondDigit.toString()}`;
      if (c > d) {
        thirdDigit = c;
        fourthDigit = d;
        return `${firstDigit}${secondDigit}:${thirdDigit}${fourthDigit}`;
      }
      if (c < d) {
        thirdDigit = d;
        fourthDigit = c;
        return `${firstDigit}${secondDigit}:${thirdDigit}${fourthDigit}`;
      }
    }
    //   if (allovedHoursNumbers.includes(c) && c > b && c > d) {
    //     secondDigit = c;
    //     firstTwoDigits = `${firstDigit.toString() + secondDigit.toString()}`;
    //   }
    //   if (allovedHoursNumbers.includes(d) && d > b && d > c) {
    //     secondDigit = d;
    //     firstTwoDigits = `${firstDigit.toString() + secondDigit.toString()}`;
    //   }
    // }
    // if (allovedMinutesNumbers.includes(b) && a < 3) {
    //   firstDigit = b;
    // }
    // if (allovedMinutesNumbers.includes(c) && a < 3) {
    //   firstDigit = c;
    // }
    // if (allovedMinutesNumbers.includes(d) && a < 3) {
    //   firstDigit = d;
  }
  // return "00:00";
}

// console.log(latestClock(1, 9, 8, 3));

export function getDrinkByProfession(profession: string): string {
  profession = profession
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  switch (profession) {
    default:
      return "Beer";
    case "Jabroni":
      return "Patron Tequila";
    case "School Counselor":
      return "Anything with Alcohol";
    case "Programmer":
      return "Hipster Craft Beer";
    case "Bike Gang Member":
      return "Moonshine";
    case "Politician":
      return "Your tax dollars";
    case "Rapper":
      return "Cristal";
  }
}

// console.log(getDrinkByProfession("jabrOni"));
// console.log(getDrinkByProfession("scHOOl counselor"));
// console.log(getDrinkByProfession("prOgramMer"));
// console.log(getDrinkByProfession("bike ganG member"));
// console.log(getDrinkByProfession("poLiTiCian"));
// console.log(getDrinkByProfession("rapper"));
// console.log(getDrinkByProfession("pundit"));

export function duplicateCount(text: string): number {
  const seen: string[] = [];
  const duplicates = new Set();

  for (const char of text.toLowerCase()) {
    if (seen.includes(char)) {
      duplicates.add(char);
    }
    seen.push(char);
  }

  return duplicates.size;
}

// console.log(duplicateCount("Indivisibility"))

// export const digitalRoot = (n:number):number => {
//   const arr = n.toString().split('')
//   const length = arr.length
//   while (length !== 1) {

//   }
// };

// console.log(digitalRoot(456))

export function oddCount(n: number) {
  return Math.floor(n / 2);

  // let count = 0
  // let current = n - 1;
  // while (current >= 1) {
  //   if (current % 2 !== 0) count += 1;
  //   current -= 1;
  // }
  // return count
}

// console.log(oddCount(7))

export const digitalRoot = (n: number): number => {
  while (n >= 10) n = eval(Array.from(String(n), Number).join("+"));
  return n;
};

// console.log(digitalRoot(456))

export function isLeap(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// console.log(isLeap(1900));

export function mystery(): object {
  return { sanity: "Hello" };
}

// console.log(mystery())

// export const centuryFromYear = (year: number): number => {
//   return 1;
// };

export function vaporcode(str: string): string {
  return str.toUpperCase().split(" ").join("").split("").join("  ");
}

// console.log(vaporcode("Lets go to the movies"));
// console.log(vaporcode("Why isn't my code working?"));

export function noBoringZeros(n: number): number {
  if (n === 0) return n;
  let nToString = n.toString();
  const lastIndex = nToString.length - 1;
  while (nToString[lastIndex] === "0") nToString = nToString.slice(0, -1);
  return +nToString;
}

// console.log(noBoringZeros(1450));
// console.log(noBoringZeros(0));
// console.log(noBoringZeros(1050));
// console.log(noBoringZeros(960000));

export function gracefulTipping(bill: number): number {
  const tip = (bill / 100) * 15;
  if (tip < 10) return Math.round(tip);

  let roundTo = 5;
  while (tip >= roundTo * 10) {
    roundTo *= 10;
  }

  return Math.round(tip / roundTo) * roundTo;
}

// console.log(gracefulTipping(7)); // expected to be 9
// console.log(gracefulTipping(12)); // expected to be 15
// console.log(gracefulTipping(86)) // expected to be 100

export function makeUpperCase(str: string): string {
  return str.toUpperCase();
}

// console.log(makeUpperCase("1,2,3 hello world!"))

export function time(
  distance: number,
  boatSpeed: number,
  stream: String
): number {
  return distance / boatSpeed;
}

// console.log(time(24, 10, "Downstream 2"))

function transposeTwoStrings(arr: string[]) {
  const str1 = arr[0];
  const str2 = arr[1];
  const longestStr = Math.max(str1.length, str2.length);

  const formattedStr = [];
  for (let i = 0; i < longestStr; i++) {
    formattedStr.push(`${str1[i] ?? " "} ${str2[i] ?? " "}`);
  }

  return formattedStr.join("\n");
}

// console.log(transposeTwoStrings(["Hello", "World"]));
// console.log(transposeTwoStrings(["joey", "louise"]));
// console.log(transposeTwoStrings(["a", "cat"]));
// console.log(transposeTwoStrings(["cat", ""]));
// console.log(transposeTwoStrings(["!a!a!", "?b?b"]));

export function uniqueInOrder(
  iterable: string | (string | number)[]
): (string | number)[] {
  if (typeof iterable === "string") {
    iterable = Array.from(iterable);
  }

  return iterable.filter(
    (item, index) => index === 0 || item !== iterable[index - 1]
  );
}

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder("ABBCcAD"));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

export function amIAfraid(day: string, num: number): boolean {
  if (
    (day === "Monday" && num === 12) ||
    (day === "Tuesday" && num > 95) ||
    (day === "Wednesday" && num === 34) ||
    (day === "Thursday" && num === 0) ||
    (day === "Friday" && num % 2 === 0) ||
    (day === "Saturday" && num === 56) ||
    (day === "Sunday" && num === 666) ||
    (day === "Sunday" && num === -666)
  )
    return true;
  return false;
}

// console.log(amIAfraid("Monday", 13)); // false
// console.log(amIAfraid("Sunday", -666)); // true
// console.log(amIAfraid("Tuesday", 2)); // false
// console.log(amIAfraid("Tuesday", 965)); // true
// console.log(amIAfraid("Friday", 2)); // true

export function noSpace(x: string): string {
  let output = "";
  for (const char of x) if (char !== " ") output += char;
  return output;
}

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
// console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
// console.log(noSpace("8aaaaa dddd r     "));
// console.log(noSpace(""));

export function mango(quantity: number, price: number): number {
  // const freeMangoes = Math.floor(quantity / 3)
  // const paidMangoes = quantity - freeMangoes
  // return paidMangoes * price
  return (quantity - Math.floor(quantity / 3)) * price;
}

// console.log(mango(3, 3))
// console.log(mango(9, 5))

export function isHollow(x: number[]): boolean {
  let zeroStart = -1,
    zeroEnd = -1,
    zeroCount = 0;

  for (let i = 0; i < x.length; i++)
    if (x[i] === 0) {
      if (zeroStart === -1) zeroStart = i;
      zeroEnd = i;
      zeroCount++;
    }

  if (zeroCount < 3) return false;
  for (let i = zeroStart; i <= zeroEnd; i++) if (x[i] !== 0) return false;
  return zeroStart === x.length - 1 - zeroEnd;

  // let zeroStart = -1,zeroEnd = -1,zeroCount = 0;
  // for (let i = 0; i < x.length; i++) if (x[i] === 0) if (zeroStart === -1) {zeroStart = i; zeroEnd = i; zeroCount++;}
  // if (zeroCount < 3) return false;
  // for (let i = zeroStart; i <= zeroEnd; i++) if (x[i] !== 0) return false;
  // return zeroStart === x.length - 1 - zeroEnd;
}

// console.log(isHollow([-1, 0, 0, 0, 3]));
// console.log(isHollow([1, 0, 0, 0, 0]));

export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  // const sum1 = arr1.reduce((sum, num) => sum + num, 0);
  // const sum2 = arr2.reduce((sum, num) => sum + num, 0);
  // return sum1 + sum2

  const sumArray = (numbers: number[]) =>
    numbers.reduce((sum, num) => sum + num, 0);
  return sumArray(arr1) + sumArray(arr2);
};

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))

export const hasSurvived = (
  attackers: number[],
  defenders: number[]
): boolean => {
  if (attackers.length === 0) return true;
  if (defenders.length === 0) return false;

  let attackersSurviors = 0,
    defendersSurviors = 0;

  attackers.forEach((attacker, index) => {
    const defender = defenders[index];
    if (attacker > defender) attackersSurviors++;
    if (defender > attacker) defendersSurviors++;
  });

  if (defendersSurviors > attackersSurviors) return true;
  if (attackersSurviors > defendersSurviors) return false;

  return (
    defenders.reduce((sum, d) => sum + d, 0) >=
    attackers.reduce((sum, a) => sum + a, 0)
  );
};

// console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]));
// console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]));

export function collatz(n: number): number {
  const array = [n];
  while (n !== 1) array.push((n = n % 2 === 0 ? (n = n / 2) : (n = n * 3 + 1)));
  return array.length;
}

// console.log(collatz(20));
// console.log(collatz(15));

// export const average = (scores: number[]): number => +((scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(0));
export const average = (scores: number[]): number =>
  Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length);

// console.log(average([49,3,5,300,7]));
// console.log(average([90,98,89,100,100,86,94]))

export function checkLogs(log: string[]): number {
  const seconds = log.map((date) => {
    const [hh, mm, ss] = date.split(":").map(Number);
    return hh * 3600 + mm * 60 + ss;
  });

  let days = 1;
  for (let i = 1; i < seconds.length; i++) {
    if (seconds[i] <= seconds[i - 1]) days++;
  }

  return days;
}

// console.log(
//   checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"])
// );
// console.log(checkLogs(["12:00:00", "12:00:00", "00:00:00"]));
// console.log(
//   checkLogs(["00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"])
// );

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

// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages: number[]): number[] {
  const sortedAges = [...new Set(ages)].sort((a, b) => b - a);
  const maxAges = ages.filter((num) => num === sortedAges[0]);
  maxAges.push(sortedAges[1]);
  return maxAges.reverse();
}

// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]))
// console.log(twoOldestAges([79,14,63,10,82,94,21,41,28,78,49,85,96,42,96,77,77,13]))

export function meeting(s: string): string {
  return s
    .split(";")
    .map((name) => {
      const [firstName, lastName] = name.toUpperCase().split(":");
      return `(${lastName}, ${firstName})`;
    })
    .sort()
    .join("");
}

// console.log(
//   meeting(
//     "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
//   )
// );

export const cookingTime = (eggs: number): number => Math.ceil(eggs / 8) * 5;

// console.log(cookingTime(1625));

// variant 1
// export function sumDigits(n: number): number {
//   const digits = [];
//   for (const digit of n.toString()) {
//     if (digit === "-") continue;
//     digits.push(+digit);
//   }
//   return digits.reduce((sum, digit) => sum + digit, 0);
// }

// variant 2
export function sumDigits(n: number): number {
  return Math.abs(n)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + +digit, 0);
}

// console.log(sumDigits(-32));

export function solution(nums: number[]): number[] {
  if (nums.length === 0) return [];
  return nums.sort((a, b) => a - b);
}

// console.log(solution([1, 2, 10, 50, 5]));

export function numbersWithDigitInside(x: number, d: number): number[] {
  let count = 0;
  let sum = 0;
  let product = 1;
  for (let i = 1; i <= x; i++) {
    if (i.toString().includes(d.toString())) {
      count++;
      sum += i;
      product *= i;
    }
  }
  return count === 0 ? [0, 0, 0] : [count, sum, product];
}

// console.log(numbersWithDigitInside(11, 1));

export function powerOf4(n: any): boolean {
  return typeof n !== "number" || n <= 0
    ? false
    : Number.isInteger(Math.log(n) / Math.log(4));
}

// console.log(powerOf4(4));
// console.log(powerOf4(16));

export function hello(name: string = ""): string {
  return !name
    ? "Hello, World!"
    : `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
}

// console.log(hello());
// console.log(hello("johN"));
