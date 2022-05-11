import logo from './logo.svg';
import './App.css';
import TodoForm from './form.js'
import TodoList from './ListTodo'
import Edittodo from './Edittodo';



function App() {
  return (
    <div className="App">
    <header>
          <h1>What u want to do</h1>
    </header>

    {/* <TodoForm /> */}
    <TodoList />
    <Edittodo />
    </div>
  );
}

export default App;
