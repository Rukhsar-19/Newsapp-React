
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

// imports of router

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



// import Navbar from './Navbar';



export default class App extends Component {
  render() {
    return (
    
      <div>
      <Router>
      <NavBar/>
        {/* <News pageSize={5}  country="us" category="entertainment"/>  */}

{/* router switch */}
        <Routes>
          <Route exact path="/" element={<News key="genera" pageSize={5}  country="us" category="general" />} />
          <Route exact path="/bussiness"element={ <News key="bussiness" pageSize={5}  country="us" category="bussiness" />} />
          < Route exact path="/entertainment" element={<News key="entertainment" pageSize={5}  country="us" category="entertainment" /> }/>
          < Route exact path="/health" element={<News key="health" pageSize={5}  country="us" category="health" /> }/>
          < Route exact path="/science" element={<News key="science" pageSize={5}  country="us" category="science" /> }/>
          < Route exact  path="/sports" element={<News key="sports" pageSize={5}  country="us" category="sports" /> }/>
          < Route  exact  path="/technology" element={<News  key="technology" pageSize={5}  country="us" category="technology" /> }/>


          
        </Routes>

  
        </Router>

      </div>
    )
  }
}


