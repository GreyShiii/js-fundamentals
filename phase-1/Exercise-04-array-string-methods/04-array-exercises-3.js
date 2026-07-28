// Write code that:
// 1. Create a string: "laptop,mouse,keyboard,monitor"
// 2. Use split() to break it into array
// 3. Use map() to uppercase each item
// 4. Use join() to combine back with " | " separator
// 5. Log the result
// Example output: "LAPTOP | MOUSE | KEYBOARD | MONITOR"

const string = "laptop,mouse,keyboard,monitor";
const splittedString = string.split(",");
const mappingSplitted = splittedString.map((split) => split.toUpperCase());
const backToString = mappingSplitted.join(" | ");
console.log(backToString);