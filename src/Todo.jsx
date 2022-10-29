import React from 'react';

const Todo = ({todoList, setTodoList}) => {
    const handleDelete = (item) => {
        setTodoList(todoList.filter((todo) => todo !== item));
    };
    return (
        <>
            {
                todoList.map((item) => <div>{item} <button onClick={() =>handleDelete(item)}>Delete</button></div>)
            }
        </>
    );
};

export default Todo;