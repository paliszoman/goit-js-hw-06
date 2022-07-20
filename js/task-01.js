let categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);

for (let i = 0; i < categoriesList.length; i++) {
    console.log(`Category: ${categoriesList[i].firstElementChild.innerText}`);
    const elementsNumbers = categoriesList[i].querySelectorAll("li");
    console.log(`Elements: ${elementsNumbers.length}`)
}

