const studentsGradeA = [10, 9, 6, 8, 9, 1, 5, 7];
const studentsGradeB = [2, 5, 7, 1, -2];
const studentsGradeC = [10, 10, 10, 10, 9];
const studentsGradeD = [25, 75];

const arithmeticAverage = (...studentsGrade) => {
  const sumNotes = studentsGrade.reduce((initial, next) => initial + next);
  const numbersOfStudents = studentsGrade.length;
  const arithmeticAverage = sumNotes / numbersOfStudents;
  return arithmeticAverage;
};

document.querySelector("button").addEventListener("click", () => {
  console.clear();
  console.log(arithmeticAverage(...studentsGradeA));
  console.log(arithmeticAverage(...studentsGradeB));
  console.log(arithmeticAverage(...studentsGradeC));
  console.log(arithmeticAverage(...studentsGradeD));
});
