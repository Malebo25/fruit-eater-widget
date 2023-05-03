const fruit = document.querySelector(".FruitTypeText");
const addFruit = document.querySelector(".addfruitBtn");

const addApple = document.querySelector(".appleTotal");

const addPear = document.querySelector(".pearTotal");




const fruitEaten = FruitEater()

addFruit.addEventListener('click', function () {
    fruitEaten.eat(fruit.value);
    addApple.innerHTML = fruitEaten.applesEaten();
    addPear.innerHTML = fruitEaten.pearsEaten();
    

    
});
 

