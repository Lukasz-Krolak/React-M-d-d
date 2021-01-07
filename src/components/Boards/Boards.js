/* eslint-disable no-undef */
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styles from './Boards.scss';
import _ from 'lodash';
import Ingredients from '../../data/_DATA';
import Button from '../Button/Button';
//import connect from 'react-redux';
//export const NewRecipe = {state};
//console.log('constNewrecipe',NewRecipe);

function Boards () {
  const [state, setState] = useState({ 
    Ingred:{
      title: 'Składniki',
      items: [Ingredients.item, 
        Ingredients.item2, 
        Ingredients.item3, 
        Ingredients.item4],
    },
    NewRecipe:{
      title: 'Nazwa przepisu',
      items: [],
    },
  });

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
  console.log('state',state);
  console.log('nazwaaaa',state['Nowy przepis']);
  return (
    <section>
      <div className={styles.skeletor}>
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
      </div>
      <Button>OK</Button>
    </section>
  );
  
}
export default Boards;