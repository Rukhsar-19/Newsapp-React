 import React, { Component } from 'react' 
import { Link } from 'react-router-dom';


export class NavBar extends Component {
  

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News World</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
         <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
        </li>
         {/* <li className="nav-item"> 
          <a className="nav-link" to="/About">About</a>
        </li>  */}

        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
          <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
          <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
          <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>      
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
