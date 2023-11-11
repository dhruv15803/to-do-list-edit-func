import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({complete}) => {
  return (
    <>
    <nav id="navbar">
        <div id="navLeft">
            <Link to='/'>Notes</Link>
        </div>
        <div id="navRight">
            <Link to='/complete'><button className="navBtn">Completed ({complete.length})</button></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar