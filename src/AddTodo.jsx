import React,{useState} from 'react';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
const AddTodo = ({inputValue,setInputValue,todoList,setTodoList}) => {
    
    const changeInputValue = (e) => {
        setInputValue((v) => e.target.value);
       
    };
    const AddInputValue = () => {
        
        setTodoList(todoList.concat({id:uuidv4(),todo:inputValue,status:"active"}));
        setInputValue('');
    };
    return (
        <div>
            <input type="text" onChange={changeInputValue} value ={inputValue}></input>
            <button onClick={AddInputValue}>Add</button>
        </div>
    );
};

export default AddTodo;