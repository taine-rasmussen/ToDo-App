import React from 'react';


const Landing = ({setName,setDay,setView}) => {

    // Handle form submitting
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset()
        setView(false)
    }

    // Handles updating name State with input value 
    const handleNameUpdate = (e) => {
        setName(e.target.value)
    }

    // Handles updating Day State with input value 
    const handleDayUpdate = (e) => {
        setDay(e.target.value)
    }

    return(
        <div className="landing-container">
            <h1 className="landing-header">Welcome, lets organise your day!</h1>

            <form className="landing-form-container" onSubmit={handleSubmit}>
                <input type='text' placeholder="Enter Name..." className="landing-input" onChange={handleNameUpdate}></input>
                <input type='text' placeholder="Enter Day" className="landing-input" onChange={handleDayUpdate}></input>
                <button className="landing-btn">Get started!</button>
            </form>
        </div>
    )
}

export default Landing