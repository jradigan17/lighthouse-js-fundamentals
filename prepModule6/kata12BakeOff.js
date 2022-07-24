const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let listA = [];
  // Find what recipes have an ingredient from Bakery A
  for(let i = 0; i < recipes.length; i++) {
    let tmp = recipes[i];
    let ingredient = tmp.ingredients;
    for(let j = 0; j < ingredient.length; j++) {
      for(let x = 0; x < bakeryA.length; x ++) {
        if(bakeryA[x] === ingredient[j]) {
          listA.push(tmp);
        };
      };
    };
  };

  // From the recipes that have an ingredient from Bakery A - Find what recipes have an ingredient from Bakery B
  for(i = 0; i < listA.length; i++) {
    let tmp = listA[i];
    let ing = tmp.ingredients;
    for(j = 0; j < ing.length; j++) {
      for(x = 0; x < bakeryB.length; x ++) {
        if(bakeryB[x] === ing[j]) {
          return tmp.name;
        };
      };
    };
  };
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));