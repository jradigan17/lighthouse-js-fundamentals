/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

var x = 60
while (x >= 0) {
    if (x !== 50 && x !== 31 && x !== 16 && x !== 10 && x !== 6 && x !== 0){
    console.log("T-" + x + " seconds");
    } else if (x === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (x === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");    
    } else if (x === 16) {
        console.log("Activate launch pad sound suppression system");    
    } else if (x === 10) {
        console.log("Activate main engine hydrogen burnoff system");    
    } else if (x === 6) {
        console.log("Main engine start");    
    } else if (x === 0) {
        console.log("Solid rocket booster ignition and liftoff!");    
    }
    x = x-1
}
    
