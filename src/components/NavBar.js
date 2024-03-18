import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='Total_NavBar'>
        <div className='Home_Icon'>
            <Link to='/Home' className='Icon'><i className="fa-solid fa-house"></i></Link>
        </div>
        <div className='User_Icon'>
            <Link to='/User' className='Icon'><i className="fa-solid fa-user"></i></Link>
        </div>
    </div>
  )
}

export default NavBar