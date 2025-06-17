import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import './App.css';
import Auth from '../src/pages/Auth.js'
const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/auth' element = {<Auth/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App