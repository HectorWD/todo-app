import React, { useContext } from 'react'
import InputAdd from '../inputAdd';

import { TodoContext } from '../../context/todoContext';

import { AiFillDelete } from 'react-icons/ai'

const SectionTodo = ({ section = 'all' }) => {
  const { todoList,
    filterActive,
    filterCompleted,
    completedTodo,
    deleteTodo } = useContext(TodoContext);
  const active = filterActive(todoList);
  const completed = filterCompleted(todoList);
  const handleChange = (id) => {
  }
  return (
    <div className='flex flex-col items-center'>
      {section === 'all' && <InputAdd />}
      {section === 'active' && <InputAdd />}
      <div className='
    flex flex-col w-9/12'>
        {
          section === 'all' &&
          todoList.map((todo) => (
            <div className='m-2 text-xl' key={todo.id}>
              <input
                type={'checkbox'}
                key={todo.id}
                checked={todo.completed ? 'checked' : ''}
                onChange={() => completedTodo(todo.id)}
              />
              <label className='ml-2 cursor-pointer' onClick={() => completedTodo(todo.id)}>
                {todo.nombre}
              </label>
            </div>
          ))
        }
        {
          section === 'active' &&
          active.map((todo) => (
            <div className='m-2 text-xl' key={todo.id}>
              <input
                type={'checkbox'}
                checked={todo.completed && 'checked'}
                onChange={() => completedTodo(todo.id)}
              />
              <label className='ml-2 cursor-pointer' onClick={() => completedTodo(todo.id)}>
                {todo.nombre}
              </label>
            </div>
          ))
        }
        {
          section === 'completed' &&
          completed.map((todo, index) => (
            <div className='m-3  text-xl flex justify-center items-center' key={index}>
              <input
                className='mr-2'
                type={'checkbox'}
                checked={todo.completed && 'checked'}
                onChange={() => handleChange(todo.id)}
                disabled
              />
              <label
                className='flex-1 cursor-pointer'
                onClick={() => deleteTodo(todo.id)}
              > {todo.nombre} </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className='
                rounded-full
                p-3
                hover:bg-red-200
                '
              >
                <AiFillDelete />
              </button>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default SectionTodo