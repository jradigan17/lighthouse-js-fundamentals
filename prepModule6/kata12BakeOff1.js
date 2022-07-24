// From EJ
// kata12-thebakeoff.js
// 2022.06.09
// https://flex-web.compass.lighthouselabs.ca/activities/108
//

//
// input is bakery A items, bakery B items (both as arrays) and recipe list as list of objects wit h single item name
// array of ingredient needed
// we need to find 

const chooseRecipe = function(bakeryA, bakeryB, recipes) 
{
  // loop thru the recipes we've been given
  // pull ingredients and check ea bakery for a match

  for (aRecipe of recipes)
  {
    // console.log(aRecipe.name); // DEBUG
    // console.log(aRecipe.ingredients); // DEBUG

    if( checkRecipe(bakeryA,aRecipe.ingredients) && checkRecipe(bakeryB,aRecipe.ingredients))
    {
      // console.log(aRecipe.name+" match");
      return(aRecipe.name);
    }
  }
  return "error";
}


// submit array of bakery items and recipe items - return TRUE if a match
function checkRecipe(theBakery,theIngredients)
{
  // each of these is an array, just return a TRUE if we have matches
  // this is just a 2D array now
  // outer loop is required ingredients
  // inner loop is each bakery
  let returnValue=false;
  theIngredients.forEach((ingredientItem) =>
  {
    theBakery.forEach((bakeryItem) => 
    {
      // console.log('ingredient: |'+ingredientItem+'| / bakery item: |'+bakeryItem+'|'); // DEBUG
      if (ingredientItem === bakeryItem) 
      { 
        // console.log("MATCHED ingredient: "+ingredientItem+' to bakery item:'+bakeryItem); // DEBUG
        returnValue=true;
      }
    });
  });
  return returnValue;
}







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