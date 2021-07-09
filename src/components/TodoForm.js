import { useState, useRef, useEffect } from 'react';
const TodoForm = (props) => {
	const [ input, setInput ] = useState(props.edit ? props.edit.value : '');
const inputRef= useRef(null);

useEffect(()=>{
	inputRef.current.focus();
},[inputRef])
	const todoHandler = (e) => {
		setInput(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		props.onAddedTodo({
			id: Math.floor(Math.random() * 10000),
			text: input
		});
		setInput('');
	};
	return (
		<form className="todo-form" onSubmit={submitHandler}>
      {props.edit ? (
        <>
				<input
				type="text"
				placeholder="add todo"
				value={input}
				onChange={todoHandler}
				name="text"
				className="todo-input edit"
				ref={inputRef}
			/>
			<button onSubmit={submitHandler} className="todo-button">
				Add todo
			</button>
				</>
      ) : (
				<>
				<input
				type="text"
				placeholder="add todo"
				value={input}
				onChange={todoHandler}
				name="text"
				className="todo-input"
				ref={inputRef}
			/>
			<button onSubmit={submitHandler} className="todo-button">
				Add todo
			</button></>
			)}
			
		</form>
	);
};

export default TodoForm;
