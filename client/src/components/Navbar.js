import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <NavLink className="navbar-brand" to="#">
      <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" class="me-2" height="20"
        alt="MDB Logo" loading="lazy" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin">Signin</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
