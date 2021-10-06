import React, { useState } from 'react';


// For styling try split list form into its own component - will need to move state to parent Div
// Add id to task to help handleDelete func

const List = () => {

    // State used to track form input
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
            <form onSubmit={handleSubmit} className="form-container">
                <input 
                    type='text'
                    placeholder='Enter task...' 
                    value={input} 
                    onChange={handleChange}
                    className='form-input'>
                </input>
                <button type='submit' className='list-btn'>Add to list</button>
            </form>
                <div className="list-check-container"></div>
                    <div className="list-text-container">
                    {task.map(item => {
                        return <h2>{item}</h2>
                    })}
                    </div>
        </div>
    )
}

export default List