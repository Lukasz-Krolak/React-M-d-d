import React, { Component } from 'react';
//import { connect } from 'react-redux'
import Ingredient from '../Ingredient/Ingredient';

class Board extends Component {
  render(){
    return(
      <div>
        <h1>Składniki</h1>
        <div>
          <Ingredient/>
        </div>
      </div>
    );
  }
}

// function mapStateToProps({ingredients}){

//   return{
//     ingredients,
//   }
// }

//export default connect(mapStateToProps)(Board);
export default Board;