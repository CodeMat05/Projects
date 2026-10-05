let studentName = "Mathien Samad";
let age = 21;
let quizScore = 82;
let examScore = 76;
let attendance = 88;
let assignmentsCompleted = 9;
let totalAssignments = 10;
let tuitionPaid = true;
let hasDisciplinaryRecord = false;

let isCollege = age >= 18;
let averageScore = (quizScore + examScore) / 2;
let passedAcademically = averageScore >= 75;
let goodAttendace = attendance >= 85;
let completeAssignment = assignmentsCompleted === totalAssignments;
let tuitionPaidCheck = tuitionPaid === true;
let hasDisciplinaryRecordCheck = hasDisciplinaryRecord === true;
let remainingAssignment = totalAssignments - assignmentsCompleted
let eligible = isCollege && passedAcademically && goodAttendace && tuitionPaidCheck;

console.log(`
============================================================
              STUDENT ELIGIBILITY ANALYZER
============================================================

Student Name       : ${studentName}
Age                : ${age}

------------------------------------------------------------

ACADEMIC RESULTS

Quiz Score         : ${quizScore}
Exam Score         : ${examScore}
Average Score      : ${averageScore}
Attendance         : ${attendance}
Assignments        : ${assignmentsCompleted} / ${totalAssignments}

------------------------------------------------------------

ELIGIBILITY CHECK

Passed Academically?  : ${passedAcademically}
Good Attendance?      : ${goodAttendace}
Assignments Complete? : ${completeAssignment}
Tuition Paid?         : ${tuitionPaidCheck}
Has Discipline Record?: ${hasDisciplinaryRecordCheck}

------------------------------------------------------------

FINAL STATUS

Eligible?            : ${eligible}
Student Level        : ${isCollege}
Remaining Assignments: ${remainingAssignment}
============================================================    
`)