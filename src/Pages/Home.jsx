import React from 'react'
import "../CSS/Home.css"
import Typewriter from "typewriter-effect";
import { useEffect } from 'react';
export const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='home-container'>
        <div className='home-div1'>
          <div className='home-div11'>
            Hi There!
          </div>
          <div className='home-div12'>
            <span className='home-div121'>{"I'm"} </span> 
              <Typewriter
                 className='home-div122'
                 options={{
                  strings: [' Ajaya Kumar', ' A Full Stack','Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
          </div>
          <div className='home-div13'>
            Front End Developer with 1200+ hour coding experience working with Javascript, Html, CSS & Rect to deliver exceptional customer experinces. Adept at contributing to a highly collaborative work environment, finding solutions and determining customer satisfaction.
          </div>
          <div className='home-div14'>
            <a href="">
              <img src="/Images/github.png" alt="github" />
            </a>
            <a href="">
              <img src="/Images/linkedin.png" alt="linkedin" />
            </a>
            <a href="">
              <img src="/Images/twitter.png" alt="twitter" />
            </a>
          </div>
          <div className='home-div15'>
            <button>Resume⇩</button>
          </div>
        </div>
        <div className='home-div2'>
          <img src="/Images/web-gif.gif" alt="gif" />
        </div>
      </div>
    </div>
  )
}
