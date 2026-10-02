let firstName = "Mathien";
let middleName = "Hadji Ali";
let lastName = "Samad";
let username = "mathiensamad";
let course = "Bachelor of Science in Information Technology";
let university = "Mindanao State University";
let bio = "Learning JavaScript and building my programming skills.";

let fullName = `${firstName} ${middleName} ${lastName}`;
let firstCharacter = firstName[0];
let lastCharacter = lastName[lastName.length - 1];
let aliPosition = middleName.indexOf("Ali");
let javascriptPosition = bio.indexOf("JavaScript");


console.log(`
==================================================
                 USER PROFILE
==================================================

Name       : ${fullName}
Username   : @${username}
Course     : ${course}
University : ${university}

Bio:
"${bio}"

--------------------------------------------------

First Name   : ${firstName}
Middle Name  : ${middleName}
Last Name    : ${lastName}

First Character of First Name : ${firstCharacter}
Last Character of Last Name   : ${lastCharacter}

--------------------------------------------------

Position of "Ali" in Middle Name : ${aliPosition}
Position of "JavaScript" in Bio  : ${javascriptPosition}

==================================================
`)