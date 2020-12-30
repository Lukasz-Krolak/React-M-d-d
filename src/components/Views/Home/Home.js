import React from 'react';
import styles from './Home.scss';
import Board from '../../Board/Board';
import NewRecipe from '../../NewRecipe/NewRecipe';

class Home extends React.Component {

  //   static propTypes = {

  //   }
  
  render() {
    return (
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
    );
  }
}

export default Home;


