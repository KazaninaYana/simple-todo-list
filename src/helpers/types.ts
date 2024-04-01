
export interface TodoList {
    id: string;
    text: string;
    completed: boolean;
}

export type ActionsType = 'delete' | 'toggle';
