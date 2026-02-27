let count = 0;

function cardCounter(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    } 

    if (count > 0) {
        return `${count} Bet`;
    }else {
        return `${count} Hold`;
    }
}

console.log(cardCounter(2));
console.log(cardCounter(3));
console.log(cardCounter(7));
console.log(cardCounter("K"));
console.log(cardCounter("A"));