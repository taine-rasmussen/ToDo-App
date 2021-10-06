import React, { useState, useEffect } from 'react';

// Components
import List from './List'


const Main = () => {

    // State used to conditionally render header
    const [header, setHeader] = useState(false)

    // Headers used to on load and after timer
    const secondHeader = <h1>Start by adding something to your list</h1>
    const firstHeader = <h1>Welcome, lets organise your day!</h1>

        // Sets header state to true changing the header displayed
        const changeHeader = () => {
            setHeader(true)
        }
        
        // Timer that calls changeheader when over
    const timer = setInterval(changeHeader, 2500);

        // Starts timer on page load
        useEffect(() => {
        timer
        }, []);

    return (
        <div className='main-container'>
            <div className='main-header-container'>{firstHeader}</div>
                <div className='main-list-container'>
                    <List />
                </div>
        </div>
    )
}


export default Main