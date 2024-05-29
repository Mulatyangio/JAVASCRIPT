function compareFn(a, b) {
  if (a < b) {
    // a is less than b by some ordering criterion
    return -1;
  } else if (a > b) {
    //a is greater than b by the ordering criterion
    return 1;
  }
  // a must be equal to b
  return 0;
}

let myArr = [12, 22, 43, 11, 32, 12, 22, 323, 43, 12, 323, 500, 34];

console.log(myArr.sort(compareFn));

// other js aray hof - reduce, forEach, map, filter

//   write code to suggest names in a search feature
const names = [
  "albert",
  "jones",
  "emmanuel",
  "vitalis",
  "wendy",
  "Benaiah",
  "sandra",
  "brian",
  "joseph",
  "edwin",
];

function searchNames(names, input) {
  return names.filter(function fName(name) {
    if (name.startsWith(input)) {
      return true;
    }
    return false;
  });
}

console.log(searchNames(names, "al"));
// arrow functions -- a cleaner way of writing functions (without the function keyword) =>

const filterByAge = (people, input) =>
  people.filter((person) => (person.age > input ? true : false));

const people = [
  {
    name: "John",
    age: 22,
    ethnicity: "Luhya",
    gender: "Male",
  },
  {
    name: "Jane",
    age: 62,
    ethnicity: "Kalenjin",
    gender: "Female",
  },
  {
    name: "Kennedy",
    age: 59,
    ethnicity: "Meru",
    gender: "Male",
  },
  {
    name: "Esther",
    age: 50,
    ethnicity: "Luo",
    gender: "Female",
  },
  {
    name: "Bernard",
    age: 25,
    ethnicity: "Mijikenda",
    gender: "Male",
  },
  {
    name: "Joseph",
    age: 27,
    ethnicity: "Luhya",
    gender: "Male",
  },
  {
    name: "Sarah",
    age: 20,
    ethnicity: "Kalenjin",
    gender: "Female",
  },
  {
    name: "Sarah",
    age: 43,
    ethnicity: "Kalenjin",
    gender: "Female",
  },
  {
    name: "David",
    age: 33,
    ethnicity: "Kikuyu",
    gender: "Male",
  },
  {
    name: "James",
    age: 31,
    ethnicity: "Kisiĩ",
    gender: "Male",
  },
  {
    name: "Peter",
    age: 29,
    ethnicity: "Mijikenda",
    gender: "Male",
  },
  {
    name: "Catherine",
    age: 37,
    ethnicity: "Mijikenda",
    gender: "Female",
  },
  {
    name: "Michael",
    age: 34,
    ethnicity: "Kisiĩ",
    gender: "Male",
  },
  {
    name: "Sarah",
    age: 52,
    ethnicity: "Embu",
    gender: "Female",
  },
  {
    name: "Esther",
    age: 31,
    ethnicity: "Mijikenda",
    gender: "Female",
  },
  {
    name: "John",
    age: 55,
    ethnicity: "Luo",
    gender: "Male",
  },
  {
    name: "David",
    age: 44,
    ethnicity: "Kikuyu",
    gender: "Male",
  },
  {
    name: "Daniel",
    age: 20,
    ethnicity: "Kisiĩ",
    gender: "Male",
  },
  {
    name: "Joseph",
    age: 28,
    ethnicity: "Kalenjin",
    gender: "Male",
  },
  {
    name: "Peter",
    age: 26,
    ethnicity: "Meru",
    gender: "Male",
  },
];

console.log(filterByAge(people, 50));


const filterByGroup=(people,input)
people.filter((person) => (person.ethnicity > input ? true : false));
console.log(filterByGroup(people,"kalenjin"));
//use map method ,create a new array(with all people)to add prefix Mr or Ms on peoples names depending on their gender

//Write a function filterByGroup(Kalenjin),that takes in any ethnic group as input and return a list of people of that ethnic group,if none ,log that there are no people from the input ethnic group.
//find average age by ethnicity
//sort people by age with oldest first
//anonymus functions-- callback functions ,arrow function
