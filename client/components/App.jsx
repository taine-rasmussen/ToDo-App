import React, { useState } from 'react'
import { Route } from 'react-router-dom'

// Components
import Landing from './Landing'
import Main from './Main'


function App () {

  // State used to track input on landing / Display on main
  const [name, setName] = useState('')

  return (
    <>
      <div className='app'>
        <Route exact path='/' component={Landing} setName={setName} name={name}/>
        <Route exact path='/list' component={Main } name={name}/>
      </div>
    </>
  )
}

export default App
