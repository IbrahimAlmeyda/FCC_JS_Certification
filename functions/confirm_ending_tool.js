function confirmEnding(str, target) {
    const targetLength = target.length;
    const strEnding = str.slice(-targetLength);
    return strEnding === target;
}

console.log(confirmEnding("I'll always be Ibrahim Almeyda", "Almeyda"));
