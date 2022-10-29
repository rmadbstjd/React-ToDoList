import React,{useState} from 'react';
import Todo from './Todo';
const AddTodo = ({inputValue,setInputValue,todoList,setTodoList}) => {
    
    const changeInputValue = (e) => {
        setInputValue((v) => e.target.value);
       
    };
    const AddInputValue = () => {
        
        setTodoList(todoList.concat(inputValue));
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