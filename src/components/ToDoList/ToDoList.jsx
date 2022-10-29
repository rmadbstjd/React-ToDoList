import React, {useState,} from 'react';
import { useImmer } from 'use-immer';
import styles from './ToDoList.module.css';
import AddToDo from '../AddToDo/AddToDo';
import ToDo from '../ToDo/ToDo';
import ListButton from '../ListButton/ListButton';
export default function ToDoList() {
    const [todos, setTodos] = useImmer([{id: '123',text:'장보기', status: 'active'}, {id:'124', text:"공부하기", status:"active "}]);
    const handleAdd = (toDo) => {
        // 새로운 todo를 todos에 업데이트 해야함.
    
        setTodos((todos) => {todos.push(toDo)});
        
    };
    const handleUpdate = (updated) => {
        //해당 todo를todos에서 업데이트함.

        const findIndex = todos.find((item) => item.id === updated.id);
        const id = findIndex.id;
        
        
        if(findIndex.status ==='active'){
            setTodos((todos) =>todos.map((t) => t.id === id? t.status = 'completed': t));
        }
        else {
            setTodos((todos) =>todos.map((t) => t.id === id? t.status = 'active': t));
        }
        
 
       
        
    };
    const handleDelete = (deleted) => {
        //해당 todo를todos에서 삭제함.

        
        setTodos((todos) => todos.filter(function(t){return t.id !==deleted.id}));        //setTodos(todos.filter(t => t.id !== deleted.id));
             
    };
    const showAll = () => {

    };
    const showActive = () => {

    };
    const showCompleted = () => {

    };
    return(
        
        <section>
           <ListButton todo ={todos}showAll={showAll} showActive ={showActive} showCompleted ={showCompleted}></ListButton>
           <ul>
                {
                    todos.map(item => <ToDo key={item.id}todo={item} onUpdate ={handleUpdate} onDelete = {handleDelete}></ToDo>)
                }
           </ul>
           <AddToDo onAdd={handleAdd}></AddToDo>
        </section>
    );
}