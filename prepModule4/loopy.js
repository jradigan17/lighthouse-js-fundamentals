let y = ""
for (let x = 100; x <= 200; x++){
  y = x % 3 === 0 ? x % 4 === 0 ? "LoopyLighthouse" : "Loopy" : x % 4 === 0 ? "Lighthouse" : x;
  console.log(y);
}