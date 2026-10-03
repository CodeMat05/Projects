let studentID = "202343080";
let fullName = "Mathien Hadji Ali Samad";
let course = "Bachelor of Science in Information Technology";
let email = "mathien.samad@msu.edu.ph";
let statusStudent = "  ACTIVE STUDENT  ";

let trimStatus = statusStudent.trim();
let lengthID = studentID.length;
let firstCharacterID = studentID[0];
let lastCharacterID = studentID[studentID.length - 1];
let nameLength = fullName.length;
let firstCharacterName = fullName[0];
let lastCharacterName = fullName[fullName.length - 1];
let informationPosition = course.indexOf("Information");
let msuPosition = email.indexOf("msu");
let studentIncluded = fullName.includes("Student");
let first4ID = studentID.slice(0, 4);
let last3ID = studentID.slice(-3);
let extractAli = fullName.slice(-9, -6);
let extractUserName = email.slice(0, 13);
let firstCharacterIDCode = studentID.charCodeAt(0);
let codeToCharacter = String.fromCharCode(firstCharacterIDCode);
let uppercaseName = fullName.toUpperCase();
let lowercaseEmail = email.toLowerCase();


console.log(`
============================================================
                 STUDENT ID ANALYZER
============================================================

Student ID : ${studentID} 
Name       : ${fullName}
Course     : ${course}
Email      : ${email}
Status     : ${trimStatus}

------------------------------------------------------------

STRING ANALYSIS

ID Length              : ${lengthID}
ID First Character     : ${firstCharacterID}
ID Last Character      : ${lastCharacterID}

Name Length            : ${nameLength}
First Character        : ${firstCharacterName}
Last Character         : ${lastCharacterName}

------------------------------------------------------------

SEARCH

"Information" Position : ${informationPosition}
"msu" Position         : ${msuPosition}
"Student" Included?    : ${studentIncluded}

------------------------------------------------------------

EXTRACTION

First 4 ID Characters  : ${first4ID}
Last 3 ID Characters   : ${last3ID}
Name "Ali"             : ${extractAli}
Email Username         : ${extractUserName}

------------------------------------------------------------

CHARACTER CODES

ASCII Code of ID First Character : ${firstCharacterIDCode}
Character from ASCII Code        : ${codeToCharacter}

------------------------------------------------------------

FORMATTING

Uppercase Name       : ${uppercaseName}
Lowercase Email      : ${lowercaseEmail}
Clean Status         : ${trimStatus}

============================================================    
`)