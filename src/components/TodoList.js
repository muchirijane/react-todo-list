import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
function TodoList() {
	const [ todos, setTodos ] = useState([]);

  const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }
    

    const newTodos = [...todos, todo];
    setTodos(newTodos);
    console.log(todo);
  }

  const updateTodo = (todoId, newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return;
    }
    setTodos(prev => prev.map(item => item.id === todoId ? item.text = newValue : item));
    
  }

  const removeTodo = id =>{
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  }

  

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
	return (
		<>
			<h2>What's the plan Today</h2>
			<TodoForm onAddedTodo={addTodo}/>
      <Todo todos={todos} updateTodo={updateTodo} completeTodo={completeTodo} removeTodo={removeTodo}/>
		</>
	);
}

export default TodoList;
