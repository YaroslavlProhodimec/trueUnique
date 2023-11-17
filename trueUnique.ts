// let arr = ["anb", "bna"];
//
// const x = (input) => {
//   let mapHash = {};
//   input.map((el) => (mapHash[el.split("").sort()] = el));
//   return Object.values(mapHash);
// };
//
// console.log(x(arr));

let arr = [1111, 3, 3, 7, 7, 81, 4, 133];

// const findSum = (input) => {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     sum += input[i];
//   }
//   return sum;
// };
// console.log(findSum(arr));
//
// console.log(eval(arr.join("+")));

// const maxChar = (input) => {
//   // let max = 0;
//   // for (let i = 0; i < input.length; i++) {
//   //   if (max < input[i]) {
//   //     max = input[i];
//   //   }
//   // }
//   // return max;
//   // Math.max(...input);
// };
// console.log(maxChar(arr));

let users = [
  { name: "Jonh Doe", age: 20 },
  { name: "Alex", age: 10 },
];

// const sort = (input) => {
//   for (let i = 0; i < input.length; i++) {
//     let char = input[i].age;
//     if (char > input[i + 1]?.age) {
//       let tmp = input[i];
//       input[i] = input[i + 1];
//       input[i + 1] = tmp;
//     }
//   }
//   return input;
// };
// console.log(sort(users));

// users.sort((a, b) => {
//   return a.name.localeCompare(b.name);
// });

// const bubble = (input) => {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input.length - 1 - i; j++) {
//       if (input[j] < input[j + 1]) {
//         let tmp = input[j];
//         input[j] = input[j + 1];
//         input[j + 1] = tmp;
//       }
//     }
//   }
//   return input;
// };
//
// console.log(bubble(arr));
// let array = [7, "correct", 0, false, 9, NaN, ""];
//
// const sort = (input) => {
//   let notFalsy = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!!array[i]) {
//       notFalsy.push(array[i]);
//     }
//   }
//   return notFalsy;
// };
// console.log(sort(array));
// console.log(x("red.fast.fancy.car", { red: { slow: "something" } }));

const sum = (n) => {
  console.log(n);
  return function (a) {
    return sum(a + n);
  };
};
let result = sum(5);
console.log(result, "result");
console.log(sum(5));
console.log(sum(5)(4));
console.log(sum(5)(3)(3)(3));
let obj1 = {
  foo: "foo",
  bar: "bar",
};
let obj2 = {
  bar: "foo",
  some: "some",
};

// const insertionObj = (input1, input2) => {
//   let keysObj = Object.keys(input1);
//   let newObj = { ...input1 };
//   keysObj.forEach((el) => {
//     return (newObj[el] = input2[el] ? input2[el] : newObj[el]);
//   });
//   return newObj;
// };
//
// console.log(insertionObj(obj1, obj2));

const mergeSameKeysOfObjects = (obj1, obj2) => {
  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
};
// console.log(mergeSameKeysOfObjects(obj1, obj2));
let arr3 = [6.1, 4.2, 6.3];

const groupBy = (input, func) => {
  let hashMap = {};

  input.map(
    (el) =>
      (hashMap[func(el)] = hashMap[func(el)]
        ? [...hashMap[func(el)], el]
        : [el]),
  );

  return hashMap;
};

console.log(groupBy(arr3, Math.ceil));
console.log(groupBy(arr3, Math.floor));

let str1 = "abcdef";
let str2 = "abcadef";
let str3 = "abccdef";
let str4 = "abcddef";

const unique = (str) => {
  let hashMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (hashMap[char]) {
      return false;
    } else {
      hashMap[char] = true;
    }
  }
  return true;
};

console.log(unique(str1));
console.log(unique(str2));
console.log(unique(str3));
console.log(unique(str4));

const trueUnique = (str1) => {
  return new Set(str1).size === str1.length;
};
console.log(trueUnique("abcade"));

// const flatten = (arr) => {
//   let resultArray = [];
//
//   function rekursia(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       // console.log(i, "i");
//       let char = arr[i];
//       // console.log(char, "char");
//       if (Array.isArray(arr)) {
//         // console.log(Array.isArray(arr), "Array.isArray(arr)");
//         rekursia(char);
//       } else if (typeof arr === "number") {
//         resultArray.push(arr);
//       }
//     }
//
//     // if (typeof arr === "number") {
//     //   resultArray.push(arr);
//     // }
//     return resultArray;
//   }
//
//   return rekursia(arr);
// };
// console.log(flatten([[1], [[2, 3], [[[4]]]]]));
const flatten = (arr) => {
  let resultArray = [];

  function rekursia(arr) {
    for (let i = 0; i < arr.length; i++) {
      let char = arr[i];
      // console.log(char, "char");
      if (Array.isArray(char)) {
        // console.log(Array.isArray(char), "Array.isArray(char)");
        rekursia(char);
      } else if (typeof char === "number") {
        // console.log(typeof char === "number", 'typeof char === "number"');
        resultArray.push(char);
      }
    }
    return resultArray;
  }

  return rekursia(arr);
};

