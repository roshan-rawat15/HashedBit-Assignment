const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map((student) => {
  const sum = student.scores.reduce((total, score) => total + score, 0);
  const average = sum / student.scores.length;
  return { name: student.name, average: average };
});

console.log(output);
