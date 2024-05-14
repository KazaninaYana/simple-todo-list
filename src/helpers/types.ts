
export interface TodoList {
    id: string;
    text: string;
    completed: boolean;
    isDeleted: boolean;
}

export type ActionsType = 'delete' | 'toggle' | 'edit';
