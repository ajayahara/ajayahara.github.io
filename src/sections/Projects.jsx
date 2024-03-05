 const Projects = () => {
  const data = [
    {
      name: "Abof.Com",
      url1: "https://teal-biscuit-947d6f.netlify.app/",
      url2: "https://github.com/ajayahara/homely-yarn-5441",
      des1: 'Abof.com is the first D2C digital-first brand from house of Aditya Birla Fashion & Retail.',
      des2: 'A collaborative project cloned within five days. By cloning this website we are trying to implement some functionality.',
      tech: [
        "bx bxl-react",
        "bx bxl-redux",
        "bx bxl-mongodb"
      ],
      resp: 'Product page & its functionalities, Login page & Register Page',
      path: 'abof.png'
    }
    ,
    {
      name: "Jiomart.Com",
      url1: "https://darling-sunshine-8dc7e8.netlify.app/",
      url2: "https://github.com/ajayahara/JIOMART.COM_RCT_201",
      des1: 'JioMart is an Indian e-commerce company . It makes your grocery shopping even simpler. No more hassles of sweating it out in crowded markets, grocery shops & supermarkets.',
      des2: 'A collaborative project cloned within five days. By cloning this website we are trying to implement some functionality.',
      tech: [
        "bx bxl-react",
        "bx bxl-redux",
        "bx bxl-css3"
      ],
      resp: 'Cart & Payment Pages with its functionalities',
      path: 'jiomart.png'
    }
    ,
    {
      name: "SugarCosmetics.Com",
      url1: "https://spectacular-dasik-11b986.netlify.app/",
      url2: "https://github.com/Krishna90krish/Sugar-Cosmetics-Clone",
      des1: 'SUGAR Cosmetics is a cruelty-free makeup brand that offers a wide range of premium makeup products.It is a cult favorite amongst millennials and is one of ...',
      des2: 'A collaborative project cloned within five days. By cloning this website we are trying to implement some functionality.',
      tech: [
        "bx bxl-react",
        "bx bxl-redux",
        "bx bxl-css3"
      ],
      resp: 'Cart & Payment Page',
      path: 'sugar.png'
    }
    ,
    {
      name: "Nykaa.Com",
      url1: "https://melodic-wisp-f3c5fb.netlify.app/",
      url2: "https://github.com/ajayahara/NYKAA.COM_JS_201",
      des1: 'Nykaa is an India based brand that specialises in multi-beauty and personal care products. the brand specialises in facilitating an extensive collection of cosmetics, luxury as well as wellness products for both women and men.',
      des2: 'A collaborative project cloned within five days. By cloning this website we are trying to implement some functionality.',
      tech: [
        "bx bxl-html5",
        "bx bxl-css3",
        "bx bxl-javascript",
        "bx bxl-bootstrap"
      ],
      resp: 'Navbar, Footer & Product Page',
      path: 'nykaa.png'
    }
  ]
  return (
    <section className='projects' id='projects'>
      <h1 className='heading'>Projects</h1>
      <div className='project-container'>
        {data.map((el, i) => {
          return <div className='project-item project-card' key={i}>
            <div className='item-left'>
              <img src={el.path} alt={el.path} />
            </div>
            <div className='item-right'>
              <div className='item-name project-title'>
                {el.name}
              </div>
              <div className='project-description'>
                -{el.des1}
              </div>
              <div>
                -{el.des2}
              </div>

              <div>
                -Responsibility:{el.resp}
              </div>
              <div className='techstack'>
                <div>Tech Stacks:</div>
                <div> {el.tech.map((ele, j) => {
                  return <i className={ele} key={j} ></i>
                })}</div>
              </div>
              <div className='button'>
                <button><a href={el.url2} target='_blank' rel="noreferrer" className="btn"><i className='bx bxl-github' ></i></a></button>
                <button><a href={el.url1} rel="noreferrer" target='_blank' className="btn"><i className='bx bx-code-alt' ></i></a></button>
              </div>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}
export default Projects
