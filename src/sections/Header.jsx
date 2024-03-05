const Header = ({navActive,activeSection,handleNavClick,updateNavActive}) => {
    return (
        <header className="header">
            <a href="#" className="logo">
                Ajaya
            </a>
            <div className={navActive ? "bx bx-x" : "bx bx-menu"} id="menu-icon" onClick={() => {
               updateNavActive(!navActive)
            }}></div>
            <nav className={navActive ? 'navbar active' : 'navbar'} >
                <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>Home</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')} >About</a>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>Projects</a>
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleNavClick('skills')}>Skills</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')} >Contact</a>
                <a download href="Ajaya-Kumar-Behera-Resume.pdf" onClick={()=>{
                    window.open("https://drive.google.com/file/d/1zTgZBMP6AiSJeX31mpRlHNI_RgJSNO3o/view?usp=sharing",'_blank')
                }} >Resume <i className='bx bxs-down-arrow-circle'></i></a>
            </nav>
        </header>
    )
}

export default Header