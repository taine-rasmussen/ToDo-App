import React, { useState } from 'react'


// Components
import Main from './Main'

// MVP
  // User can add to list [x]
  // User can remove task from list [x]
  // User can tick complete task [x]
  // User can edit task [x]
  // User can clear all task [x]

function App () {

  return (
    <>
      <div className='app'>
        <Main />
      </div>
    </>
  )
}

export default App
