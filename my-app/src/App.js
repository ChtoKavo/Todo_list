import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
    console.log(todos); // Для отладки
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div class = "divlol">
      <h1>Todo List</h1>
      <input
      class = "inputlol"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите задачу"
      />
       <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </div>
      <button class = "aboba" onClick={addTodo}>Добавить</button>

      

     
    </div>
  );
};

export default App;
