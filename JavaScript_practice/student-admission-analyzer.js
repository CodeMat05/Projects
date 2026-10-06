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
let attendancePercent = (attendance / 100) * 100;
let highestScore = Math.max(mathScore, programmingScore);
let lowestScore = Math.min(mathScore, programmingScore);
let isCollege = age >= 18;
let passedAcademic = averageScore >= 75;
let goodAttendance = attendance >= 80;
let fullyPaid = amountPaid >= applicationFee;
let recommendationCheck = hasRecommendation == true;
let disciplinaryRecordCheck = hasDisciplinaryRecord == true;
let remainingFee = amountPaid - applicationFee;
let eligible = isCollege &&
               passedAcademic &&
               goodAttendance &&
               fullyPaid &&
               recommendationCheck &&
               !disciplinaryRecordCheck;
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
  studentPerformance = "Good";
} else {
  studentPerformance = "Needs Improvement"
}

// Information Technology → Computing Department
// Computer Science       → Computing Department
// Information Systems    → Information Systems Department
// Networking             → Network Administration Department

let department;

switch (preferredProgram) {
  case "Information Technology":
    department = "Computing Department";
    break;
  case "Computer Science":
    department = "Computing Department";
    break;
  case "Information Systems":
    department = "Information Systems Department";
    break;
  case "Networking":
    department = "Network Administration Department";
    break;
  default:
    department = "Unknown Program";
    break;
}

// ADMITTED → eligible
// CONDITIONAL ADMISSION → academic average is at least 75, but another requirement is missing
// REJECTED → academic average is below 75
let admissionStatus;

if (eligible) {
  admissionStatus = "ADMITTED";
} else if (averageScore >= 75) {
  admissionStatus = "CONDITIONAL ADMISSION";
} else {
  admissionStatus = "REJECTED";
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
Attendance         : ${attendancePercent}%

--------------------------------------------------
APPLICATION CHECK
--------------------------------------------------

College Age?        : ${isCollege}
Passed Academics?   : ${passedAcademic}
Good Attendance?    : ${goodAttendance}
Fee Fully Paid?     : ${fullyPaid}
Recommendation?     : ${recommendationCheck}
Disciplinary Record?: ${disciplinaryRecordCheck}

Remaining Fee      : ${remainingFee}

--------------------------------------------------
PROGRAM
--------------------------------------------------

Department         : ${department}

--------------------------------------------------
FINAL STATUS
--------------------------------------------------

Admission Status   : ${admissionStatus}
Eligible?          : ${eligible}

==================================================  
`)