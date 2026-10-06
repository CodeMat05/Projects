const maskEmail = (email) => {
    let atPosition = email.indexOf("@");
    let extractEmail = email.slice(0, atPosition);
    let replaceEmail = extractEmail[0] + ("*").repeat(extractEmail.length - 2)  
                       + extractEmail[extractEmail.length - 1];
    let domainEmail = email.slice(atPosition, email.length);
    return replaceEmail + domainEmail;
}

let email = "mathien.samad@msumain.edu.ph";

console.log(maskEmail(email));

let email2 = "roronoazoro@gmail.com";

console.log(maskEmail(email2));
