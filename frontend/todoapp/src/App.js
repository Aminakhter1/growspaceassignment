
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoForm/>
      
      <ToDoList/>
    </div>
  );
}

export default App;
