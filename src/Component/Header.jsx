import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand text-light">React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/add'} className="nav-link active text-light" aria-current="page" href="#">Add</Link>
        </li>
        <li className="nav-item">
          <Link to={'/view'} className="nav-link active text-light" aria-current="page" href="#">View</Link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
