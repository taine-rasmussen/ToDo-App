import React, { useState } from 'react';


// For styling try split list form into its own component - will need to move state to parent Div
// Add id to task to help handleDelete func

const List = () => {

    // State used to track form input
    const [input, setInput] = useState('')

    // State used to track task on todo list
    const [task, setTask] = useState([[]])

    // State used to flip placeholder text after first item added
    const [placeHolderChange, setPlaceHolderChange] = useState(true)
        
        // Flips placeholder state to display second message
        const changePlaceHolder = () => {
            setPlaceHolderChange(false)
        }

        // Variables used to display placeHolder text
        const placeHolderOne = 'Add your first task...'
        const placeHolderTwo = 'Add another task..'
        
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
            // Changes placeholder text after first input added to list
            if (input.length > 1) {
                changePlaceHolder()
            } else {
                null
            }
        }

        // Resets Task state and clears list on Click
        const handleClearTasks = () => {
            setTask([[]])
        }

    return(
        <div className="list-container">
            <form onSubmit={handleSubmit} className="form-container">
                <input 
                    type='text'
                    placeholder={placeHolderChange ? placeHolderOne : placeHolderTwo} 
                    value={input} 
                    onChange={handleChange}
                    className='form-input'>
                </input>
                <button type='submit' className='list-btn'>Add to list</button>
                <button className='list-btn pink-border' onClick={handleClearTasks}>Clear tasks</button>
            </form>
                <div className="task-container"></div>
                    <div className="list-text-container">
                    {task.map(item => {
                        return item.length < 1 ? null : 
                                    <div className='task-item-container'>
                                        <input type='checkbox' className='checkbox'></input>
                                        <h2>{item}</h2>
                                        <button className='edit'>Edit</button>
                                        <button className='del-btn'>Delete</button>
                                    </div>
                              })}
                    </div>
        </div>
    )
}

export default List