import React from 'react';
import PropTypes from 'prop-types';

class Board extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
  }
  render() {
    const drop = e => {
      e.preventDefault();
      const card_id = e.dataTransfer.getData('card_id');

      const card = document.getElementById(card_id);
      card.style.display ='block';

      e.target.appendChild(card);
    };
    const dragOver = e => {
      e.preventDefault();
    };
    const {id, children} = this.props;
    return (
      <div
        id={id}
        onDrop={drop}
        onDragOver={dragOver}
      >
        <p>test board</p>
        { children }
      </div>
    );

  }
}
export default Board;