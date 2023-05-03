function FruitEater() {
  var eaten ="";
  var appleTotal=0
  var pearTotal=0;
  
  function eat(userFruit){
    eaten =userFruit.toLowerCase();
    if (eaten=="apple"){
      appleTotal++;
    }
    if (eaten=="pear"){
      pearTotal++;
    }
  }
  function applesEaten(){
    return appleTotal;
  }
  function pearsEaten(){
    return pearTotal;
  }

  
  return{
    eat,
    applesEaten,
    pearsEaten,
  }
}