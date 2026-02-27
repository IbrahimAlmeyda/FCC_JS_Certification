const email = "user@domain.org";

// Array Desctructuring
// function maskEmail(email) {
//     const [localPart, domain] = email.split("@");
//     const maskedLocalPart = localPart[0] + "*".repeat(localPart.length - 2) + localPart.slice(-1);
//     return maskedLocalPart + "@" + domain;
// }

// console.log(maskEmail(email));


function maskEmail(email) {
    const indexOfAt = email.indexOf("@");
    const localPart = email.slice(0, indexOfAt);
    const domain = email.slice(indexOfAt);
    const maskedLocalPart = `${localPart[0]}${"*".repeat(localPart.length - 2)}${localPart.slice(-1)}`;
    return maskedLocalPart + domain;
}

console.log(maskEmail(email));
