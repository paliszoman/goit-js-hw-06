let counterValue = 0;
let counter = document.querySelector("span#value");
counter.textContent = `${counterValue}`;

let addOne=() => counter.textContent = `${counterValue+=1}`;
let increment = document.querySelector('[data-action="increment"]').addEventListener("click", addOne)

let minOne=() => counter.textContent = `${counterValue-=1}`;
let decrement = document.querySelector('[data-action="decrement"]').addEventListener("click", minOne)

