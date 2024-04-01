import { useState } from 'react';
import styled from 'styled-components';

import { TodoList, ActionsType } from '../helpers/types';
import TodoItem from './TodoItem';
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
        setTodoList(changesList);
    }

    const deleteTodo = (id: string) => {
        const changesList = todoList.filter(item => item.id !== id);
        
        setTodoList(changesList);

    }

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
                { todoList.map((todo: TodoList) => 
                    <TodoItem key={todo.id} item = {todo} itemActions={itemActions} />) 
                } 
            </Grid>
        </>
    )
}

export default TodoApp;