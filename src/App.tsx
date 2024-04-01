import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Container } from './components/Test/Example';
import Todo  from './components/Todo';
import { Wrapper, Title, Subtitle } from './styled/common-todo';

function App() {
  return (
    <Wrapper>
        <Title>
            TodoList
            <Subtitle>Get things done, one item at a time.</Subtitle>
        </Title>
        
        <DndProvider backend={HTML5Backend}>
          <Todo />
        </DndProvider>
        
				{/* <DndProvider backend={HTML5Backend}>
					<Container />
				</DndProvider> */}
    </Wrapper>
  )
}

export default App;
