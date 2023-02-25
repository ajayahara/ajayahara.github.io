import React from 'react'
import "../CSS/Skill.css"
export const Skill = () => {
  const arr = [{ url: "/Images/html5.png", name: "Html" }, { url: "/Images/css.png", name: "CSS3" }, { url: "/Images/github.png", name: "Github" }, { url: "/Images/javascript.png", name: "Javascript" }, { url: "/Images/git.png", name: "Git" }, { url: "/Images/react.png", name: "React" }, { url: "/Images/bootstrap.png", name: "Bootstrap" }, { url: "/Images/mongodb.png", name: "MongoDB" },{url: "/Images/express.png", name: "Express" },{url: "/Images/node.png", name: "NodeJs" },{url: "/Images/redux.png", name: "Redux" },{url: "/Images/typescript.png", name: "Typescript" }];
  return (
    <div className='outer-skill' id='skill'>
      <h1 className='skill-text'>
       TECH SKILLS
      </h1>
      <div className='skill'>
      {arr.map((el) => {
        return <div key={el.url + el.name} className='skillitem'>
          <img src={el.url} alt={el.name} />
          <div>
            {el.name}
          </div>
        </div>
      })}
      </div>
    </div>
  )
}
