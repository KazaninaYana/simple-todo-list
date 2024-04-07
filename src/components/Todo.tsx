import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { TodoList, ActionsType } from '../helpers/types';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';


export const Grid = styled.div`
    margin-top: 2.6rem;
`;

const TodoApp = () => {
    const [todoList, setTodoList] = useState<TodoList[]>([]);

    const addNewTodo = useCallback((newTodo: TodoList) => 
        setTodoList(todos => [...todos, newTodo]
    ), []);

    const itemActions = useCallback((typeAction: ActionsType, id: string) => {
        switch(typeAction) {
            case 'toggle': 
                setTodoList(todos => 
                    todos.map(item => item.id !== id ? item : {...item, completed: !item.completed})
                );
                break;
            case 'delete': 
                setTodoList(todos => todos.filter(item => item.id !== id));
                break;

            default:
                alert( 'Нет таких значений' );
        }
    }, [])

    return(
        <>
            <AddTodo addNewTodo={addNewTodo}/>
                
            <Grid>
                { 
                    todoList.map((todo: TodoList) => 
                        <TodoItem key={todo.id} item={todo} itemActions={itemActions} />) 
                } 
            </Grid>
        </>
    )
}

export default TodoApp;