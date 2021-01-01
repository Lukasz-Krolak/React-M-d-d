import React from 'react';
import styles from './Home.scss';
import Board from '../../Board/Board';
import NewRecipe from '../../NewRecipe/NewRecipe';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
//import { connect } from 'react-redux';

class Home extends React.Component {

  //   static propTypes = {

  //   }
  
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className={styles.component}>
          <main className={styles.home}>
            <div className={styles.table}>
              <Board/>
            </div>
            <div className={styles.table}>
              <NewRecipe/>
            </div> 
          </main>
        </div>
      </DndProvider>
    );
  }
}

// function mapStateToProps({ingredients}){
//   console.log('inGreD',ingredients);
//   const inRecipe_ingredients = Object.keys(ingredients).filter((ingredient) => ingredients[ingredients].inRecipe == 'true');
//   const outRecipe_ingredients = Object.keys(ingredients).filter((ingredient) => !inRecipe_ingredients.includes(ingredient));

//   return{
//     inRecipe_ingredients,
//     outRecipe_ingredients,
//   };
// }

// export default connect(mapStateToProps)(Home);
export default (Home);


