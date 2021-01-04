/* eslint-disable no-undef */
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styles from './Boards.scss';
import _ from 'lodash';
import {v4} from 'uuid';

const item = {
  id: v4(),
  name: 'Marchewka',
};
const item2 = {
  id: v4(),
  name: 'Ogórek',
};
const item3 = {
  id: v4(),
  name: 'Pietruszka',
};
const item4 = {
  id: v4(),
  name: 'Banan',
};
function Boards () {
  const [state, setState] = useState({ 
    'Składnik':{
      title: 'Składniki',
      items: [item,item2,item3,item4],
    },
    'Nowy przepis':{
      title: 'Nazwa przepisu',
      items: [],
    },
  },
  );

  const handleDragEnd = ({destination, source}) => {
    console.log('from', source);
    console.log('to', destination);
    if (!destination) {
      return;
    }
    if (destination.index === source.index && 
      destination.droppableId === source.droppableId) {
      return;
    }
    console.log('aaaaa', [source.droppableId].items);
    //creating a copy of item removing it from state
    const itemCopy = {...state[source.droppableId].items[source.index]};
    setState(prev => {
      prev = {...prev};
      //remove from prev items array
      prev[source.droppableId].items.splice(source.index, 1);
      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy);
      return prev;
    });
  };
  return (
    <section className={styles.skeletor}>
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return(
            <div key={key} className={styles.column}>
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided) => {
                  return(
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={styles.droppablecol}
                    >
                      {data.items.map((el, index) => {
                        return( 
                          <Draggable key={el.id} index={index} draggableId={el.id}>
                            {(provided) => {
                              return(
                                <div 
                                  className={styles.item}  
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {el.name}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </section>
  );
}

export default Boards;
