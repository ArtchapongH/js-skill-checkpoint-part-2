const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

// 1

let scoreMoreThan50 = students.filter((student)=>(student.score>50));

// 2

let addScore10Percent = scoreMoreThan50.map((student)=>(student.score=student.score*1.1));

// 3

let totAdjustedScores = addScore10Percent.reduce((acc_score,student_score)=>acc_score+student_score ,0);

// 4

console.log(`Total score is ${totAdjustedScores.toLocaleString()}`);

