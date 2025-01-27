import React, { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!newTodo.trim()) {
      return; 
    }

    setTodos([...todos, { id: crypto.randomUUID(), text: newTodo }]); 
    setNewTodo("");
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleUpdate = (id) => {
    const updatedTodos = todos.map((todo)=> {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            };
        }else {
                return todo;
            }
        })
        setTodos(updatedTodos);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text"value={newTodo} onChange={handleInputChange} placeholder="Enter a new todo"/>
        <button type="submit">Add Todo</button>
        </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}
          <button onClick={()=>handleUpdate(todo.id)}>{todo.completed ? "완료": "미완료"}</button></li>
        ))}
      </ul>
      </div>
  );
};

export default TodoList;
