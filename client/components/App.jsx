import React, { useState } from 'react'


// Components
import Main from './Main'

// MVP
  // User can add to list [x]
  // User can remove task from list [x]
  // User can tick complete task [x]
  // User can edit task []
  // User can clear all task [x]

// Nice to haves
  // User can see percentage of task complete []
  // User can set a timer || User can set a timer for an individual task []
  // Probably make it look nice [x]
  // Task text doesn't overflow at bottom of list-container [] Change text size after n tasks


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
