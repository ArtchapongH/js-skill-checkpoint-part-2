const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้

// 1 

let allPeople = [...techupPeople, ...techcoolPeople];

console.log(allPeople);

// 2

let lessThan20People = allPeople.filter((person)=>(person.age<20));

console.log(lessThan20People);
