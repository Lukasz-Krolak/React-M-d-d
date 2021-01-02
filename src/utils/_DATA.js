export let ingredients = {
  brand: 'Marchewka',
  Apple:{
    brand: 'Ogórek',
    inRecipe: 'false',
  },
  Samsung:{
    brand: 'Pietrusza',
    inRecipe: 'false', 
  },
  Hauwei:{
    brand: 'Banan',
    inRecipe: 'false',
  },
};
export function _getIngredients (){
  return new Promise((res) =>{
    setTimeout(() => res({...ingredients}), 1000);
  });
}
// export function _getIngredients (){
//     return new Promise((res, rej) =>{
//       setTimeout(() => res({...ingredients}), 1000);
//     });
//   }
export function setInRecipe({id, inRecipe}){
  return new Promise((res) =>{
    setTimeout(() =>{
      ingredients = {
        ...ingredients,
        [id]:{
          ...ingredients[id],
          inRecipe: inRecipe,
        },
      };
      res();
    }, 500);
  });
}