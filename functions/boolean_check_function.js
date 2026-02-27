function booWho(value) {
    // Just other way to solve the same problem, but less efficient.
    // if(value === true || value === false) {
    //     return true;
    // }

    if (typeof value === "boolean") {
        return true;
    }

    return false;
}

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(5));
console.log(booWho(""));
