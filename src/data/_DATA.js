import {v4} from 'uuid';

const item = {
  id: v4(),
  name: 'Marchewka',
};
const item2 = {
  id: v4(),
  name: 'Ogórek',
};
const item3 = {
  id: v4(),
  name: 'Pietruszka',
};
const item4 = {
  id: v4(),
  name: 'Banan',
};

const Ingredients = {
  item, 
  item2, 
  item3, 
  item4,
};


export default Ingredients;