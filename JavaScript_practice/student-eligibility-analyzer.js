let studentName = "Mathien Samad";
let age = 21;
let quizScore = 82;
let examScore = 76;
let attendance = 88;
let assignmentsCompleted = 9;
let totalAssignments = 10;
let tuitionPaid = true;
let hasDisciplinaryRecord = false;

let averageScore = (quizScore + examScore) / 2;
let goodAttendace = attendance >= 85;
let assignmentComplete = assignmentsCompleted === totalAssignments;
let tuitionPaidCheck = tuitionPaid === true;
let hasDisciplinaryRecordCheck = hasDisciplinaryRecord === false;

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

Passed Academically?  :
Good Attendance?      :
Assignments Complete? : ${assignmentComplete}
Tuition Paid?         : ${tuitionPaidCheck}
Has Discipline Record?: ${hasDisciplinaryRecordCheck}

------------------------------------------------------------

FINAL STATUS

Eligible?            :
Student Level        :
Remaining Assignments:
============================================================    
`)