import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';


class Header extends React.Component {

  render() {
    return (
      <header className={styles.component}>
        <nav>
          <NavLink exact to='/' activeClassName='active'>Dodaj przepis</NavLink>
          <NavLink exact to='myrecipe' activeClassName='active'>Twoje przepisy</NavLink>
            
        </nav>
      </header>
    );
  }
}

export default Header;