import React, { useState } from 'react';

// TODO:
    // BUG: Landing page state is auto refreshing canceling out header swap if user submits without name

const Landing = ({setName, name, setView}) => {


    // Used to flip header if user submits without name
    const [subHeader, setSubHeader] = useState(false)

    // Updates subHeader state to show message below input
    const updateSubHeader = () => {
        setSubHeader(true)
    }

    // Message to be displayed if form submited without name
    const subHeaderMessage = <h3>Please enter a name before submitting</h3>

    // Handle form submitting
    const handleSubmit = (e) => {
        e.preventDefault(e);
        e.target.reset()
        setView(false)
    }

    // Checks if header state has been updated. Flips to main if true else ask user to input something
    const checksInputOnSubmit = (e) => {
        if (name.length > 0){
            handleSubmit(e)
        } else {
            updateSubHeader()
        }
    }

    // Handles updating name State with input value 
    const handleNameUpdate = (e) => {
        setName(e.target.value)
    }

    return(
        <div className="landing-container">
            <h1>Welcome, lets organise your day!</h1>
            <form className="landing-form-container" onSubmit={checksInputOnSubmit}>
                <input type='text' placeholder="Enter Name..." className="landing-input" onChange={handleNameUpdate}></input>
                <button className="landing-btn">Start your day!</button>
            </form>
           {subHeader ? subHeaderMessage : null}
        </div>
    )
}

export default Landing