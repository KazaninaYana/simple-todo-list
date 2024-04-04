import Todo  from './components/Todo';

import { Wrapper, Title, Subtitle } from './styled/common-todo';

function App() {
  console.log('App');
  
  return (
    <Wrapper>
        <Title>
            TodoList
            <Subtitle>Get things done, one item at a time.</Subtitle>
        </Title>
        
        <Todo />
    </Wrapper>
  )
}

export default App;
