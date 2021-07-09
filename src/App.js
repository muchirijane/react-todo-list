import './App.css';

import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className="todo-app">
			<h1>React todo list</h1>

			<TodoList />
		</div>
	);
};

export default App;
