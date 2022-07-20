const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientList = [];

for (let i = 0; i < ingredients.length; i++) { 
  ingredientList[i] = document.createElement("li");
  ingredientList[i].innerText = ingredients[i];
  ingredientList[i].classList.add("item");

}
document.querySelector("#ingredients").append(...ingredientList)
