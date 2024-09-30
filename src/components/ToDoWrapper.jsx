import React , {useState,useEffect} from 'react';
import {ToDoForm} from "./Todoform.jsx";
import {v4 as uuidv4} from "uuid";
// uuidv4();
import { ToDo } from './Todo.jsx';
import { EditTodoform } from './Edittodoform.jsx';
import '../ToDoWrapper.css'; 

export const ToDoWrapper = () => {
    const [todos,setTodos]  = useState(() => {const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];});


    useEffect(() => {   
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addToDo = todo => {
        setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed}:todo))
    }


    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id? {...todo,isEditing: !todo.isEditing} : todo))
    }
    const editTask = (task,id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing:!todo.isEditing} : todo))
    }
    return (
        <div className='ToDoWrapper'>
            <h1>Get Things Done!</h1>
            <ToDoForm addToDo={addToDo}/>
        {todos.map((todo,index) => (
            todo.isEditing ? (<EditTodoform editTodo={editTask} task={todo}/> ) : ( <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo = {editTodo}/>)
           
        ))}
        
        </div>
    );
}

