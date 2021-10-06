import React, { useState } from 'react';


const List = () => {

    // State used to track from input
    const [input, setInput] = useState('')

    // State used to track task on todo list
    const [task, setTask] = useState([[]])
    
    // Updates input state with form input
    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    // Pushes form input into task state to be displayed as item on todo list
    const handleSubmit = (e) => {
        e.preventDefault()
        task.push(input)
        setInput('')
    }

    return(
        <div className="list-container">
            <div className="list-check-container"></div>
                <div className="list-text-container">
                   {task.map(item => {
                       return <h2>{item}</h2>
                   })}
                </div>

                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text'
                            placeholder='Enter task' 
                            value={input} 
                            onChange={handleChange}>
                        </input>
                        <button type='submit'>Add to list</button>
                   </form>
        </div>
    )
}

export default List