import React from 'react';



// Use setInterval to show welcome message on load then use state to flip header message after n time

const Main = ({name}) => {

    return (
        <div className='main-container'>
            <h1>Welcome to a new day {name}</h1> 
        </div>
    )
}


export default Main