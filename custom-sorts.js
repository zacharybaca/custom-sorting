
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

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      console.log('Arr: ', arr);
    }

  }
  arr.sort(function (a,b) {
    
  })
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

console.log(oddEvenSort([5, 4, 7, 2, 9, 8, 1, 6, 3]))
function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

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
