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
Highest Score      : 92
Lowest Score       : 87
Performance        : Very Good
Attendance         : ${attendacePercent}%

--------------------------------------------------
APPLICATION CHECK
--------------------------------------------------

College Age?       : true
Passed Academics?  : true
Good Attendance?   : true
Fee Fully Paid?    : true
Recommendation?    : true
Disciplinary Record?: false

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