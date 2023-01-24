import React from 'react'
import "../CSS/Project.css"
export const Project = () => {
  const data = [
    { name: "Abof", url1: "https://teal-biscuit-947d6f.netlify.app/", url2: "https://github.com/ajayahara/homely-yarn-5441", des1: 'Abof.com is the first D2C digital-first brand from house of Aditya Birla Fashion & Retail.', des2: 'A collaborative project cloned within five days. By cloning this website we are trying to implement some functionality.', tech: 'React, Express, Chakra, Mongoose', resp: 'Product, Login, Register',path:'/Images/abof-logo.webp' }
    ,
    { name: "Jiomart", url1: "https://melodic-wisp-f3c5fb.netlify.app/", url2: "https://github.com/ajayahara/JIOMART.COM_RCT_201", des1: 'JioMart is an Indian e-commerce company . It makes your grocery shopping even simpler. No more hassles of sweating it out in crowded markets, grocery shops & supermarkets.', des2: 'A collaborative project cloned within five days. By cloning this website we are trying to implement some functionality.', tech: 'React, Chakra, Redux', resp: 'Cart & Payment Page',path:'/Images/jiomart-logo.png' }
    ,
    { name: "SugarCosmetics", url1: "https://melodic-wisp-f3c5fb.netlify.app/", url2: "https://github.com/ajayahara/JIOMART.COM_RCT_201", des1: 'JioMart is an Indian e-commerce company . It makes your grocery shopping even simpler. No more hassles of sweating it out in crowded markets, grocery shops & supermarkets.', des2: 'A collaborative project cloned within five days. By cloning this website we are trying to implement some functionality.', tech: 'React,Chakra,Redux', resp: 'Cart & Payment Page' ,path:'/Images/SUGAR-Cosmetics-logo.png'}
    ,
    { name: "Nykaa", url1: "https://melodic-wisp-f3c5fb.netlify.app/", url2: "https://github.com/ajayahara/JIOMART.COM_RCT_201", des1: 'JioMart is an Indian e-commerce company . It makes your grocery shopping even simpler. No more hassles of sweating it out in crowded markets, grocery shops & supermarkets.', des2: 'A collaborative project cloned within five days. By cloning this website we are trying to implement some functionality.', tech: 'React,Chakra,Redux', resp: 'Cart & Payment Page', path:'/Images/nykaa-logo.png'}
  ]
  return (
    <div className='project' id='project'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {data.map((el, i) => {
          return <div className='project-item' key={i}>
            <div className='item-left'>
              <img src={el.path} alt="" />
              <div className='item-name'>
               {el.name}
              </div>
              <div className='button'>
                <button><a href={el.url2} target='_blank'  rel="noreferrer" >Github</a></button>
                <button><a href={el.url1}  rel="noreferrer" target='_blank'>Live</a></button>
              </div>
            </div>
            <div className='item-right'>
              <div>
                -Responsibility:{el.resp}
              </div>
              <div>
                -Tech Stacks:{el.tech}
              </div>
              <div>
                -{el.des1}
              </div>
              <div>
               -{el.des2}
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
