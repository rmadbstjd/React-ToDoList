import React from 'react';
import { FaTrashAlt} from 'react-icons/fa';
const ToDo = ({todo,onUpdate,onDelete}) => {
    const {text, status} = todo;
    const handleChange = (e) => {
        
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
        
    };
    const handleDelete = () => {
        onDelete(todo);
        
    };
    return (
        <li>
            <input type="checkbox"id="checkbox" checked={todo.status ==='completed'} onChange={handleChange}></input>
            <lable htmlFor="checkbox">{todo.text}</lable>
            <button onClick={handleDelete}><FaTrashAlt /></button>
        </li>
            
        
    );
};

export default ToDo;