import React from 'react';
import Boards from '../Board/Boards';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import Header from '../Header/Header';
import MyRecipe from '../MyRecipe/MyRecipe';
const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Header/>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Boards} />
        <Route exact path="/myrecipe" component={MyRecipe} />
      </AnimatedSwitch>
    </div>
  </BrowserRouter>
);

export default App;
