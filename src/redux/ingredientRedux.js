export const RECEIVE_INGREDIENTS = 'RECEIVE_INGREDIENTS';
export const MOVE_INRECIPE = 'MOVE_INRECIPE';

export function receiveIngredients(ingredients){
  return{
    type: RECEIVE_INGREDIENTS,
    ingredients,
  };
}

export function moveInRecipe(ingredient_id){
  return{
    type: MOVE_INRECIPE,
    id: ingredient_id,
  };
}