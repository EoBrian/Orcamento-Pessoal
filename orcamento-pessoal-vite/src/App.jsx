import './App.css'

import { useState } from 'react'

//import react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

//import components
import HeaderApp from './components/HeaderApp'

//import pages
import Home from './pages/Home'
import Query from './pages/Query'


function App() {

  return (
    <div className="App">
      <Router>
        <div className="nav-bar">
          <HeaderApp/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/query' element={<Query/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
