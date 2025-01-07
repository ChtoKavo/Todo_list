
import React from 'react';

const Todo = ({ todo, onDelete }) => {
  return (
    <div class = "aaa">
      <span>{todo.text}</span>
      <button class = "deletebt" onClick={() => onDelete(todo.id)}>Удалить, да, удалить </button>
    </div>
  );
};

export default Todo;
