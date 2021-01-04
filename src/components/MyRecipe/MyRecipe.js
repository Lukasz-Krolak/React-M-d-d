import React from 'react';
import Boards from '../Boards/Boards';

class MyRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
        
    passData = (passedData) => {
      this.setState({ data: passedData });
    };

    render() {
      return (
        <div>
          <Boards passData={this.passData} />
          <div> {this.state.data} </div>
        </div>
      );
    }
}
    

export default MyRecipe;