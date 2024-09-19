import { useState } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>

    // <div style={{ margin: '20px'}}>
    //     <img src="/logo512.png" alt="React logo" style={{ width: '50px' }}/>
    //     <h1>Fun facts about React</h1>
    //     <ul>
    //     <li>Was first released in 2013</li>
    //     <li>Was originally created by Jordan Walke</li>
    //     <li>Has well over 100k stars on Github</li>
    //     <li>Is maintained by Facebook</li>
    //     <li>Powers thousands of enterprise apps, including mobile apps</li>
    //     </ul>
    // </div>
  )
}

export default App
