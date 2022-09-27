import React from 'react';

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
