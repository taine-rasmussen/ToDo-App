import React, { useState } from 'react'

// Components
import Landing from './Landing'
import Main from './Main'


function App () {

  // State used to track input on landing / Display on main
  const [name, setName] = useState('')


  // State used to conditionally render Landing / Main Components
  const [view, setView] = useState(true)

  // Compressing components into variables used to conditionally render below
  const landing  = <Landing setName={setName} name={name} setView={setView}/>
  const main = <Main name={name}/>

  return (
    <>
      <div className='app'>
        {view ? landing : main}  
      </div>
    </>
  )
}

export default App
