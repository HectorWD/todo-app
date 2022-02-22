import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/todoContext'

const InputAdd = () => {
  const {addTodo}= useContext(TodoContext)
  const [todo, setTodo] = useState('')
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    addTodo(todo)
  }
  return (
    <form 
      className=' 
      flex items-center justify-start
      mb-4 md:mx-6
      w-4/5'
      onSubmit={handleSubmit}
      >
        <input
          type={'text'}
          className=' 
          border rounded-lg py-3 m-4
          flex-1'
          placeholder='add details'
          value={todo}
          name='nombre'
          onChange={handleChange}
          autoComplete='off'
        />
        <button
        className='
        px-10 py-4
        flex-none rounded-lg
        bg-blue-500 text-white
        hover:bg-blue-600 hover:text-white 
        ease-out hover:transition-all hover:duration-100'
        type={'submit'}
        >Add</button>
      </form>
  )
}

export default InputAdd