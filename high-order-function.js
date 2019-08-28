const a = [1, 3, 4, 6, -3, 10, 56];
console.log(
  a.sort((num1, num2) => {
    return num2 - num1; //this will sort in descending order
  })
);

var members = [
  {
    id: 1,
    name: "sandy"
  },
  {
    id: 6,
    name: "sandy2"
  },
  {
    id: -1,
    name: "sandy3"
  },
  {
    id: 5,
    name: "sandy4"
  }
];

members.sort((member1, member2) => {
  return member1.name - member2.name;
});
console.log(members);

let arraytest = [100, 200, 300, 400];

const map1 = arraytest.map(num => {
  return num / 100;
});

console.log(map1);

const arr = [1, 2, 3, [4], [1, 4, 5, 6]];

const arr1 = arr.reduce((prev, curr) => {
  return prev.concat(curr);
}, []);
console.log(arr1);
