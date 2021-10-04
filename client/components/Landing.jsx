import React, { useState } from 'react';

// TODO:
    // BUG: Landing page state is auto refreshing canceling out header swap if user submits without name

const Landing = ({setName, name, setView}) => {


    // Used to flip header if user submits without name
    const [header, setHeader] = useState(true)

    // Headers used to on load and after timer
    const secondHeader = <h1>Welcome, lets organise your day!</h1>
    const firstHeader = <h1>Please enter a name before submiting</h1>

        // Sets header state to true changing the header displayed
        const changeHeader = () => {
            setHeader(false)
        }

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
            changeHeader()
        }
    }

    // Handles updating name State with input value 
    const handleNameUpdate = (e) => {
        setName(e.target.value)
    }

    return(
        <div className="landing-container">
            {header ? secondHeader : firstHeader }
            <form className="landing-form-container" onSubmit={checksInputOnSubmit}>
                <input type='text' placeholder="Enter Name..." className="landing-input" onChange={handleNameUpdate}></input>
                <button className="landing-btn">Start your day!</button>
            </form>
        </div>
    )
}

export default Landing