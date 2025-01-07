
import React from 'react';

const Todo = ({ todo, onDelete }) => {
  return (
    <div class = "aaa">
      <span>{todo.text}</span>
      <button class = "deletebt" onClick={() => onDelete(todo.id)}> Удалить </button>
    </div>
  );
};

export default Todo;
