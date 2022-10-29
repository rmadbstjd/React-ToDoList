import React from 'react';

const ListButton = ({todo,showAll, showCActive,showCompleted}) => {
    const handleAll = () => {
        console.log(todo);
    };
    const handleActive = () => {

    }
    const handleCompleted = () => {

    };
    return (
        <div>
            <button onClick={handleAll}>all</button>
            <button onClick ={handleActive}>active</button>
            <button onClick={handleCompleted}>complete</button>
        </div>
    );
};

export default ListButton;