console.log(flatten([[1], [[2, 3], [[[4]]]], [[[[[5]]]]]]));
// function removeDupes(str) {
//   let newStr = str.split("");
//   console.log(newStr);
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] === newStr[i + 1]) {
//       newStr.splice(i, 1);
//       i--;
//     }
//   }
//   return newStr.join("");
// }

function removeDupes(str) {
  let hashMap = {};

  for (let i = 0; i < str.length; i++) {
    hashMap[str[i]] = hashMap[str[i]] ? hashMap[str[i]] + 1 : 1;
  }
  return String(Object.keys(hashMap));
}

console.log(removeDupes("abcd"));
console.log(removeDupes("abbbcd"));
console.log(removeDupes("abccccd"));
console.log(removeDupes("eeedafllqw"));

// const originalArray = [1, 2, 3, 4, 5];

// const newArray = originalArray.slice(2, 3);

// console.log(newArray); // Вывод: [3]

console.log(String(Array.from(new Set("eeedafllqw"))));
console.log(Array.from(new Set("eeedafllqw")).join());

// : "Нахождение элемента с максимальной частотой " +
// "в массиве с учетом возращения первого элемента в случае отсутствия максимальной частоты".

const find = (arr) => {
  let hashMap = {};
  let maxFreq = 0;
  let maxFreqStr = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;

    if (hashMap[char] > maxFreq) {
      maxFreq = hashMap[char];
      maxFreqStr = char;
    }
  }
  return maxFreqStr;
};

console.log(find(["a", "b", "c", "c", "c", "d", "e"]));
console.log(find(["abc", "def", "abc", "def", "abc"]));
console.log(find(["abc", "def"]));
console.log(find(["a", "b", "c", "c", "c", "d", "e"]));
const areAnagrams = (str1, str2) => {
  const normalizeString = (str) => str.split("").sort().join("");

  const normalizedStr1 = normalizeString(str1);
  const normalizedStr2 = normalizeString(str2);

  return normalizedStr1 === normalizedStr2;
};

const areAnagramsTwo = (str1, str2) => {
  return (str1 + str1).includes(str2) && str1.length === str2.length;
};

console.log(areAnagrams("javascript", "scriptjava")); // Вывод: true
console.log(areAnagrams("javascript", "scripjava")); // Вывод: false
console.log("---------");
console.log(areAnagramsTwo("javascript", "scriptjava")); // Вывод: true

console.log(areAnagramsTwo("javascript", "scripjava")); // Вывод: false
console.log("New TASKS");

function arraySubset(source, subset) {
  if (source.length < subset.length) {
    return false;
  }

  let hashMap = {};

  for (let i = 0; i < source.length; i++) {
    let char = source[i];
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }
  console.log(hashMap, "hashMap");

  for (let i = 0; i < subset.length; i++) {
    let char = subset[i];
    let count = hashMap[char];
    if (count && count > 0) {
      hashMap[char] -= 1;
    } else {
      return false;
    }
  }
  // console.log(hashMap, "hashMap");
  return true;
}
function arraySubset(source, subset) {
  if (source.length < subset.length) {
    return false;
  }

  for (let i = 0; i < subset.length; i++) {
    const index = source.indexOf(subset[i]);
    if (index === -1) {
      return false;
    }
    delete source[index];
  }
  return true;
}
console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 1]), "myOne"); // ьг
console.log(arraySubset([1, 2, 1], [1, 2]), "myTwo"); // ьг

console.log(arraySubset([1, 2], [1, 2, 7])); // -> false
console.log(arraySubset([1, 2], [1, 5, 3])); // -> false
console.log(arraySubset([1, 2], [1, 3])); // -> false
console.log(arraySubset([7, 1, 2], [1, 2, 7])); // -> false
console.log("NEW TASKS");
function allAnagrams(array) {
  let hashMap = {};
  console.log(array[0].split("-"), "split(-)");
  console.log(array[0].split(" ").join(""), ".split(\" \").join('').11111");
  console.log(array[0].split(" ").join(" "), ".split(\" \").join('').7777");
  console.log(array[0].split(" ").join("+"), ".split(\" \").join('').9999");
  console.log(array[0].split(" ").join(), ".split(\" \").join('').33333");
  console.log(array[0].split(), "split()");
  console.log(array[0].split(""), 'split("")');
  console.log(array[0].split().join(), "split().join()");
  console.log(array[0].split("").join(""), "split().join()");
  // console.log(array[0].split().sort().join(""));
  array.forEach((el) => {
    hashMap[el.split("").sort().join("")] = true;
  });
  return Object.keys(hashMap).length < 2;
}

console.log(allAnagrams(["abcd", "bdac", "cabd"])); // true
console.log(allAnagrams(["abcd", "bdXc", "cabd"])); // false
