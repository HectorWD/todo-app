import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const initalState = []
    const [todoList, setTodoList] = useState(initalState)

    const filterActive = (todoList) => {
        const active = todoList.filter((todo) => todo.completed === false);
        return active;
    }
    const filterCompleted = (todoList) => {
        const completed = todoList.filter((todo) => todo.completed === true);
        return completed;
    }
    const addTodo = (nombre) => {
        setTodoList((state) => [
            ...state,
            {
                id: new Date().getTime(),
                nombre,
                completed: false
            }])
    }
    const completedTodo = (id) => {
        setTodoList(todoList.map((todo) => {
            if (id === todo.id) {
                return {
                    id: todo.id,
                    nombre: todo.nombre,
                    completed: !todo.completed
                }
            } else {
                return todo
            }
        }));

    }
    const deleteTodo = (id) => {
        const newList= todoList.filter((todo)=>todo.id!== id);
        setTodoList(newList)
    }
    return (
        <TodoContext.Provider
            value={{
                todoList,
                filterActive,
                filterCompleted,
                completedTodo,
                addTodo,
                deleteTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}