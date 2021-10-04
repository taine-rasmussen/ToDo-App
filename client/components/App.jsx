import React, { useState } from 'react'

// Components
import Landing from './Landing'
import Main from './Main'


function App () {

  // State used to track input on landing / Display on main
  const [name, setName] = useState('')
  const [day, setDay] = useState('')

  return (
    <>
      <div className='app'>
          <Landing name={name} setName={setName} day={day} setDay={setDay}/>
      </div>
    </>
  )
}

export default App
