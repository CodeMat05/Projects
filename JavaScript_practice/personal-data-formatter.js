let firstName = "Mathien";
let middleName = "Hadji Ali";
let lastName = "Samad";
let age = 21;
let studentID = "202343080";
let course = "Bachelor of Science in Information Technology";
let email = "  MATHIEN.SAMAD@MSU.EDU.PH  ";
let introduction = "I am currently learning JavaScript and improving my programming skills.";

let fullName = `${firstName} ${middleName} ${lastName}`;
let trimEmail = email.trim();
let nameLength = fullName.length;
let firstCharacterName = fullName[0];
let lastCharacterName = fullName[fullName.length - 1];
let first4CharacterID = studentID.slice(0,4);
let last3CharacterID = studentID.slice(-3);
let firstCharacterID = studentID[0];
let lastCharacterID = studentID[studentID.length - 1];
let cleanEmail = trimEmail.toLowerCase();
let emailUsername = cleanEmail.slice(0,13);
let domainUsername = cleanEmail.slice(-10);
let upperIntroduction = introduction.toUpperCase();
let lowerIntroduction = introduction.toLowerCase();

console.log(`
============================================================
                  STUDENT PROFILE REPORT
============================================================

Student ID : ${studentID}
Name       : ${fullName}
Age        : ${age}
Course     : ${course}
Email      : ${trimEmail}

------------------------------------------------------------

NAME ANALYSIS

Full Name          : ${fullName}
Name Length        : ${nameLength}
First Character    : ${firstCharacterName}
Last Character     : ${lastCharacterName}

------------------------------------------------------------

ID ANALYSIS

First 4 Characters : ${first4CharacterID}
Last 3 Characters  : ${last3CharacterID}
First Character    : ${firstCharacterID}
Last Character     : ${lastCharacterID}

------------------------------------------------------------

EMAIL ANALYSIS

Clean Email        : ${cleanEmail}
Username           : ${emailUsername}
Domain             : ${domainUsername}

------------------------------------------------------------

INTRODUCTION

Original           : ${introduction}
Uppercase          : ${upperIntroduction}
Lowercase          : ${lowerIntroduction}

============================================================    
`)