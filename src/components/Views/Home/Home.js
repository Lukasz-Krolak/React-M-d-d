import React from 'react';
//import styles from './Home.scss';
import Board from '../../Board/Board';
import NewRecipe from '../../NewRecipe/NewRecipe';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

class Home extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array.isRequired,
  }
  
  render() {
    return (
      <Container>
        <main>
          <Board/>
          <NewRecipe/> 
        </main>
      </Container>
    );
  }
}

export default Home;


