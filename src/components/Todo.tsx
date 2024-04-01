import { useState, useCallback } from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';

import { TodoList, ActionsType } from '../helpers/types';
import Item from './TodoItem';
import AddTodo from './AddTodo';


export const Grid = styled.div`
    margin-top: 2.6rem;
`;

const TodoApp = () => {
    const [todoList, setTodoList] = useState<TodoList[]>([]);

    const toggleChecked = (id: string) => {
        const changesList = todoList.map(item => {
            return (item.id === id) ?
                { ...item, completed: !item.completed } :
                item;
        });
        console.log(changesList);
        
        setTodoList(changesList);
      // setTodoList((prevCards: TodoList[]) =>
      //   //update(prevCards, { id: { $merge: { completed: !prevCards[id].completed } } })
      //   //update(prevCards, { [id]: { $toggle } });
      // )
    }

    const deleteTodo = (id: string) => {
        setTodoList(todoList.filter(item => item.id !== id));
    }

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      const chLisct = (prevCards: TodoList[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as TodoList],
        ],
      });
      console.log(chLisct);
      
      setTodoList(chLisct);
      }, [])

    const renderCard = useCallback(
      (todo: TodoList, index: number) => {
        return (
          <Item 
            key={todo.id} 
            id={todo.id}
            index={index}
            item = {todo} 
            moveCard={moveCard}
            itemActions={itemActions} />
        )
      },
      [],
    )

    const itemActions = (typeAction: ActionsType, id: string) => {
        switch(typeAction) {
            case 'toggle': 
                toggleChecked(id);
                break;
            case 'delete': 
                deleteTodo(id);
                break;

            default:
                alert( 'Нет таких значений' );
        }
    }

    return(
        <>
            <AddTodo 
                todoList={todoList}
                setTodoList={setTodoList} />
                
            <Grid>
                    { 
                      todoList.map((todo, i) => renderCard(todo, i))
                    } 
            </Grid>
        </>
    )
}

export default TodoApp;