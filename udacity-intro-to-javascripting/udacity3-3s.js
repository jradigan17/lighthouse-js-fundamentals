
// change the value of `musicians` to test your conditional statements
var musicians = 0;

// your code goes here
if (musicians <= 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else if (musicians >= 5) {
    console.log("this is a large group");
}