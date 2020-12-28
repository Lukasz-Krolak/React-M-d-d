import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component { 
    static propTypes = {
      id: PropTypes.string,
      children: PropTypes.node,
      //draggable: PropTypes.bool,
    }
    render() {
      const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
          target.style.display = 'none';
        },0);
      };

      const dragOver = e => {
        e.stopPropagation();
      
      };
      const {id, children} = this.props;
      return (
        <div
          id={id}
          draggable="true"
          onDragStart={dragStart}
          onDragOver={dragOver}
        >
          {children}
        </div>
      );
    }
}
export default Card;