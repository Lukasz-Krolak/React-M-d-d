import React from 'react';
import Board from '../Board/Board.js';
import Card from '../Card/Card.js';
import styles from './App.scss';

function App () {
  return (
    <div className='App'>
      <main className={styles.component}>
        <Board id='board-1' className='board'>
          <Card id='card-1' className='card' draggable='true'>
            <p>skladnik1</p> 
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
