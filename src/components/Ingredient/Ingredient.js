// import React, { Component } from 'react';
// import { DragSource } from 'react-dnd';
// import { connect } from 'react-redux';

// import { ItemTypes } from '../Constans/Constans';
// import { moveInRecipe } from '../../redux/ingredientRedux';

// // phone DnD spec
// const ingredientSpec = {
//   beginDrag(props){
//     return{
//       name: props.brand,
//       id: props.id,
            
//     };
//   },
//   endDrag(props, monitor, component){
//     if (monitor.didDrop()){
//       const dragItem = monitor.getItem();
//       const dropResult = monitor.getDropResult();           
//       console.log('You dropped ', dragItem.name, ' into '+ dropResult.name);
//       // Move action goes here
//       props.dispatch(moveInRecipe(dragItem.id));
//     } else {
//       return;
//     }
//   },
// };

// // ingredient DragSource collect
// let collect = ( connect, monitor ) => {
//   return{
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging(),
//   };
// };

// class Ingredient extends Component{
//   render(){
//     const { brand } = this.props;
//     const { isDragging, connectDragSource } = this.props;

//     const opacity = isDragging? 0.4: 1;
//     const style={
//       opacity: opacity,
//     };
//     const ingredientClass = isDragging? 'ui card ingredient drag': 'ui card ingredient';
//     return connectDragSource(
//       <div className={ingredientClass} style={style}>
//         <div className="content">
//           <div className="ingredient-name">{ brand }</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default connect()(DragSource(ItemTypes.INGREDIENT, ingredientSpec, collect)(Ingredient));