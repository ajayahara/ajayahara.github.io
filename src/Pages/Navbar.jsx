import React from 'react'
import { useState } from 'react'
import "../CSS/Navbar.css"
export const Navbar = () => {
  const [active,setActive]=useState(false);
  return (
    <div className='navbar'>
        <div className='profile-name'>
           <div>
            @Ajaya
           </div>
           <div className='hambergmenu'>
                <img src="/Images/more.png" alt="" onClick={()=>{
                  setActive(true)
                }} />
           </div>
        </div>
        <div className={(active)?'ulwrapper':'ulwrapper inactive'}>
           <div className='closeicon' >
                <img src="/Images/close.png" alt="" onClick={()=>{
                  setActive(false)
                }} />
            </div>
        <ul className='list-uls'>
                <li><a href="#home" onClick={()=>{
                  setActive(false)
                }}>Home</a></li>
          
                <li><a href="#aboutme" onClick={()=>{
                  setActive(false)
                }}>AboutMe</a></li>
           
                <li><a href="#project" onClick={()=>{
                  setActive(false)
                }}>Project</a></li>
          
                <li><a href="#skill" onClick={()=>{
                  setActive(false)
                }}>Skill</a></li>
                <li><a href="#contact" onClick={()=>{
                  setActive(false)
                }}>Contact</a></li>
                <li><a href="/Project/Ajaya-Kumar-Behera-Resume.pdf" download onClick={()=>{
              window.open("https://drive.google.com/file/d/1zTgZBMP6AiSJeX31mpRlHNI_RgJSNO3o/view?usp=sharing",'_blank')
            }}>Resume</a></li>
            </ul>
           
        </div>
    </div>
  )
}
