"use client"

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { addTodo, toggleTodo, deleteTodo } from '../features/todos/todosSlice';

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className='flex flex-col items-center bg-gray-100 min-h-screen py-8'>
      <h1 className='text-4xl font-bold mb-6'>Todo List</h1>
      <div className='flex gap-2 mb-6'>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a todo"
          className='border rounded px-4 py-2 w-64 focus:outline-blue-500'
        />
        <button onClick={handleAddTodo} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Add</button>
      </div>
      <ul className='w-3/4'>
        {todos.map((todo) => (
          <li key={todo.id} className='flex justify-between items-center p-4 bg-white shadow-rounded mb-4'>
            <span
              className={`flex-grow cursor-pointer ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'    
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
