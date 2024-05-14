import { useCallback, useEffect, useState } from 'react';
import { TodoList, ActionsType } from '../helpers/types';

import Item from './Item';
import AddTodo from './AddTodo';
import EmptyList from './EmptyList';
import Tabs, { tabStructure } from './Tabs';

let withoutSorting:TodoList[] = [];

const TodoApp = ({ isDownCompleted }: {isDownCompleted: boolean}) => {
    const [todoList, setTodoList] = useState<TodoList[]>([]);
    const [actveTab, setActveTab] = useState<number>(1);

    useEffect(()=> {
        setTodoList(todos => setCompletedInDown(todos))
    }, [isDownCompleted]);

    const setCompletedInDown = (todos: TodoList[]) => {
        if(!isDownCompleted) 
            return [...withoutSorting];

        withoutSorting = [...todos];

        return [
            ...todos.filter(item => !item.completed), 
            ...todos.filter(item => item.completed)
        ]
    }

    const addNewTodo = useCallback((newTodo: TodoList) => {
        setTodoList(todos => [...todos, newTodo]);

        //if (isDownCompleted) setCompletedInDown()
    }, []);

    const itemActions = useCallback((
        typeAction: ActionsType, 
        id: string, 
        value?: string
    ) => {
        switch(typeAction) {
            case 'toggle': 
                setTodoList(todos => 
                    todos.map(item => 
                        item.id !== id ? item : { ...item, completed: !item.completed }
                    ));

                break;

            case 'delete': 
                setTodoList(todos => 
                    todos.map(item => 
                        item.id !== id ? item : {...item, isDeleted: true}
                    ));

                break;

            case 'edit': 
                setTodoList(todos => 
                    todos.map(item => 
                        item.id !== id ? item : {...item, text: value || ''}
                    ));

                break;

            default:
                alert( 'Нет таких значений' );
        }
    }, []);

    const findItemsWithTabId = (tabId: number, todoList: TodoList[]) => tabStructure.find((tab) => tab.id === tabId)?.filters(todoList);

    const renderItemsWithTabs = (tabId: number, todoList: TodoList[]) => {
        const items = findItemsWithTabId(tabId, todoList);
        
        if (!items?.length) return <EmptyList /> 

        return items.map((todo: TodoList) =>  
            <Item 
                key={todo.id} 
                item={todo} 
                itemActions={itemActions} />
        );
    };

    return (
        <>
            <AddTodo addNewTodo={addNewTodo}/>
            
            <Tabs 
                actveTab={actveTab}
                setActveTab={setActveTab} />
                
            <div>
                {
                    renderItemsWithTabs(actveTab, todoList)
                }
            </div>
        </>
    )
}

export default TodoApp;