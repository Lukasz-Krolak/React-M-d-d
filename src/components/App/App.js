import React from 'react';
// import Home from '../Views/Home';
// import MyRecipe from '../Views/MyRecipe';
// import styles from './App.scss';
import {BrowserRouter} from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <p>123</p>
        {/* <main className={styles.component}>
          <Route exact path="/" component={Home} />
          <Route exact path="/myrecipe" component={MyRecipe} />
        </main> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
