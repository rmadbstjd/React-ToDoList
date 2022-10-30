import React, {useCallback, useState} from 'react';

const Todo = ({todoList, setTodoList, test}) => {
    const [,updateState] = useState();
    const handleDelete = (item) => {
        setTodoList(todoList.filter((todo) => todo.id !== item.id));
    };
    const checkTodo = (item) => {

        let copyTodo = [...todoList];
        const findIndex = copyTodo.findIndex(element => element.id ===item.id);
        if(copyTodo[findIndex].status ==="active"){
            copyTodo[findIndex].status = "completed";
        }
        else {
            copyTodo[findIndex].status = "active";
        }
        updateState({},[]);   

        
    };
    console.log(test);
    
        if(test ==="all"){
            
            return(<>{todoList.map((item) => <div><input type="checkbox" onChange={() =>checkTodo(item)} checked ={item.status==="completed"}></input>{item.todo} <button onClick={() =>handleDelete(item)}>Delete</button></div>)}</>)
            
        }
        else if(test ==="active") {
            
            const filterArr = todoList.filter((item) => item.status ==="active");
            
            return(<>{filterArr.map((item) => <div><input type="checkbox" onChange={() =>checkTodo(item)} checked ={item.status==="completed"}></input>{item.todo} <button onClick={() =>handleDelete(item)}>Delete</button></div>)}</>)
            
        }   
        else {
            
            const filterArr= todoList.filter((item) => item.status ==="completed");
            
            return(<>{filterArr.map((item) => <div><input type="checkbox" onChange={() =>checkTodo(item)} checked ={item.status==="completed"}></input>{item.todo} <button onClick={() =>handleDelete(item)}>Delete</button></div>)}</>)
            
        }
        
    
};
export default Todo;