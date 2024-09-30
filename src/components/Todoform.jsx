import React ,{useState} from "react";

export const ToDoForm =({addToDo}) => {

    const  [value , setValue] = useState("")

    const handleSubmit = e => {

        e.preventDefault();

        if (value.trim()){
            addToDo(value);
            setValue("");
        }
    }
    return (
        <form className="ToDoForm" onSubmit = {handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="What is the task?" onChange={(e) => setValue(e.target.value)}></input>
        <button type="submit" className="todo-btn" >Add task</button>
        
        
        </form>
    );

}