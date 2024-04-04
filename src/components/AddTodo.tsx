import { memo, useState, KeyboardEvent } from 'react';
import { TodoList } from '../helpers/types';
import { Form, Input, Button } from '../styled/add-todo';

type AddProps = {
    addNewTodo: (newTodo: TodoList) => void;
}

const AddTodo = memo(({ addNewTodo }: AddProps) => {
    const [newTodo, setNewTodo] = useState('');

    const handler = () => {
        console.log('AddTodo =>');
        addNewTodo({
            id: crypto.randomUUID(),
            text: newTodo,
            completed: false,
        });
        setNewTodo('');
    }

    const keyUpFunction = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log('keyUpFunction =>');
        
        if (event.key !== 'Enter') return;
        
        handler();
    }

    console.log('AddTodo');

    return (
        <Form>
            <Input 
                type="text" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyUp={keyUpFunction}
            />
            <Button onClick={handler}>Add item</Button>
        </Form>
    )
});

export default AddTodo;