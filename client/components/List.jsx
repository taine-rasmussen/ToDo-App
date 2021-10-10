import React, { useState } from 'react';
import { HiBan, HiOutlineCode  } from "react-icons/hi";



// For styling try split list form into its own component - will need to move state to parent Div
// Add id to task to help handleDelete func

const List = () => {

    // State used to track form input
    const [input, setInput] = useState('')

    // State used to track task on todo list
    const [task, setTask] = useState([])

    
    const [editing, setEditing] = useState(null)

    const [editText, setEditText] = useState('')

    const [btnFlip, setBtnFlip] = useState(false)

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
            task.push({id: task.length, value: input})
            setInput('')
            // Changes placeholder text after first input added to list
            if (input.length > 1) {
                changePlaceHolder()
            } else {
                null
            }
        }

        // Resets Task state and clears list onClick & resets placeholder message
        const handleClearTasks = () => {
            setTask([])
            setPlaceHolderChange(true)
        }

        // Removes individual task from list
        const handleDelete = (id) => {
            const newList = task.filter((item) => item.id !== id)
            setTask(newList)
        }

        // Captures edit input and updates task state with new input
        const handleEdit = (id) => {
            const updatedTodos = [...task].map((item) => {
                if (item.id === id) {
                  item.value = editText
                } 
                return item
            })
                setTask(updatedTodos)
                setEditText('')
                setEditing(null)
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
                <div className="task-container">

                    {task.map(item => {
                        return item.length < 1 ? null : 
                                    <div className='task-item-container' key={item.id}>
                                        <input type='checkbox' className='checkbox'></input>
                                            <div className='task-header-container'>
                                                {editing === item.id ? 
                                                    (<input 
                                                        type="text" 
                                                        onChange={(e) => setEditText(e.target.value) } 
                                                        value={editText}>
                                                    </input>) 
                                                : (<h2>{item.value}</h2>)}  
                                            </div>
                                        <div className='btn-container'>
                                            <div className='edit-btns-container'>
                                                <button className='edit' onClick={() => setEditing(item.id)}><HiOutlineCode /></button>
                                                <button onClick={() => handleEdit(item.id)}>Update</button>
                                            </div>
                                            <button className='del-btn' onClick={() => handleDelete(item.id)}><HiBan /></button>
                                        </div>
                                    </div>
                              })}
                 

                </div>
        </div>
    )
}

export default List