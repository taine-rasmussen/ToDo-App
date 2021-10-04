import React, { useState } from 'react';


const List = () => {

    const [todo, setTodo] = useState([['Smile']])

    return(
        <div className="list-container">
            <div className="list-check-container"></div>
                <div className="list-text-container">
                    {todo.forEach(item => {
                       return <h1>{item}</h1>
                    })}
                </div>
        </div>
    )
}

export default List