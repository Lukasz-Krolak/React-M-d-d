import React from 'react';
//import styles from './Home.scss';
import Board from '../../Board/Board';
import NewRecipe from '../../NewRecipe/NewRecipe';

class Home extends React.Component {

  static propTypes = {

  }
  
  render() {
    return (
      <div>
        <main>
          <Board/>
          <NewRecipe/> 
        </main>
      </div>
    );
  }
}

export default Home;


