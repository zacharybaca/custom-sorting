
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
  // Your code here
}

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
