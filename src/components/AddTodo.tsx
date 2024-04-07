import { memo, useState, KeyboardEvent } from 'react';
import { TodoList } from '../helpers/types';
import { Form, Input, Button } from '../styled/add-todo';

import ModalError  from './ModalError';

type AddProps = {
    addNewTodo: (newTodo: TodoList) => void;
}

const AddTodo = memo(({ addNewTodo }: AddProps) => {
    const [newTodo, setNewTodo] = useState('');
    const [isError, setIsError] = useState(false);

    const createTodo = () => {
        if (!newTodo) {
            setIsError(true);

            return;
        }

        addNewTodo({
            id: crypto.randomUUID(),
            text: newTodo,
            completed: false,
        });
        
        setNewTodo('');
    }

    const keyUpFunction = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        
        createTodo();
    }

    return (
        <>
            <Form>
                <Input 
                    type="text" 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyUp={keyUpFunction}
                />
                <Button onClick={createTodo}>Add item</Button>
            </Form>

            { isError && 
                <ModalError 
                    closeModal={() => setIsError(false)} 
                    textError='Note text is empty, enter text to create a new note.' /> 
            }        
            
        </>
    )
});

export default AddTodo;