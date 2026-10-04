let employeeName = "  aLeXANdEr mOrGaN  ";
let employeeID = "EMP-2026-0847";
let department = "information technology";
let email = "  ALEX.MORGAN@COMPANY.COM  ";
let phone = "+63-917-555-0182";
let statusEmployee = "  active employee  ";
let description = "Employee works with database systems and develops web applications.";

let cleanName = employeeName.trim().toLowerCase();
let upperDepartment = department.toUpperCase();
let cleanEmail = email.trim().toLowerCase();
let cleanStatus = statusEmployee.trim().toUpperCase();
let nameLength = cleanName.length;
let firstCharacterName = cleanName[0];
let lastCharacterName = cleanName[cleanName.length - 1];
let alexFound = cleanName.includes("alex");
let prefixID = employeeID.slice(0, 3);
let yearID = employeeID.slice(4, 8);
let noID = employeeID.slice(-4);
let firstCharacterID = employeeID[0];
let lastCharacterID = employeeID[employeeID.length - 1];
let lengthID = employeeID.length;
let emailUsername = cleanEmail.slice(0, 11);
let emailDomain = cleanEmail.slice(-11);
let emailLength = cleanEmail.length;
let atPosition = cleanEmail.indexOf("@");
let upperDescription = description.toUpperCase();
let lowerDescription = description.toLowerCase();
let lengthDescription = description.length;
let databaseFound = description.includes("database");
let webFound = description.includes("web");

console.log(`
============================================================
                    DATA ANALYSIS REPORT
============================================================

EMPLOYEE INFORMATION

Employee ID    : ${employeeID}
Name           : ${cleanName}
Department     : ${upperDepartment}
Email          : ${cleanEmail}
Phone          : ${phone}
Status         : ${cleanStatus}

------------------------------------------------------------

NAME ANALYSIS

Clean Name     : ${cleanName}
Name Length    : ${nameLength}
First Character: ${firstCharacterName}
Last Character : ${lastCharacterName}
"Alex" Found?  : ${alexFound}

------------------------------------------------------------

ID ANALYSIS

Full ID        : ${employeeID}
Prefix         : ${prefixID}
Year           : ${yearID}
Employee No.   : ${noID}
First Character: ${firstCharacterID}
Last Character : ${lastCharacterID}
ID Length      : ${lengthID}

------------------------------------------------------------

EMAIL ANALYSIS

Clean Email    : ${cleanEmail}
Username       : ${emailUsername}
Domain         : ${emailDomain}
Email Length   : ${emailLength}
"@" Position   : ${atPosition}

------------------------------------------------------------

DESCRIPTION ANALYSIS

Original           : ${description}
Uppercase          : ${upperDescription}
Lowercase          : ${lowerDescription}
Description Length : ${lengthDescription}
"database" Found?  : ${databaseFound}
"web" Found?       : ${webFound}

============================================================    
`)