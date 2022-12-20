import './App.css';
import Todo from './components/Todo';

export default function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed}
      key={task.id} 
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <div className="filters btn-group stack-exception">
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
          {taskList}
      </ul>
    </div>
  );
}