import React from 'react'
import {Link} from "react-router-dom"
import style from "../All_Css/Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div>
        Ajaya
      </div>
      <div className='navright'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skill">Skill</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/aboutportfolio">About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
