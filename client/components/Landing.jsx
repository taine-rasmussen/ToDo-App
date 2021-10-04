import React from 'react';


const Landing = () => {



    // Handle form submitting
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset()
    }

    return(
        <div clasName="landing-container">
            <h1 className="landing-header">Welcome, lets organise your day!</h1>

            <form className="landing-form-container" onSubmit={handleSubmit}>
                <input type='text' placeholder="Enter Name..." className="landing-input"></input>
                <input type='text' placeholder="Enter Day" className="landing-input"></input>
                <button className="landing-btn">Get started!</button>
            </form>
        </div>
    )
}

export default Landing