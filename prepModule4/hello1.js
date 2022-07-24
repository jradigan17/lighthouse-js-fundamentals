const names = ["Caliban", "Miranda", "Ferdinand"];

const sayHello = function (names) {
  let greet = "";
  for (let i = 0; i < names.length; i++) {
    greet += "Hello " + names[i] + "\n";
  }
  return greet;
}
console.log(sayHello(names));
