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