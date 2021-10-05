import React, { useState } from 'react';


const List = () => {

    const [todo, setTodo] = useState([['Smile']])


    const updateToDoList = (e) => {
        e.preventDefault();
        todo.push(e.target.value)
    }

    const checkBox = <input type="checkbox"></input>

    return(
        <div className="list-container">
            <div className="list-check-container"></div>
                <div className="list-text-container">
                   {todo.map(item => {
                       return <h2>{item}</h2>
                   })}
                </div>

                    <form>
                        <input type='text' placeholder='Enter task'></input>
                        <button type='submit'>Add to list</button>
                   </form>
        </div>
    )
}

export default List