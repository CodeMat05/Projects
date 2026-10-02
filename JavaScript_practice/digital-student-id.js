let firstName = "Mathien";
let middleName = "Hadji Ali";
let lastName = "Samad";
let studentID = "202343080";
let course = "Bachelor of Science in Information Technology";
let school = "Mindanao State University";
let email = "mathien.samad@msu.edu.ph";

let fullName = `${firstName} ${middleName} ${lastName}`
let firstCharacterName = firstName[0];
let lastCharacterName = lastName[lastName.length - 1];
let firstCharacterId = studentID[0];
let lastCharacterId = studentID[studentID.length - 1];
let aliPosition = middleName.indexOf("Ali");
let itPosition = course.indexOf("Information");
let emailPosition = email.indexOf("msu");

console.log(`
============================================================
                    DIGITAL STUDENT ID
============================================================

Student ID : ${studentID}
Name       : ${fullName}
Course     : ${course}
School     : ${school}
Email      : ${email}

------------------------------------------------------------

IDENTIFICATION

First Name       : ${firstName}
First Character  : ${firstCharacterName}
Last Character   : ${lastCharacterName}

Student ID First Character : ${firstCharacterId}
Student ID Last Character  : ${lastCharacterId}

------------------------------------------------------------

STRING ANALYSIS

Position of "Ali"          : ${aliPosition}
Position of "Information"  : ${itPosition}
Position of "msu"          : ${emailPosition}

------------------------------------------------------------

"Student ID: ${studentID}"

============================================================
`)