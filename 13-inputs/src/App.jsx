import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Exerc0081 from './pages/Exerc0081'


function App() {

  return (
    <>
      <div className='app'>
      <Exerc0081 />
      <Home />
      <Demo />
      </div>
    </>
  )
}

export default App