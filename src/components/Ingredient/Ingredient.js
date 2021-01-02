import React from 'react';
import { useDrag  } from 'react-dnd';
//import { connect } from 'react-redux';
import { ingredients } from '../../utils/_DATA';
import { ItemTypes } from '../Constans/Constans';
// import { moveInRecipe } from '../../redux/ingredientRedux';



const Ingredient = props => {
  const [{isDragging}, drag] = useDrag ({
    item: {
      type: ItemTypes.INGREDIENT,
      
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const { brand } = ingredients;
  console.log('brand',brand);
  return(
    <div 
      ref={drag}
      opacity= {isDragging ? '0,5' : '1' }
    >
      <div>
        <p>test</p>
      </div>
      <div>{ brand }</div>
      <div>
        { console.log('propsy',props) }
      </div>
      <div>
        <p>qwerty</p>
      </div>
    </div>
  );
};

// export default connect()(DragSource(ItemTypes.INGREDIENT, ingredientSpec, collect)(Ingredient));
export default Ingredient;