import React from 'react';
import Boards from '../Boards/Boards';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../Header/Header';
import MyRecipe from '../MyRecipe/MyRecipe';
const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Header/>
      <Route exact path="/" component={Boards} />
      <Route exact path="/myrecipe" component={MyRecipe} />
    </div>
  </BrowserRouter>
);

export default App;
