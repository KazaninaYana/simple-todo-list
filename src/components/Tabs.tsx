import { useCallback, Dispatch, SetStateAction } from 'react';
import { TabsWrapper, Tab } from '../styled/todo';
import { TodoList } from '../helpers/types';

type TabsStructureProps = {
    id: number,
    text: string,
    action: string,
    filters: (list: TodoList[]) => TodoList[],
}

export const tabStructure: TabsStructureProps[] = [
    { id: 1, text: 'My tasks', action: 'all', filters: (list: TodoList[]) => list.filter(item => !item.isDeleted) },
    { id: 2, text: 'Completed', action: 'complete', filters: (list: TodoList[]) => list.filter(item => item.completed && !item.isDeleted) },
    { id: 3, text: 'Deleted', action: 'delete',  filters: (list: TodoList[]) => list.filter(item => item.isDeleted) },
];

type TabsProps = {
    actveTab: number,
    setActveTab: Dispatch<SetStateAction<number>>
}

const Tabs = ({ actveTab, setActveTab }: TabsProps) => {

    const setActiveIndex = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        if (!(event.target instanceof HTMLDivElement)) {
            return;
        }
    
        event.target.dataset.index && setActveTab(Number(event.target.dataset.index))
    };
    
    const tabList = useCallback(() => 
        tabStructure.map(({ id, text }) => 
            <Tab key={id} data-index={id} className={actveTab === id ? 'active': ''}>{ text }</Tab>
        ), [actveTab]);
    

    return (
        <TabsWrapper onClick={setActiveIndex}>
            { tabList() }
        </TabsWrapper>
    )
};

export default Tabs;