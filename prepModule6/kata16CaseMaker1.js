const makeCase = function(input, casetype) {

  let string = "";

  const camelCase = function (input) {
    for(let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        string += input[i+1].toUpperCase();
        i += 1;
      } else {
        string += input[i].toLowerCase();
      };
    };
  };

  const pascalCase = function (input) {
    for(let i = 0; i < input.length; i++) {
      if(i === 0){
        string += input[i].toUpperCase();
        i +=1;
      };
      if (input[i] === " ") {
        string += input[i+1].toUpperCase();
        i += 1;
      } else {
        string += input[i].toLowerCase();
      };
    };
  };
  
  const snakeCase = function (input) {
    for(let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        string += "_";
      } else {
        string += input[i].toLowerCase();
      };
    };
  };

  const kebabCase = function (input) {
    for(let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        string += "-";
      } else {
        string += input[i].toLowerCase();
      };
    };
  };

  const titleCase = function (input) {
    for(let i = 0; i < input.length; i++) {
      if(i === 0){
        string += input[i].toUpperCase();
        i +=1;
      };
      if (input[i] === " ") {
        string += input[i] + input[i+1].toUpperCase();
        i += 1;
      } else {
        string += input[i].toLowerCase();
      };
    };
  };

  const vowelCase = function (input) {
    for(let i = 0; i < input.length; i++) {
      if (input[i] === "a" ||input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
        string += input[i].toUpperCase();
      } else {
        string += input[i].toLowerCase();
      };
    };
  };

  const consonantCase = function (input) {
    for(let i = 0; i < input.length; i++) {
      if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") {
        string += input[i].toUpperCase();
      } else {
        string += input[i].toLowerCase();
      };
    };
  };

  const upperCase = function (input) {
    for(let i = 0; i < input.length; i++) {
      string += input[i].toUpperCase();
    };
  };

  const lowerCase = function (input) {
    for(let i = 0; i < input.length; i++) {
      string += input[i].toLowerCase();
    };
  };

  if(Array.isArray(casetype)) {
    let order = [];
    const types = [["camel", "pascal", "snake", "kebab", "title"], ["vowel", "consonant"], ["upper", "lower"]];
    for(let y = 0; y < types.length; y++) {
      for(let x = 0; x < types[y].length; x++) {
        for(let j = 0; j < casetype.length; j++) {
          if(casetype[j] === types[y][x]) {
            order.push(casetype[j]); 
          };
        };
      };
    };

      for(let i = 0; i < order.length; i++) {
      if(i > 0) {
        input = string;
        string = ""; 
      };

      switch(order[i]) {
        case "camel" : 
          camelCase(input);
          break;
        case "pascal" : 
          pascalCase(input);
          break;
        case "snake" :
          snakeCase(input);
          break;
        case "kebab" :
          kebabCase(input);
          break;
        case "title" :
          titleCase(input);
          break;
        case "vowel" :
          vowelCase(input);
          break;
        case "consonant" :
          consonantCase(input);
          break;
        case "upper" :
          upperCase(input);
          break;
        case "lower" :
          lowerCase(input);
          break;
      };
    };

    } else {
      switch(casetype) {
        case "camel" : 
          camelCase(input);
          break;
        case "pascal" : 
          pascalCase(input);
          break;
        case "snake" :
          snakeCase(input);
          break;
        case "kebab" :
          kebabCase(input);
          break;
        case "title" :
          titleCase(input);
          break;
        case "vowel" :
          vowelCase(input);
          break;
        case "consonant" :
          consonantCase(input);
          break;
        case "upper" :
          upperCase(input);
          break;
        case "lower" :
          lowerCase(input);
          break;
    };
  };

  return string;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["vowel", "kebab"]));
console.log(makeCase("this is a string", ["snake", "consonant"]));
console.log(makeCase("this is a string", ["lower", "snake"]));
console.log(makeCase("this is a string", ["kebab", "vowel"]));