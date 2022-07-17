const sayHello = function () {
  console.log("Hello, world");
}
sayHello();

const sayHello = function (names[]) {
  let greeting = ""
  for (let i = 0, i < names.length; i++) {
    greeting += "Hello" + names[i] + \n;
  }
  return greeting
}
sayHello("Caliban", "Miranda", "Ferdinang");