import { memo, useState, useCallback, useRef } from 'react';
import { TodoList, ActionsType } from '../../helpers/types';
import { FaCheckSquare, FaRegSquare , FaTrash, FaCheck }from 'react-icons/fa';
import { RowItem, Name, Actions, Edit } from '../../styled/elements';
import { Input } from '../../styled/common';

type ItemProps = {
    item: TodoList,
    itemActions: (typeAction: ActionsType, id: string, value?: string) => void,
}

const TodoItem = memo(({ item, itemActions }: ItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const completeEdit = () => {
        itemActions('edit', item.id, inputRef.current?.value);
        setIsEditing(false);
    };

    const Icons = useCallback(() => {
        if (isEditing) {
          return <FaCheck size={24} onClick={completeEdit} />;
        }

        if (item.completed) {
            return <>
                <FaCheckSquare 
                    size={24} 
                    onClick={() => itemActions('toggle', item.id)}/>
                <FaTrash size={24} onClick={() => itemActions('delete', item.id)} /> 
            </>
        }

        return <>
            <FaRegSquare 
                size={24} 
                onClick={() => itemActions('toggle', item.id)} />
            <FaTrash size={24} onClick={() => itemActions('delete', item.id)} /> 
        </>
      }, [isEditing, item.completed]);

      console.log(item);
      

    return (
        <RowItem>
            {
                isEditing ? 
                    <Edit><Input ref={inputRef} defaultValue={item.text} /></Edit> :
                    <Name onDoubleClick={() => !item.completed ? setIsEditing(true) : null}>
                        <div className={item.completed ? 'done' : ''}>
                            { item.text }
                        </div>
                    </Name>
            }
            <Actions>
                <Icons /> 
            </Actions>
        </RowItem>
    )
});

export default TodoItem;
