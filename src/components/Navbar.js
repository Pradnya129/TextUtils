import React from 'react';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
   <>

<nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/ "><h3> <b>{props.title}</b></h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      
      </ul>
  
      <form className="d-flex align-items-center" role="search">

      <div class={`form-check form-switch text-${props.mode === 'dark'? 'light' : 'dark'}`}>
  <input class="form-check-input " type="checkbox" role="switch" onClick={props.enableDarkmode} id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>

      </form>
    </div>
  </div>
</nav>

   
   </>
   
  )
 
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:'set title',
    about : 'set about'
}


