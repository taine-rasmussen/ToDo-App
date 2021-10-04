import React from 'react';


const Main = ({name, day}) => {

    return (
        <div className='main-container'>
            <h1>{name}'s</h1> 
            <h1>{day}</h1>
        </div>
    )
}


export default Main