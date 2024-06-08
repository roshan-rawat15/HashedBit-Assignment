const input = [
  {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  },
  {
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  },
  {
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  },
];

const output = input.map((studentObj) => {
  const studentName = Object.keys(studentObj)[0];
  const studentScores = Object.values(studentObj)[0];
  const totalScore = Object.values(studentScores).reduce(
    (acc, score) => acc + score,
    0
  );
  const averageScore = totalScore / Object.keys(studentScores).length;
  return { [studentName]: { average: averageScore } };
});

console.log(output);
