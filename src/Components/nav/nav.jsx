import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./nav.css"

export default function Nav() {
  return (
    <>
    <nav id='navv' className="navbar navbar-expand-lg fixed-top py-4" style={{ backgroundColor: '#2c3e50' }}>
<div className="container">
  <Link className="navbar-brand fw-bolder fs-2 text-uppercase text-white" to={'/'}>Start Framework</Link>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <NavLink className="nav-link text-white fw-bold text-uppercase mx-2" aria-current="page" to={'/about'}>About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white fw-bold text-uppercase mx-2" to={'/portfolio'}>Portfolio</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link  text-white fw-bold text-uppercase mx-2" to={'/contacts'}>Contact</NavLink>
    </li>
  </ul>
</div>
<button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon text-white"></span>
  </button>
</div>
</nav>
</>
  )
}
