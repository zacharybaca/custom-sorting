
function ageSort(users) {
  //  for (let i = 0; i < users.length; i++) {
  //   //console.log('Compared User: ', users[i]);
  //   for (let j = i + 1; j < users.length; j++) {
  //     //console.log('Next User: ', users[j]);
  //     if (users[i].age > users[j].age) {
  //       [users[i], users[j]] = [users[j], users[i]];
  //     }
  //   }
  //  }
  //  return users.map((user) => user.firstName);
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {

  return arr.sort(function (a, b) {

    const isAEven = a % 2 === 0;
    const isBEven = b % 2 === 0;

    if (isAEven && !isBEven) {
      return 1;
    } else if (!isAEven && isBEven) {
      return -1;
    } else {
      return a - b;
    }

  });

  // let evenArray = [];
  // let oddArray = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 0) {
  //     evenArray.push(arr[i])
  //   } else {
  //     oddArray.push(arr[i]);
  //   }
  // }

  // let newArr = oddArray.sort((a, b) => a - b).concat(evenArray.sort((a, b) => a - b));
  // return newArr;
}

function validAnagrams(s, t) {

  const sArr = s
    .split('')
    .sort()
    .join('');

  const tArr = t
    .split('')
    .sort()
    .join('');

  return sArr === tArr;
}

function reverseBaseSort(arr) {

  return arr.sort(function (a, b) {

    if (a.length === b.length) {
      const greaterNum = (Number(a) > Number(b))
      if (greaterNum) return -1
      else return 1
    }
    return b - a;
  })

}


const arr1 = [11, 1, 101, 0, 10, 100];
const arr2 = [1, 45, 164, 6, 31, 90, 671];

console.log(reverseBaseSort(arr1));      // => [100, 101, 10, 11, 0, 1]
console.log(reverseBaseSort(arr2));      // => [164, 671, 31, 45, 90, 1, 6]



function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
