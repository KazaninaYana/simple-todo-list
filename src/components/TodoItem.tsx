import { memo } from 'react';
import { TodoList, ActionsType } from '../helpers/types';
import { FaCheckSquare, FaRegSquare , FaTrash  }from 'react-icons/fa';
import { RowItem, Name, Actions } from '../styled/elements';

type ItemProps = {
    item: TodoList,
    itemActions: (typeAction: ActionsType, id: string) => void,
}

const TodoItem = memo(({ item, itemActions }: ItemProps) => {
    console.log('TodoItem');

    return (
        <RowItem>
            <Name>{ item.text }</Name>
            <Actions>
                {
                    item.completed ? 
                        <FaCheckSquare 
                            size={24} 
                            onClick={() => itemActions('toggle', item.id)}/> :
                        <FaRegSquare 
                            size={24} 
                            onClick={() => itemActions('toggle', item.id)} />
                }
                <FaTrash size={24} onClick={() => itemActions('delete', item.id)} />
            </Actions>
        </RowItem>
    )
});

export default TodoItem;
