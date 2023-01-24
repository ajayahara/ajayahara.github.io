import React from 'react'
import "../CSS/Navbar.css"
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='profile-name'>
           <div>
            @Ajaya
           </div>
           <div className='hambergmenu'>
                <img src="/Images/more.png" alt="" />
           </div>
        </div>
        <div className='ulwrapper'>
           <div className='closeicon' >
                <img src="/Images/close.png" alt="" />
            </div>
        <ul className='list-uls'>
                <li><a href="#home">Home</a></li>
          
                <li><a href="#aboutme">AboutMe</a></li>
           
                <li><a href="#project">Project</a></li>
          
                <li><a href="#skill">Skill</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a download href="/Project/Ajaya-Behera-Resume">Resume</a></li>
            </ul>
           
        </div>
    </div>
  )
}
