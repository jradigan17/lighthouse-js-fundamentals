/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
var facebookProfile = {
  name : "jr",
  friends : 20,
  messages : ["how are you", "what are you doing tonight?", "do you want to go to a movie"],
  postMessage : function (message) {
    facebookProfile.messages.push(message);
    return facebookProfile.messages;
  },
  deleteMessage : function (index) {
    facebookProfile.messages.splice(index, 1);
    return facebookProfile.messages;
  },
  addFriend : function () {
    return facebookProfile.friends += 1
  },
  removeFriend : function () {
    return facebookProfile.friends -= 1
  }
};

console.log(facebookProfile.postMessage("welcome to facebook"));
console.log(facebookProfile.deleteMessage(0));
console.log(facebookProfile.addFriend());