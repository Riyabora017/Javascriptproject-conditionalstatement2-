//calculate final grade (A.B,C,DorE)for a student



var score = 90;
var grade;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'E';
}

console.log("Grade: " + grade);
