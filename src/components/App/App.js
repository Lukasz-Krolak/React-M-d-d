import React from 'react';
import Home from '../Views/Home/Home';
import MyRecipe from '../Views/MyRecipe/MyRecipe';
import styles from './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <main className={styles.component}>
          <Route exact path="/" component={Home} />
          <Route exact path="/myrecipe" component={MyRecipe} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
