let studentName = "Mathien Samad";
let age = 21;

let mathScore = 87;
let programmingScore = 92;
let attendance = 88;

let applicationFee = 500;
let amountPaid = 500;

let hasRecommendation = true;
let hasDisciplinaryRecord = false;

let preferredProgram = "Information Technology";

let averageScore = (mathScore + programmingScore) / 2;
let attendacePercent = (attendance / 100) * 100;
let highestScore = Math.max(mathScore, programmingScore);
let lowestScore = Math.min(mathScore, programmingScore);
let isCollege = age >= 18 ? true : false;
let passedAcademic = averageScore >= 75 ? true : false;
let goodAttendance

// 90–100 → Excellent
// 80–89  → Very Good
// 75–79  → Good
// Below 75 → Needs Improvement
let studentPerformance;

if (averageScore >= 90 && averageScore <= 100) {
  studentPerformance = "Excellent";
} else if (averageScore < 90 && averageScore >= 80) {
  studentPerformance = "Very Good";
} else if (averageScore < 80 && averageScore >= 75) {
  studentPerformance = " Good";
} else {
  studentPerformance = "Needs Improvement"
}

console.log(`
==================================================
       STUDENT ADMISSION ANALYZER
==================================================

Student Name       : ${studentName}
Age                : ${age}
Preferred Program  : ${preferredProgram}

--------------------------------------------------
ACADEMIC RESULTS
--------------------------------------------------

Math Score         : ${mathScore}
Programming Score  : ${programmingScore}
Average Score      : ${averageScore}
Highest Score      : ${highestScore}
Lowest Score       : ${lowestScore}
Performance        : ${studentPerformance}
Attendance         : ${attendacePercent}%

--------------------------------------------------
APPLICATION CHECK
--------------------------------------------------

College Age?       : ${isCollege}
Passed Academics?  : 
Good Attendance?   : 
Fee Fully Paid?    : 
Recommendation?    : 
Disciplinary Record?: 

Remaining Fee      : 0

--------------------------------------------------
PROGRAM
--------------------------------------------------

Department         : Computing Department

--------------------------------------------------
FINAL STATUS
--------------------------------------------------

Admission Status   : ADMITTED
Eligible?          : true

==================================================  
`)