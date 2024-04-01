import { useState, Dispatch, SetStateAction, KeyboardEvent } from 'react';
import { TodoList } from '../helpers/types';
import { Form, Input, Button } from '../styled/add-todo';

type AddProps = {
    todoList: TodoList[];
    setTodoList: Dispatch<SetStateAction<TodoList[]>>
}

const AddTodo = (props: AddProps) => {
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        const generatedNewTodo:TodoList = {
            id: crypto.randomUUID(),
            text: newTodo,
            completed: false,
        }
        props.setTodoList([...props.todoList, generatedNewTodo]);
        setNewTodo('');
    }

    const keyUpFunction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            addTodo();
        }
    }

    return (
        <Form>
            <Input 
                type="text" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyUp={keyUpFunction}
            />
            <Button onClick={addTodo}>Add item</Button>
        </Form>
    )
}

export default AddTodo;