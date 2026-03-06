const lunches = ["Carapulcra", "Sopa Seca", "Tallarines Verdes", "Lomo Saltado", "Aji de Gallina"];

function addLunchToEnd(lunches, lunch) {
    lunches.push(lunch);
    console.log(`${lunch} added to the end of the lunch menu.`);
    return lunches;
}

function addLunchToStart(lunches, lunch) {
    lunches.unshift(lunch);
    console.log(`${lunch} added to the start of the lunch menu.`);
    return lunches;
}

function removeLastLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches to remove.");
    }else {
        const lunchItem = lunches.pop();
        console.log(`${lunchItem} removed from the end of the lunch menu.`)
    }

    return lunches;
}

function removeFirstLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches to remove.");
    }else {
        const lunchItem = lunches.shift();
        console.log(`${lunchItem} removed from the start of the lunch menu.`)
    }
    return lunches;
}

function getRandomLunch(lunches) {
    if(lunches.length === 0) {
        console.log("No lunches available.");
    }else {
        const randomIndex = Math.floor(Math.random() * lunches.length);
        const randomLunch = lunches[randomIndex];
        console.log(`Randomly selected lunch: ${randomLunch}`);
    }
}

function showLunchMenu(lunches) {
    if (lunches.length === 0) {
        console.log("The menu is empty.");
    }else {
        console.log(`Menu items: ${lunches.join(", ")}`);
    }
}

showLunchMenu(lunches);
addLunchToEnd(lunches, "Ceviche");
addLunchToStart(lunches, "Seco de Cabrito");
getRandomLunch(lunches);
removeLastLunch(lunches);
removeFirstLunch(lunches);
showLunchMenu(lunches);