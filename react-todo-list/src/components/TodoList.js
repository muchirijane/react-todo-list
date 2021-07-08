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

  

  const completedTodo = (id) => {
    let updatedTodo = todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(updatedTodo);
  }
	return (
		<>
			<h2>What's the plan Today</h2>
			<TodoForm onAddedTodo={addTodo}/>
      <Todo todos={todos} updateTodo={updateTodo} completedTodo={completedTodo} removeTodo={removeTodo}/>
		</>
	);
}

export default TodoList;
