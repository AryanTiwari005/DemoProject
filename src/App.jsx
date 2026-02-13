import './App.css';
// import Usercard from './components/Usercard';
// import Wrapper from './components/Wrapper';
import TodoApp from './TOdoapp';
import Counter from './Counter';

export default function App() {
 
  return (
    
    <div className='app-container'>
      <h2>Counter App</h2>
      {/* <h2>Todo App</h2>

      <TodoApp /> */}
      <Counter />
    </div>
  );
}
